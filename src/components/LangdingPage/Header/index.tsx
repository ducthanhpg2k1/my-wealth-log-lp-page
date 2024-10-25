import { Select, SelectItem } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

const Header = ({ scrollY }: { scrollY: number }) => {
  return (
    <div
      className={clsx('fixed top-0 w-full z-[1000]', {
        'bg-[rgba(0_0_0_0.08)] backdrop-blur transition-all z-50': scrollY > 0,
      })}
    >
      <div className='container mx-auto flex py-3 px-5 md:py-[36px] justify-between items-center'>
        <Image
          src={isMobile ? '/logo-mobile.png' : '/logo.png'}
          width={238}
          height={37}
          alt=''
          className='md:w-[238px] md:h-[37px] w-[186px] h-[28px]'
        />
        <div className='block md:hidden'>
          <IconMenu />
        </div>
        <Select
          classNames={{
            popoverContent: ['!text-[#4F4F4F] bg-none'],
            value: ['!text-[#4F4F4F] text-[16px] font-normal'],
            selectorIcon: ['w-6 h-6'],
            trigger: ['border-none bg-transparent shadow-none data-[hover=true]:bg-transparent'],
          }}
          defaultSelectedKeys={['vn']}
          className='w-[140px] md:block hidden'
          startContent={
            <Image className='w-6 h-6' src={'/icons/ic-vn.svg'} width={24} height={24} alt='' />
          }
        >
          <SelectItem variant='bordered' key={'vn'}>
            Việt nam
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};
export default Header;

const IconMenu = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <rect x='3' y='11' width='18' height='2' rx='1' fill='#0E5543' />
      <rect x='3' y='5' width='18' height='2' rx='1' fill='#0E5543' />
      <rect x='3' y='17' width='18' height='2' rx='1' fill='#0E5543' />
    </svg>
  );
};
