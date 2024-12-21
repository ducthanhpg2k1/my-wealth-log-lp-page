/* eslint-disable indent */
import { useState } from 'react';

import { Button, Input, Spinner } from '@nextui-org/react';
import Image from 'next/image';

import Text from '@components/UI/Text';
import { toast } from '@components/UI/Toast/toast';

import { useSubcribleUser } from '../service';

const FormSubmitUser = ({ onClose }: { onClose: VoidFunction }) => {
  const [valueEmail, setValueEmail] = useState('');
  const [errorForm, setErrorForm] = useState<boolean>(false);

  const resquestSubcribleUser = useSubcribleUser({
    onSuccess: () => {
      toast.success('Đăng kí nhận thông tin thành công');
      onClose();
    },
  });

  const handleSubcribleUser = () => {
    if (valueEmail) {
      resquestSubcribleUser.run(valueEmail);
    } else {
      setErrorForm(true);
    }
  };
  return (
    <div className='bg-[#131560] p-3 md:p-4 w-full md:w-[485px] h-auto md:h-[319px] rounded-xl shadow-2xl'>
      <div className='flex justify-end items-end'>
        <Button onClick={onClose} size='sm' isIconOnly variant='light' radius='full'>
          <Image
            src={'/icons/ic-close-white.svg'}
            width={10}
            height={10}
            className='w-[10px] h-[10px]'
            alt=''
          />
        </Button>
      </div>
      <div className='flex flex-col gap-[34px]'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <Text className='text-white font-bold text-[32px] leading-[38px]'>
            Đăng ký nhận bản tin
          </Text>
          <Text className='text-white font-normal text-[14px] leading-[16px] text-center px-6'>
            Đăng ký để nhận ngay các thông tin hữu ích về tài chính, tiêu dùng thông minh và các
            thông tin khác
          </Text>
        </div>
        <div className='flex flex-col gap-4 px-8'>
          <div className='flex flex-col gap-1'>
            <Input
              variant='bordered'
              onChange={(e) => {
                setValueEmail(e.target.value);
                setErrorForm(false);
              }}
              classNames={{
                inputWrapper: errorForm
                  ? [
                    'px-3 h-[44px] border-1 bg-white border-solid border-[#dc3545] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
                  ]
                  : [
                    'px-3 h-[44px] border-1 bg-white border-solid border-[#D5D5D5] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
                  ],
                input: ['text-[16px] placeholder:text-[#888] placeholder:text-[16px]'],
              }}
              placeholder='your_email@gmail.com'
              className='w-full h-[44px]'
            />
            {errorForm && !valueEmail && (
              <Text className='text-[#dc3545] text-[12px] font-medium'>Vui lòng nhập email</Text>
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
            onClick={handleSubcribleUser}
            isLoading={resquestSubcribleUser.loading}
            radius='md'
            className='w-full bg-gradient-to-b from-[#73DB66] to-[#70CEB5] mb-8 h-[44px]'
          >
            <Text type='font-16-500' className='text-white'>
              Đăng kí
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FormSubmitUser;
