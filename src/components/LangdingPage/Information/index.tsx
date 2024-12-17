import Image from 'next/image';

import Text from '@components/UI/Text';

const Information = ({ overviews }: any) => {
  return (
    <div className='container mx-auto grid gap-[56px] px-5 md:gap-[168px] grid-cols-1 md:grid-cols-3 py-[65px] md:py-[80px]'>
      {overviews?.map((item: any) => {
        return (
          <>
            {item?.required && (
              <div
                key={item?.id}
                className='flex items-center justify-center text-center flex-col gap-4'
              >
                <Image
                  src={item?.image}
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
            )}
          </>
        );
      })}
    </div>
  );
};
export default Information;
