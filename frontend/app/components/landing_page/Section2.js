'use client'
import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import StepsCard from './StepsCard'
const Section2 = () => {
    const steps = [
  {
    step: 1,
    title: "Sign Up as Organizer or Attendee",
    description: "Create your account in seconds and choose your role"
  },
  {
    step: 2,
    title: "Create/Find Events in Seconds",
    description: "Use our intuitive tools to create or discover events near you"
  },
  {
    step: 3,
    title: "Book Tickets Instantly",
    description: "Secure your spot with our fast and secure booking system"
  },
  {
    step: 4,
    title: "Get QR Code + Confirmation",
    description: "Receive instant confirmation and your entry QR code"
  },
  {
    step: 5,
    title: "Attend with Ease",
    description: "Simply show your QR code at the venue for quick entry"
  }
];

  return (
    <div className='w-full py-5'>
      <Heading text="How It Works" />
      <SubHeading text="Our streamlined process makes event management and attendance a breeze" />
      {steps.map((step, index) => (
        <div key={index} className={`px-2 mt-7 flex md:justify-evenly gap-2 items-center w-full flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="py-5 px-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(136deg, #67B0FB 28.67%, #96C8FB 103.71%)' }}>
            <h1 className="text-6xl font-bold text-white">{step.step}</h1>
          </div>
          <StepsCard title={step.title} description={step.description} />
        </div>
      ))}
    </div>
  )
}

export default Section2