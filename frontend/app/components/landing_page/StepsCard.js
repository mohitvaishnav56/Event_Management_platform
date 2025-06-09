import React from 'react'

const StepsCard = ({title, description}) => {
  return (
    <div className='p-5 min-w-1/2 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl font-bold text-[#3752C7]'>{title}</h1>
        <p className='text-gray-700 font-semibold'>{description}</p>
    </div>
  )
}

export default StepsCard