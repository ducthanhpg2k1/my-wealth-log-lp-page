import Image from 'next/image';

import Text from '@components/UI/Text';

// eslint-disable-next-line import/no-cycle
import { AnimatedItem } from '..';

const DATA_FEATURES = [
  {
    id: 1,
    title: 'Hỗ trợ AI',
    imgUrl: '/icons/ic-features1.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 2,
    title: 'Tiết kiệm cho tương lai',
    imgUrl: '/icons/ic-features2.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 3,
    title: 'Quản lý tài sản hiệu quả',
    imgUrl: '/icons/ic-features3.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 4,
    title: 'Kiểm soát tài chính',
    imgUrl: '/icons/ic-features4.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 5,
    title: 'Quét hoá đơn',
    imgUrl: '/icons/ic-features5.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 6,
    title: 'Thay đổi Theme tuỳ ý',
    imgUrl: '/icons/ic-features6.svg',

    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
];

const Features = () => {
  return (
    <div className='container mx-auto flex flex-col gap-[80px] pb-[80px]'>
      <AnimatedItem
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.3,
        }}
      >
        <Text type='font-40-700' className='font-setting text-green-3 text-center'>
          Tính năng nổi bật
        </Text>
      </AnimatedItem>
      <AnimatedItem
        transition={{
          duration: 0.5,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <div className='grid grid-cols-3 gap-x-[168px] gap-y-[100px]'>
          {DATA_FEATURES?.map((item) => {
            return (
              <div
                key={item?.id}
                className='flex flex-col gap-5 text-center items-center justify-center'
              >
                <Image src={item?.imgUrl} width={64} height={64} alt='' className='w-16 h-16' />
                <div className='flex flex-col gap-4'>
                  <Text type='font-20-500' className='text-green-3 font-setting'>
                    {item?.title}
                  </Text>
                  <Text type='font-16-400'>{item?.description}</Text>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedItem>
    </div>
  );
};
export default Features;
