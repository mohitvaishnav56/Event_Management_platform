import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import PropCards from './PropCards'

const Section = () => {
    let props = [
        {
            title: "Easy Event Creation",
            description: "Create beautiful event pages in minutes with our intuitive drag-and-drop editor",
            icon: "/calender.svg", // Replace with actual path or import
        },
        {
            title: "Fast Ticket Booking",
            description: "Seamless booking experience with just a few clicks for attendees",
            icon: "/ticket.svg", // Replace with actual path or import
        },
        {
            title: "Real-time Seat Tracking",
            description: "Monitor seat availability and occupancy in real-time",
            icon: "/clock.svg", // Replace with actual path or import
        },
        {
            title: "QR Code Verification",
            description: "Streamline check-ins with secure QR code ticket verification",
            icon: "/qrcode-scan.svg", // Replace with actual path or import
        },
        {
            title: "Email Reminders",
            description: "Automated email reminders for attendees before your event",
            icon: "/envelope-alt.svg", // Replace with actual path or import
        },
    ];
    return (
        <div className='p-6 w-full'>
            <Heading text={"Why Choose US ?"} />
            <SubHeading text={"Our platform delivers everything you need to create, manage, and grow successful events"} />
            <div className='w-full p-6 flex gap-6 justify-center flex-wrap'>
                {props.map((value, index) => {
                    return <PropCards card={value} key={index} />
                })}
            </div>
        </div>
    )
}

export default Section