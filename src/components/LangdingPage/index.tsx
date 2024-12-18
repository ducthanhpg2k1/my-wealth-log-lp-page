/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable import/no-cycle */
import { useEffect, useMemo, useRef, useState } from 'react';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { Info } from '@phosphor-icons/react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

import Text from '@components/UI/Text';

import CardFooter from './CardFooter';
import Evaluate from './Evaluate';
import Features from './Features';
import FooterLangdingPage from './FooterLangdingPage';
import FormSubmitUser from './FormSubmitUser';
import Header from './Header';
import Information from './Information';
import Introduce from './Introduce';
import { useGetConfigLdPage } from './service';
import SubmitForm from './SubmitForm';

const LangdingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const divRef: any = useRef(null);
  const { dataConfigLdPage } = useGetConfigLdPage();

  const [openSubmitForm, setOpenSubmitForm] = useState(true);

  const dataConfig = useMemo(() => {
    return dataConfigLdPage?.data?.content;
  }, [dataConfigLdPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current.scrollTop > 0) {
        setScrollY(divRef.current.scrollTop);
      } else {
        setScrollY(0);
      }
    };

    if (divRef.current) {
      divRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenAppStore = () => {
    const iosAppUrl = dataConfig?.banners?.[0]?.url_appstore;
    window.open(iosAppUrl, '_blank');
  };

  const handleOpenGooglePlay = () => {
    const androidAppUrl = dataConfig?.banners?.[0]?.url_google;
    window.open(androidAppUrl, '_blank');
  };

  const urlBanner = dataConfig?.banners?.[0]?.image;
  const urlMobileBanner = dataConfig?.banners?.[0]?.image_mobile;

  return (
    <div ref={divRef} className='w-screen h-screen overflow-x-hidden flex flex-col overflow-auto'>
      <Header scrollY={scrollY} />
      <div
        id='#home'
        className={clsx(
          'w-full mt-[-48px] md:mt-0 min-h-[640px] md:min-h-[738px] bg-center bg-no-repeat bg-[length:100%_100%]',
        )}
        style={{ backgroundImage: isMobile ? `url(${urlMobileBanner})` : `url(${urlBanner})` }}
      >
        <div className='flex flex-col pt-48 px-5 md:px-0 md:pt-0 md:justify-center items-center h-full gap-7 md:w-6/12 m-auto'>
          {dataConfig?.banners?.[0]?.required && (
            <div className='flex flex-col gap-4 text-center'>
              <AnimatedItem
                transition={{
                  duration: 0.3,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <Text type='font-50-600' className='font-setting text-green-3'>
                  {dataConfig?.banners?.[0]?.title}
                </Text>
              </AnimatedItem>
              <AnimatedItem
                transition={{
                  duration: 0.4,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <Text type='font-16-400'>{dataConfig?.banners?.[0]?.description}</Text>
              </AnimatedItem>
            </div>
          )}
          {dataConfig?.banners?.[0]?.required && (
            <AnimatedItem
              transition={{
                duration: 0.6,
                ease: 'linear',
                delay: 0.4,
              }}
            >
              <div className='flex items-center gap-4'>
                <Image
                  src={'/img-appstore.png'}
                  width={110}
                  onClick={handleOpenAppStore}
                  height={32}
                  alt=''
                  className='w-auto h-auto hover:opacity-85 cursor-pointer'
                />
                <Image
                  src={'/img-googleplay.png'}
                  onClick={handleOpenGooglePlay}
                  width={110}
                  height={32}
                  alt=''
                  className='w-auto h-auto cursor-pointer hover:opacity-85'
                />
              </div>
            </AnimatedItem>
          )}
        </div>
      </div>
      <AnimatedItem
        transition={{
          duration: 0.5,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <Information overviews={dataConfig?.overviews} />
      </AnimatedItem>
      <Introduce functions={dataConfig?.functions} />
      <Features features={dataConfig?.features} />
      <Evaluate users={dataConfig?.users} />
      <AnimatedItem
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <CardFooter
          handleOpenAppStore={handleOpenAppStore}
          handleOpenGooglePlay={handleOpenGooglePlay}
        />
      </AnimatedItem>
      <AnimatedItem
        transition={{
          duration: 0.3,
          ease: 'linear',
          delay: 0.3,
        }}
      >
        <SubmitForm />
      </AnimatedItem>

      <FooterLangdingPage />
      <div className='fixed bottom-4 right-0 px-4 md:px-0 md:bottom-3 md:right-8'>
        <Popover isOpen={openSubmitForm} placement='top'>
          <PopoverTrigger>
            <Button
              onClick={() => setOpenSubmitForm(!openSubmitForm)}
              isIconOnly
              size='lg'
              className='bg-green-3'
              radius='full'
            >
              <Info size={32} weight='fill' color='#fff' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='p-0 pr-4 bg-transparent shadow-none'>
            <FormSubmitUser onClose={() => setOpenSubmitForm(false)} />
          </PopoverContent>
        </Popover>
      </div>
      {scrollY > 1000 && (
        <div className='fixed bottom-20 right-4 md:bottom-20 md:right-8'>
          <Button onClick={scrollToTop} isIconOnly radius='full' size='lg' className='bg-[#0E5543]'>
            <IconCaretUp />
          </Button>
        </div>
      )}
    </div>
  );
};
export default LangdingPage;

const IconCaretUp = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 9.52489L4.65 16.8749C4.4 17.1249 4.10417 17.2457 3.7625 17.2374C3.42083 17.2291 3.125 17.0999 2.875 16.8499C2.625 16.5999 2.5 16.3041 2.5 15.9624C2.5 15.6207 2.625 15.3249 2.875 15.0749L10.575 7.39989C10.775 7.19989 11 7.04989 11.25 6.94989C11.5 6.84989 11.75 6.79989 12 6.79989C12.25 6.79989 12.5 6.84989 12.75 6.94989C13 7.04989 13.225 7.19989 13.425 7.39989L21.125 15.0999C21.375 15.3499 21.4958 15.6416 21.4875 15.9749C21.4792 16.3082 21.35 16.5999 21.1 16.8499C20.85 17.0999 20.5542 17.2249 20.2125 17.2249C19.8708 17.2249 19.575 17.0999 19.325 16.8499L12 9.52489Z'
        fill='white'
      />
    </svg>
  );
};

export const AnimatedItem = (props: any) => {
  const { children, transition, className, type } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: type === 'home' ? 0 : 140 },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      className={className}
      animate={controls}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
