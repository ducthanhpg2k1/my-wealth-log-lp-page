import Image from 'next/image';

import Text from '@components/UI/Text';

// eslint-disable-next-line import/no-cycle
import { AnimatedItem } from '..';

const Features = ({ features }: any) => {
  return (
    <div
      id='#feature'
      className='container mx-auto px-5 flex flex-col gap-[40px] md:gap-[80px] pb-[80px]'
    >
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-[168px] gap-y-[56px] md:gap-y-[100px]'>
          {features?.map((item: any) => {
            return (
              <>
                {item?.required && (
                  <div
                    key={item?.id}
                    className='flex flex-col gap-5 text-center items-center justify-center'
                  >
                    <Image src={item?.icon} width={64} height={64} alt='' className='max-w-16 max-h-16 object-contain' />
                    <div className='flex flex-col gap-4'>
                      <Text type='font-20-500' className='text-green-3 font-setting'>
                        {item?.title}
                      </Text>
                      <Text type='font-16-400'>{item?.description}</Text>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </AnimatedItem>
    </div>
  );
};
export default Features;
