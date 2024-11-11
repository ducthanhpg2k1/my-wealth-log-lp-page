import { Button, Input } from '@nextui-org/react';

import Text from '@components/UI/Text';

const SubmitForm = () => {
  return (
    <div
      id='#support'
      className='container grid grid-cols-1 px-5 md:grid-cols-3 gap-[56px] md:gap-[100px] mx-auto pb-[40px] md:pb-[80px]'
    >
      <div className='flex flex-col gap-4'>
        <Text type='font-16-400'>
          Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam tellus.
          Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur.
        </Text>
        <div className='flex items-center gap-4'>
          <div className='hover:opacity-80 cursor-pointer'>
            <IconFacebook />
          </div>
          <div className='hover:opacity-80 cursor-pointer'>
            <IconYoutube />
          </div>
          <div className='hover:opacity-80 cursor-pointer'>
            <IconTiktok />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <Text type='font-16-500'>My Wealth Log</Text>
        <Text type='font-16-400'>Về chúng tôi</Text>
        <Text type='font-16-400'>Tuyển dụng</Text>
      </div>
      <div className='flex flex-col gap-4 mt-[-25px] md:mt-0'>
        <Text type='font-16-500' className='uppercase'>
          Theo dõi
        </Text>
        <Input
          variant='bordered'
          classNames={{
            inputWrapper: [
              'px-3 h-[44px] border-1 bg-white border-solid border-[#D5D5D5] transition-all data-[hover=true]:!border-[#2AA98B] data-[hover=true]:!bg-white group-data-[focus=true]:!border-[#2AA98B]',
            ],
            input: ['text-[16px] placeholder:text-[#888] placeholder:text-[16px]'],
          }}
          placeholder='your_email@gmail.com'
          className='w-full h-[44px]'
        />
        <Button radius='md' className='w-full bg-[#2AA98B] h-[44px]'>
          <Text type='font-16-500' className='text-white'>
            Đăng ký
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default SubmitForm;

const IconFacebook = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <g clipPath='url(#clip0_1787_19139)'>
        <path
          d='M32 16C32 7.16352 24.8365 0 16 0C7.16352 0 0 7.16352 0 16C0 23.5034 5.16608 29.7997 12.135 31.529V20.8896H8.83584V16H12.135V13.8931C12.135 8.44736 14.5997 5.9232 19.9462 5.9232C20.96 5.9232 22.7091 6.12224 23.4246 6.32064V10.7526C23.047 10.713 22.391 10.6931 21.5763 10.6931C18.953 10.6931 17.9392 11.687 17.9392 14.2707V16H23.1654L22.2675 20.8896H17.9392V31.8829C25.8618 30.9261 32.0006 24.1805 32.0006 16H32Z'
          fill='#888888'
        />
        <path
          d='M22.2669 20.8897L23.1648 16.0001H17.9386V14.2709C17.9386 11.6872 18.9523 10.6933 21.5757 10.6933C22.3904 10.6933 23.0464 10.7131 23.424 10.7528V6.32078C22.7085 6.12174 20.9594 5.92334 19.9456 5.92334C14.599 5.92334 12.1344 8.4475 12.1344 13.8933V16.0001H8.83521V20.8897H12.1344V31.5291C13.3722 31.8363 14.6669 32.0001 15.9994 32.0001C16.6554 32.0001 17.3024 31.9598 17.9379 31.883V20.8897H22.2662H22.2669Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_1787_19139'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconYoutube = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <g clipPath='url(#clip0_1787_19140)'>
        <path
          d='M31.3627 8.24705C31.1817 7.56627 30.8252 6.94494 30.3287 6.44526C29.8322 5.94557 29.2132 5.58505 28.5336 5.39978C26.0317 4.72705 16.0317 4.72705 16.0317 4.72705C16.0317 4.72705 6.03174 4.72705 3.52992 5.39978C2.85031 5.58505 2.23128 5.94557 1.73479 6.44526C1.23829 6.94494 0.881746 7.56627 0.700829 8.24705C0.0317384 10.7598 0.0317383 15.9998 0.0317383 15.9998C0.0317383 15.9998 0.0317384 21.2398 0.700829 23.7525C0.881746 24.4333 1.23829 25.0546 1.73479 25.5543C2.23128 26.054 2.85031 26.4145 3.52992 26.5998C6.03174 27.2725 16.0317 27.2725 16.0317 27.2725C16.0317 27.2725 26.0317 27.2725 28.5336 26.5998C29.2132 26.4145 29.8322 26.054 30.3287 25.5543C30.8252 25.0546 31.1817 24.4333 31.3627 23.7525C32.0317 21.2398 32.0317 15.9998 32.0317 15.9998C32.0317 15.9998 32.0317 10.7598 31.3627 8.24705Z'
          fill='#888888'
        />
        <path d='M12.759 20.7581V11.2417L21.1227 15.9999L12.759 20.7581Z' fill='white' />
      </g>
      <defs>
        <clipPath id='clip0_1787_19140'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconTiktok = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <path
        d='M22.7634 0H17.3704V21.7971C17.3704 24.3942 15.2962 26.5276 12.715 26.5276C10.1338 26.5276 8.05958 24.3942 8.05958 21.7971C8.05958 19.2464 10.0877 17.1594 12.5768 17.0667V11.5942C7.09161 11.6869 2.66666 16.1855 2.66666 21.7971C2.66666 27.4551 7.1838 32 12.7611 32C18.3384 32 22.8555 27.4087 22.8555 21.7971V10.6203C24.8836 12.1044 27.3726 12.9855 30 13.0319V7.55942C25.9438 7.42029 22.7634 4.08116 22.7634 0Z'
        fill='#888888'
      />
    </svg>
  );
};
