'use client'
import React from 'react'

const ShowCards = ({ imageUrl, className }) => {
  return (
    <div className={`md:flex hidden flex-col gap-2 items-center absolute h-[200px] md:h-[250px] w-2/3 md:w-1/2 rounded-md bg-gradient-to-br from-gray-100 to-gray-300 p-2 ${className}`}>
      <img
        src={imageUrl}
        alt="Showcase"
        className="rounded-xl w-full h-full object-cover"
      />
      <span className='h-1 w-full bg-black'></span>
      <span className='h-1 w-full bg-black'></span>
      <span className='h-1 w-full bg-black'></span>
    </div>
  );
};

export default ShowCards
