/* eslint-disable import/no-cycle */
import { useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Text from '@components/UI/Text';

import CardFooter from './CardFooter';
import Evaluate from './Evaluate';
import Features from './Features';
import FooterLangdingPage from './FooterLangdingPage';
import Header from './Header';
import Information from './Information';
import Introduce from './Introduce';
import SubmitForm from './SubmitForm';

const LangdingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const divRef: any = useRef(null);

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
  return (
    <div ref={divRef} className='w-screen h-screen overflow-x-hidden flex flex-col overflow-auto'>
      <Header scrollY={scrollY} />
      <div className='w-full bg-[url("/bg-header.png")] min-h-[738px] bg-center bg-no-repeat bg-[length:100%_100%]'>
        <div className='flex flex-col justify-center items-center h-full gap-7 w-6/12 m-auto'>
          <div className='flex flex-col gap-4 text-center'>
            <AnimatedItem
              transition={{
                duration: 0.3,
                ease: 'linear',
                delay: 0.4,
              }}
            >
              <Text type='font-50-600' className='font-setting text-green-3'>
                This is My Wealth Log Slogan slogan
              </Text>
            </AnimatedItem>
            <AnimatedItem
              transition={{
                duration: 0.4,
                ease: 'linear',
                delay: 0.4,
              }}
            >
              <Text type='font-16-400'>
                Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam
                tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur.
              </Text>
            </AnimatedItem>
          </div>
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
                height={32}
                alt=''
                className='w-auto h-auto hover:opacity-85 cursor-pointer'
              />
              <Image
                src={'/img-googleplay.png'}
                width={110}
                height={32}
                alt=''
                className='w-auto h-auto cursor-pointer hover:opacity-85'
              />
            </div>
          </AnimatedItem>
        </div>
      </div>
      <AnimatedItem
        transition={{
          duration: 0.5,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <Information />
      </AnimatedItem>
      <Introduce />
      <Features />
      <Evaluate />
      <AnimatedItem
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <CardFooter />
      </AnimatedItem>
      <AnimatedItem
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.3,
        }}
      >
        <SubmitForm />
      </AnimatedItem>

      <FooterLangdingPage />
    </div>
  );
};
export default LangdingPage;

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
