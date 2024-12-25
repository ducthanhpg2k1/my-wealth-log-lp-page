import Image from 'next/image';

import Text from '@components/UI/Text';

const CardFooter = ({ handleOpenAppStore, handleOpenGooglePlay, footer }: any) => {
  return (
    <div className='container mx-auto pb-[80px] px-5'>
      <div className='relative w-full h-[383px] gap-8 grid grid-cols-1 md:grid-cols-2'>
        <Image
          src={footer?.image}
          alt=''
          width={800}
          height={383}
          className='w-full h-full rounded-3xl absolute'
        />
        <div className='md:p-[100px] max-w-[700px] py-[42px] px-6 flex flex-col gap-5 absolute z-50'>
          <Text type='font-40-600' className='text-white'>
            {footer?.title}
          </Text>
          <Text type='font-14-400' className='text-white'>
            {footer?.description}
          </Text>
          <div className='flex items-center gap-4 mt-9 md:mt-0'>
            <Image
              src={'/img-appstore-black.png'}
              width={110}
              height={32}
              onClick={handleOpenAppStore}
              alt=''
              className='md:w-auto w-full h-auto hover:opacity-85 cursor-pointer'
            />
            <Image
              src={'/img-googleplay-black.png'}
              width={110}
              height={32}
              onClick={handleOpenGooglePlay}
              alt=''
              className='md:w-auto w-full h-auto cursor-pointer hover:opacity-85'
            />
          </div>
        </div>
      </div>

      {/* <div className='bg-card-footer h-max md:min-h-[383px] gap-8 grid grid-cols-1 md:grid-cols-2 rounded-3xl'>
        <div className='md:p-[100px] py-[42px] px-6 flex flex-col gap-5'>
          <Text type='font-40-600' className='text-white'>
            {footer?.title}
          </Text>
          <Text type='font-14-400' className='text-white'>
            {footer?.description}
          </Text>
          <div className='flex items-center gap-4 mt-9 md:mt-0'>
            <Image
              src={'/img-appstore-black.png'}
              width={110}
              height={32}
              onClick={handleOpenAppStore}
              alt=''
              className='md:w-auto w-full h-auto hover:opacity-85 cursor-pointer'
            />
            <Image
              src={'/img-googleplay-black.png'}
              width={110}
              height={32}
              onClick={handleOpenGooglePlay}
              alt=''
              className='md:w-auto w-full h-auto cursor-pointer hover:opacity-85'
            />
          </div>
        </div>
        <div className='h-full justify-end items-end'>
          <Image
            src={'/img-apple-phone.png'}
            width={335}
            height={724}
            alt=''
            className='w-auto h-full hidden md:block'
          />
        </div>
      </div> */}
    </div>
  );
};
export default CardFooter;
