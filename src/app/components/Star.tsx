import React from 'react';
import Image from 'next/image';

const Star = ({ rating = 0, max = 3, filledSrc = "/star-fill.svg", emptySrc = "/star-empty.svg", size = 20 }) => {
  const stars = [];

  for (let i = 0; i < max; i++) {
    stars.push(
      <Image
        key={i}
        src={i < rating ? filledSrc : emptySrc}
        alt={i < rating ? "filled star" : "empty star"}
        width={size}
        height={size}
        style={{ marginRight: "4px" }}
      />
    );
  }

  return (
    <div className='flex_center'>
      {stars}
    </div>
  );
};

export default Star;
