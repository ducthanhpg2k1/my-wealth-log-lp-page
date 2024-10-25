/* eslint-disable import/no-cycle */
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import Text from '@components/UI/Text';

import { AnimatedItem } from '..';

const DATA_INTRODUCE = [
  {
    id: 1,
    title: 'Ghi chép thu chi dễ dàng hơn',
    urlImage: '/img-introduce1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 2,
    title: 'Ghi chép thu chi dễ dàng hơn',
    urlImage: '/img-introduce2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
  {
    id: 3,
    title: 'Ghi chép thu chi dễ dàng hơn',
    urlImage: '/img-introduce2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus. Aliquam semper convallis.',
  },
];

const Introduce = () => {
  return (
    <div className='container mx-auto flex flex-col px-5  gap-[60px] pb-[80px]'>
      {DATA_INTRODUCE?.map((item, index) => {
        return (
          <AnimatedItem
            key={item?.id}
            transition={{
              duration: 0.3 + index * 0.1,
              ease: 'linear',
              delay: 0.3,
            }}
          >
            <div
              key={item?.id}
              className='grid items-center grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[186px]'
            >
              {index !== 1 && !isMobile && (
                <Image
                  src={item?.urlImage}
                  alt=''
                  className='w-auto h-auto'
                  width={494}
                  height={396}
                />
              )}

              {isMobile && (
                <Image
                  src={item?.urlImage}
                  alt=''
                  className='w-auto h-auto'
                  width={494}
                  height={396}
                />
              )}

              <div className='flex flex-col gap-8'>
                <Text className='text-green-3 font-setting' type='font-40-700'>
                  {item?.title}
                </Text>
                <Text type='font-16-400'>{item?.description}</Text>
              </div>

              {index === 1 && !isMobile && (
                <Image
                  src={item?.urlImage}
                  alt=''
                  className='w-auto h-auto'
                  width={494}
                  height={396}
                />
              )}
            </div>
          </AnimatedItem>
        );
      })}
    </div>
  );
};
export default Introduce;
