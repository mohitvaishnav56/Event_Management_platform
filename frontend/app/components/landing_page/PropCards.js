import React from 'react'

const PropCards = ({card}) => {
  return (
   <div className="bg-white rounded-2xl shadow-md py-6 px-10 w-[350px] flex flex-col ">
      <div className="w-28 h-28 rounded-full bg-[#227ceb]/80 flex items-center justify-center mb-4">
        <img src={card.icon} alt={card.title} className="w-14 h-14" />
      </div>
      <h3 className="text-xl font-bold text-[#2e7dde]">{card.title}</h3>
      <p className="text-sm mt-2 text-black ">{card.description}</p>
    </div>
  )
}

export default PropCards