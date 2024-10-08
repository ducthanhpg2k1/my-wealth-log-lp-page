import Image from 'next/image';

import Text from '@components/UI/Text';

const CardFooter = () => {
  return (
    <div className='container mx-auto pb-[80px]'>
      <div className='bg-card-footer min-h-[383px] gap-8 grid grid-cols-2 rounded-3xl'>
        <div className='p-[100px] flex flex-col gap-5'>
          <Text type='font-40-600' className='text-white'>
            Tải ứng dụng ngay
          </Text>
          <Text type='font-14-400' className='text-white'>
            Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam
            tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur.
          </Text>
          <div className='flex items-center gap-4'>
            <Image
              src={'/img-appstore-black.png'}
              width={110}
              height={32}
              alt=''
              className='w-auto h-auto hover:opacity-85 cursor-pointer'
            />
            <Image
              src={'/img-googleplay-black.png'}
              width={110}
              height={32}
              alt=''
              className='w-auto h-auto cursor-pointer hover:opacity-85'
            />
          </div>
        </div>
        <Image
          src={'/img-apple-phone.png'}
          width={335}
          height={724}
          alt=''
          className='w-auto h-auto'
        />
      </div>
    </div>
  );
};
export default CardFooter;
