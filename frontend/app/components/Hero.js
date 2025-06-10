'use client'
import React from 'react'
import ShowCards from './ShowCards'

const Hero = () => {
  return (
    <div
      className='flex flex-col md:flex-row h-auto md:h-[80%] w-[99%] rounded-2xl'
      style={{ background: 'linear-gradient(102deg, #366BE6 22.77%, #A0B0F6 97.87%)' }}
    >
      {/* Left Text Section */}
      <div className='w-full md:w-1/2 h-full p-4 flex justify-center flex-col'>
        <h1 className='text-5xl md:text-8xl font-[inter] font-black text-white'>
          Hello!
        </h1>
        <h2 className='text-2xl md:text-4xl ml-4 md:ml-16 font-black font-[inter] text-white'>
          let your show
        </h2>
        <h1 className='text-6xl md:text-9xl ml-6 md:ml-18 font-black text-white font-[Irish Grover]'>
          GOES
        </h1>
        <h1 className='text-6xl md:text-9xl ml-[40%] md:ml-[50%] font-black text-white font-[Irish Grover]'>
          UP
        </h1>
      </div>

      {/* Right Image Section */}
      <div className='w-full md:w-1/2 h-full p-4 md:p-10 relative flex flex-col items-center'>
        <div id='showcase-cards' className='w-full min-h-[80%] relative px-2 md:px-5'>
          <ShowCards
            imageUrl="https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?w=500&auto=format&fit=crop&q=60"
            className="origin-bottom-left top-1/2 left-[60%] -translate-x-[60%] -rotate-[-10deg] z-10"
          />
          <ShowCards
            imageUrl="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60"
            className="origin-bottom-right top-[60%] right-[20%] -translate-x-[40%] -rotate-[10deg] z-0"
          />
        </div>

        <h1 className='text-xl md:text-3xl text-white mt-6 md:mt-[50%] text-center font-semibold font-[Irish Grover] w-4/5'>
          Book Your Events Fastest Ever
        </h1>
      </div>
    </div>
  )
}

export default Hero
