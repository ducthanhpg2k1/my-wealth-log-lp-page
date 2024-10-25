/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { Avatar, Progress } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import Slider from 'react-slick';

import Text from '@components/UI/Text';
import { getAvatar } from '@utils/common';

import { reviews } from '..';

const ReviewCardMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (oldIndex: any, newIndex: any) => setCurrentSlide(newIndex),
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <Slider {...settings} className='custom-slider'>
        {reviews.map((review) => (
          <div
            key={review?.id}
            className={clsx(
              'bg-white w-full py-8 px-4 rounded-lg border-2 border-solid border-[#F6F6F6]',
            )}
          >
            <div className='flex items-center mb-4 justify-center text-center'>
              <Avatar src={getAvatar()} className='w-12 h-12 mr-4' />
              <div className='flex flex-col gap-1 text-start'>
                <Text type='font-18-500'>{review.name}</Text>
                <div className='flex items-center'>
                  <Image
                    width={120}
                    height={24}
                    alt=''
                    className='w-[120px] h-6'
                    src={'/img-start.png'}
                  />
                </div>
              </div>
            </div>
            <Text type='font-16-400' className='text-center'>
              {review.content}
            </Text>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center items-center'>
        <Progress
          classNames={{
            base: 'h-[5px] w-[72px]',
          }}
          color='default'
          size='md'
          value={currentSlide + 1}
          maxValue={reviews?.length}
        />
      </div>
    </div>
  );
};
export default ReviewCardMobile;
