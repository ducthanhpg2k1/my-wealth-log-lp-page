import Image from 'next/image';

import Text from '@components/UI/Text';

const DATA_INFORMATION = [
  {
    id: 1,
    title: 'Thông tin bảo mật 100%',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. ',
  },
  {
    id: 2,
    title: 'Thông tin bảo mật 100%',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. ',
  },
  {
    id: 3,
    title: 'Thông tin bảo mật 100%',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. ',
  },
];

const Information = () => {
  return (
    <div className='container mx-auto grid gap-[168px] grid-cols-3 py-[80px]'>
      {DATA_INFORMATION?.map((item) => {
        return (
          <div
            key={item?.id}
            className='flex items-center justify-center text-center flex-col gap-4'
          >
            <Image
              src={'/svgIcon/ic-infomation.svg'}
              alt=''
              width={42}
              height={57}
              className='w-[42px] h-[57px]'
            />

            <div className='flex flex-col gap-3'>
              <Text className='text-green-3 font-setting' type='font-20-700'>
                {item?.title}
              </Text>
              <Text>{item?.description}</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Information;
