import React from 'react'
import ShowCards from './ShowCards'
const Hero = () => {
  return (
    <div
      className='h-[80%] w-[99%] rounded-2xl flex'
      style={{ background: 'linear-gradient(102deg, #366BE6 22.77%, #A0B0F6 97.87%)' }}
    >
      <div className='w-1/2 h-full p-4 flex justify-center flex-col'>
        <h1 className='text-8xl font-[inter] font-black text-white'>
          Hello!
        </h1>
        <h2 className='text-4xl ml-16 font-black font-[inter] text-white'>
          let your show
        </h2>
        <h1 className='text-9xl ml-18 font-black text-white font-[Irish Grover]'>
          GOES
        </h1>
        <h1 className='text-9xl ml-[50%] font-black text-white font-[Irish Grover]'>
          UP
        </h1>
      </div>
      <div className='w-1/2 h-full p-10 relative'>
        <div id='showcase-cards' className='w-full min-h-[80%] relative px-5 m-auto bg-amber-400'>
          <ShowCards imageUrl={"https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"} className="origin-bottom-left top-1/2 left-[70%] -translate-x-[60%]  -rotate-[-10deg] z-10" />
          <ShowCards imageUrl={"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww"} className="origin-bottom-right top-1/2 right-[25%] -translate-x-[40%] -rotate-[10deg] z-0" />
        </div>
        <h1 className='text-3xl text-white m-auto mt-[50%] text-center font-semibold font-[Irish Grover] w-1/2 '>
          Book Your Events Fastest Ever
        </h1>
      </div>
    </div>
  )
}

export default Hero
