import React from 'react'

const ShowCards = ({imageUrl, className}) => {
   return (
    <div className={`flex flex-col gap-2 items-center absolute h-[250px] w-1/2 rounded-md bg-gradient-to-br from-gray-100 to-gray-300 p-2 ${className}`}>
        <img
          src={imageUrl||"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"}
          alt="Showcase"
          className="rounded-xl w-full h-auto object-cover"
        />
        <span className='h-1 w-full bg-black'></span>
        <span className='h-1 w-full bg-black'></span>
        <span className='h-1 w-full bg-black'></span>
    </div>
  );
};

export default ShowCards