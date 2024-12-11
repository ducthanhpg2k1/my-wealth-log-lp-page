/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable import/no-cycle */
import { useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import Text from '@components/UI/Text';

import { DATAMENUS } from '..';

const MobileMenu = ({ isOpen, toggleMenu, refModalSupport }: { isOpen: boolean; toggleMenu: VoidFunction, refModalSupport: any }) => {
  const [activeMenu, setActiveMenu] = useState('#home');

  const handleRedirectMenu = (id: string) => {
    const element = document.getElementById(id);
    if (element && id !== '#support') {
      setActiveMenu(id);

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      toggleMenu();
    } else {
      refModalSupport.current.onOpen()
      toggleMenu();
    }
  };

  return (
    <div className='relative'>
      {isOpen && (
        <div className='fixed inset-0 bg-[#00000066] h-screen  z-40' onClick={toggleMenu} />
      )}

      <div
        className={`
          fixed left-0 right-0 top-0
          h-6/12 bg-white
          transform transition-transform duration-300 ease-in-out shadow-lg z-50
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div>
          <div className='py-3 px-5 flex justify-between items-center bg-[#F1FAFF]'>
            <Image
              src={'/logo-mobile.png'}
              width={186}
              height={28}
              alt=''
              className='w-[186px] h-[28px]'
            />
            <Image
              onClick={toggleMenu}
              src={'/svgIcon/icon-close.svg'}
              width={14}
              height={14}
              alt=''
              className='w-[14px] h-[14px]'
            />
          </div>
          <div className='px-5'>
            {DATAMENUS?.map((item) => {
              return (
                <div
                  className='p-4 border-solid border-b-1 border-b-[#E7E7E7]'
                  onClick={() => handleRedirectMenu(item.href)}
                  key={item?.id}
                >
                  <Text
                    type='font-16-500'
                    className={clsx('text-[#4F4F4F] hover:text-[#2AA98B]', {
                      '!text-[#2AA98B]': item?.href === activeMenu,
                    })}
                  >
                    {item?.label}
                  </Text>
                </div>
              );
            })}
            <div className='p-4 flex items-center gap-2'>
              <Image className='w-6 h-6' src={'/icons/ic-vn.svg'} width={24} height={24} alt='' />
              <Text type='font-16-500' className={clsx('text-[#4F4F4F]', {})}>
                Tiếng Việt
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
