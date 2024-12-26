/* eslint-disable import/no-cycle */
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import Text from '@components/UI/Text';

import { AnimatedItem } from '..';

const Introduce = ({ functions }: any) => {
  return (
    <div className='container mx-auto flex flex-col px-5  gap-[60px] pb-[80px]'>
      {functions?.map((item: any, index: number) => {
        return (
          <>
            {item?.required && (
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
                  {(index % 2 === 0) && !isMobile && (
                    <Image
                      src={item?.image}
                      alt=''
                      className='w-auto h-auto'
                      width={494}
                      height={396}
                    />
                  )}

                  {isMobile && (
                    <div className='flex justify-center items-center'>
                      <Image
                        src={item?.image}
                        alt=''
                        className='w-auto h-auto'
                        width={494}
                        height={396}
                      />
                    </div>
                  )}

                  <div className='flex flex-col gap-8'>
                    <Text className='text-green-3 font-setting' type='font-40-700'>
                      {item?.title}
                    </Text>
                    <Text type='font-16-400'>{item?.description}</Text>
                  </div>

                  {(index % 2 !== 0) && !isMobile && (
                    <Image
                      src={item?.image}
                      alt=''
                      className='w-auto h-auto'
                      width={494}
                      height={396}
                    />
                  )}
                </div>
              </AnimatedItem>
            )}
          </>
        );
      })}
    </div>
  );
};
export default Introduce;
