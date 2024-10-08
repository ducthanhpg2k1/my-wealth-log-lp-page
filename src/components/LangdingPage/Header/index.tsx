import { Select, SelectItem } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';

const Header = ({ scrollY }: { scrollY: number }) => {
  return (
    <div
      className={clsx('fixed top-0 w-full z-[1000]', {
        'bg-[rgba(0_0_0_0.08)] backdrop-blur transition-all z-50': scrollY > 0,
      })}
    >
      <div className='container mx-auto flex py-[36px] justify-between items-center'>
        <Image src={'/logo.png'} width={238} height={37} alt='' className='w-[238px] h-[37px]' />
        <Select
          classNames={{
            popoverContent: ['!text-[#4F4F4F] bg-none'],
            value: ['!text-[#4F4F4F] text-[16px] font-normal'],
            selectorIcon: ['w-6 h-6'],
            trigger: ['border-none bg-transparent shadow-none data-[hover=true]:bg-transparent'],
          }}
          defaultSelectedKeys={['vn']}
          className='w-[140px]'
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
