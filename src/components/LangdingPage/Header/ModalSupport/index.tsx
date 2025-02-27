/* eslint-disable indent */
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Button, Input, ModalBody, Spinner, Textarea } from '@nextui-org/react';
import Image from 'next/image';

import CustomModal from '@components/UI/CustomModal';
import Text from '@components/UI/Text';
import { toast } from '@components/UI/Toast/toast';

import { useFeedBackUser } from '../service';

interface IModalSupport {}

const ModalSupport = (props: IModalSupport, ref?: any) => {
  const [visible, setVisible] = useState(false);

  const [valueEmail, setValueEmail] = useState('');
  const [valueInformation, setValueInformation] = useState('');
  const [errorForm, setErrorForm] = useState<boolean>(false);

  const resquestFeedBackUser = useFeedBackUser({
    onSuccess: () => {
      onVisible();
      toast.success('Gửi phản hồi thành công');
    },
  });

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        setVisible(true);
      },
      onClose: () => setVisible(false),
    };
  });
  const onVisible = () => {
    setVisible(!visible);
    setErrorForm(false);
    setValueEmail('');
    setValueInformation('');
  };

  const handleSend = () => {
    if (valueEmail && valueInformation) {
      resquestFeedBackUser.run({
        respondent: valueEmail,
        comment: valueInformation,
      });
    } else {
      setErrorForm(true);
    }
  };

  return (
    <CustomModal placementMoblie='center' size='2xl' isOpen={visible} onClose={onVisible}>
      <>
        <ModalBody className='p-4 flex flex-col gap-2'>
          <div className='flex justify-end items-center'>
            <Button onClick={onVisible} isIconOnly variant='light' radius='full'>
              <Image
                src={'/icons/ic-close.svg'}
                width={16}
                height={16}
                className='w-4 h-4'
                alt=''
              />
            </Button>
          </div>
          <div className='md:px-10 px-4 flex flex-col gap-6'>
            <Text type='font-24-700' className='text-[#2AA98B]'>
              Gửi phản hồi
            </Text>
            <div className='flex flex-col gap-1'>
              <Input
                variant='bordered'
                labelPlacement='outside'
                label='Email/Số điện thoại*'
                onChange={(e) => setValueEmail(e.target.value)}
                classNames={{
                  inputWrapper:
                    errorForm && !valueEmail
                      ? [
                          'px-3 h-[44px] border-1 bg-white border-solid border-[#dc3545] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
                        ]
                      : [
                          'px-3 h-[44px] border-1 bg-white border-solid border-[#D5D5D5] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
                        ],
                  input: ['text-[16px] placeholder:text-[#888] placeholder:text-[16px]'],
                }}
                placeholder='Nhập email/Số điện thoại'
                className='w-full h-[44px]'
              />
              {errorForm && !valueEmail && (
                <Text className='text-[#dc3545] text-[12px] font-medium'>
                  Vui lòng nhập email hoặc số điện thoại
                </Text>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <Textarea
                labelPlacement='outside'
                variant='bordered'
                onChange={(e) => setValueInformation(e.target.value)}
                minRows={6}
                classNames={{
                  inputWrapper:
                    errorForm && !valueInformation
                      ? [
                          'px-3 h-[44px] border-1 bg-white border-solid border-[#dc3545] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
                        ]
                      : [
                          'px-3 h-[44px] border-1 bg-white border-solid border-[#D5D5D5] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
                        ],
                  input: ['text-[16px] placeholder:text-[#888] placeholder:text-[16px]'],
                }}
                className='w-full'
                label='Thông tin góp ý*'
                placeholder='Nhập văn bản'
              />
              {errorForm && !valueInformation && (
                <Text className='text-[#dc3545] text-[12px] font-medium'>
                  Vui lòng nhập thông tin góp ý
                </Text>
              )}
            </div>

            <Button
              spinner={
                <Spinner
                  size='sm'
                  classNames={{
                    circle1: 'border-b-white',
                  }}
                />
              }
              onClick={handleSend}
              isLoading={resquestFeedBackUser.loading}
              radius='md'
              className='w-full bg-gradient-to-b from-[#73DB66] to-[#70CEB5] mb-8 h-[44px]'
            >
              <Text type='font-16-500' className='text-white'>
                Gửi
              </Text>
            </Button>
          </div>
        </ModalBody>
      </>
    </CustomModal>
  );
};
export default forwardRef(ModalSupport);
