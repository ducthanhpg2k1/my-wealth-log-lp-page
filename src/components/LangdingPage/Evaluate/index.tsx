/* eslint-disable import/no-cycle */
import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import Masonry from 'react-masonry-css';

import Text from '@components/UI/Text';

import ReviewCardMobile from './ReviewCardMobile';
import { AnimatedItem } from '..';
import RateStar from '../RateStar';

const Evaluate = ({ users }: any) => {
  return (
    <div className='container mx-auto px-5 flex flex-col gap-[40px] md:gap-[160px] pb-[40px] md:pb-[80px]'>
      <div className='flex flex-col gap-3 md:gap-6 text-center items-center'>
        <AnimatedItem
          transition={{
            duration: 0.3,
            ease: 'linear',
            delay: 0.4,
          }}
        >
          <Text type='font-40-700' className='text-green-3 font-setting'>
            Đánh giá từ người dùng
          </Text>
        </AnimatedItem>
        <AnimatedItem
          transition={{
            duration: 0.5,
            ease: 'linear',
            delay: 0.4,
          }}
        >
          <Text type='font-14-400'>
            Lorem ipsum dolor sit amet consectetur. Semper nibh sit tincidunt posuere aliquam
            tellus. Aliquam semper convallis. Lorem ipsum dolor sit amet consectetur.
          </Text>
        </AnimatedItem>
      </div>
      {!isMobile && <ReviewCard users={users} />}
      {isMobile && (
        <AnimatedItem
          transition={{
            duration: 0.6,
            ease: 'linear',
            delay: 0.4,
          }}
        >
          <ReviewCardMobile users={users} />
        </AnimatedItem>
      )}
    </div>
  );
};
export default Evaluate;

const breakpointColumnsObj = {
  default: 3, // 3 cột mặc định
  1100: 2, // 2 cột khi màn hình nhỏ hơn 1100px
  700: 1, // 1 cột khi màn hình nhỏ hơn 700px
};

const ReviewCard = ({ users }: any) => {
  return (
    <div className='p-6 flex justify-center items-center'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {users?.map((review: any, index: any) => (
          <>
            <AnimatedItem
              key={index}
              transition={{
                duration: 0.3 + index * 0.1,
                ease: 'linear',
                delay: 0.3,
              }}
            >
              <div
                className={clsx(
                  'bg-white w-[389px] py-12 px-6 rounded-lg border-2 border-solid border-[#F6F6F6]',
                  {
                    '!mt-[-100px]': index === 1,
                  },
                )}
              >
                <div className='flex items-center mb-4 justify-center text-center'>
                  {/* <Avatar src={review?.avatar} className='w-12 h-12 mr-4' /> */}
                  <Image
                    alt=''
                    width={48}
                    height={48}
                    src={review?.avatar}
                    className='w-12 rounded-full h-12 mr-4'
                  />
                  <div className='flex flex-col gap-1 text-start'>
                    <Text type='font-18-500'>{review.name}</Text>
                    <div className='flex items-center'>
                      <RateStar rate={review?.rate} />
                    </div>
                  </div>
                </div>
                <Text type='font-16-400' className='text-center'>
                  {review.content}
                </Text>
              </div>
            </AnimatedItem>
          </>
        ))}
      </Masonry>
    </div>
  );
};
