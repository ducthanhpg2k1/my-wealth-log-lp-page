import { Star } from '@phosphor-icons/react';

const RateStar = ({ rate }: { rate: number }) => {
  return (
    <div className='flex items-center gap-1'>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <Star
            key={item}
            size={18}
            color={rate > index ? '#FCBE00' : '#BCBCBC'}
            weight={rate > index ? 'fill' : 'bold'}
          />
        );
      })}
    </div>
  );
};
export default RateStar;
