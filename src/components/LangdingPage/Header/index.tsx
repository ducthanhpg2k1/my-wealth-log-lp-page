/* eslint-disable import/no-cycle */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable unicorn/prefer-query-selector */
import { useState } from 'react';

import { Select, SelectItem } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import Text from '@components/UI/Text';

import MobileMenu from './MobileMenu';

export const DATAMENUS = [
  {
    id: 1,
    href: '#home',
    label: 'Trang chủ',
  },
  {
    id: 2,
    href: '#feature',
    label: 'Tính năng',
  },
  {
    id: 3,
    href: '#support',
    label: 'Hỗ trợ',
  },
];

const Header = ({ scrollY }: { scrollY: number }) => {
  const [activeMenu, setActiveMenu] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirectMenu = (id: string) => {
    setActiveMenu(id);
    const element = document.getElementById(id);

    if (element) {
      element.style.scrollMarginTop = '150px';

      element.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        element.style.scrollMarginTop = '0';
      }, 1000);
    }
  };
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
        <div className='hidden md:flex items-center gap-12 cursor-pointer transition-all'>
          {DATAMENUS?.map((item) => {
            return (
              <Text
                onClick={() => handleRedirectMenu(item.href)}
                type='font-16-500'
                className={clsx('text-[#4F4F4F] hover:text-[#2AA98B]', {
                  '!text-[#2AA98B]': item?.href === activeMenu,
                })}
                key={item?.id}
              >
                {item?.label}
              </Text>
            );
          })}
        </div>
        <div className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>
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
            Việt Nam
          </SelectItem>
        </Select>
      </div>
      <MobileMenu toggleMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />
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
