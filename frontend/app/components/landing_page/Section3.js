'use client'
import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import ReviewCard from './ReviewCard'
const Section3 = () => {
    const testimonials = [
        {
            quote: "The fastest booking experience I've had! Setting up my conference was incredibly simple.",
            name: "David Chen",
            title: "Corporate Event Manager",
            image: "https://i.pinimg.com/736x/d5/07/49/d50749f9c34b1ba48297e5a724577392.jpg",
        },
        {
            quote: "Absolutely seamless from start to finish. I was able to manage everything effortlessly.",
            name: "Samantha Lee",
            title: "Marketing Head",
            image: "https://i.pinimg.com/736x/44/00/bb/4400bb435465b193e4229da8059a0e00.jpg",
        },
        
        {
            quote: "We were able to track attendance and engagement in real time. Loved the analytics!",
            name: "Rhea Kapoor",
            title: "Community Manager",
            image: "https://i.pinimg.com/736x/ed/a8/18/eda8189f01871a841653b4647e53371e.jpg",
        },
        {
            quote: "Honestly, it feels like this tool was designed exactly for our team's needs.",
            name: "Tariq Mahmood",
            title: "Conference Planner",
            image: "https://i.pinimg.com/736x/c5/ee/0f/c5ee0fa60157250014c1d1bd3e8f30d0.jpg",
        },
        {
            quote: "From registration to follow-up emails, everything was automated. Brilliant workflow!",
            name: "Jenny Luo",
            title: "Workshop Host",
            image: "https://i.pinimg.com/736x/ff/dc/17/ffdc17d82df0c632c3c1ced9f909e6c6.jpg",
        },
    ];


    return (
        <div className='w-full py-5'>
            <Heading text="What Our Users Say" />
            <SubHeading text="Don't take our word for it – hear from the people who use our platform" />
            <div className='mt-7 flex gap-10 justify-center w-full flex-wrap'>
                {testimonials.map((review, index) => {
                    return <ReviewCard key={index}
                        quote={review.quote}
                        name={review.name}
                        title={review.title}
                        image={review.image} />
                })}
            </div>
        </div>
    )
}

export default Section3