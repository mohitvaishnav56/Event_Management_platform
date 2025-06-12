'use client'
import React, { useState, useEffect } from 'react'
import EventCard from '../components/events/EventCard'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const Page = () => {
    const eventsData = [
        {
            id: 1,
            category: "Technology",
            price: "$99",
            title: "Tech Conference 2025",
            date: "Jun 15, 2025",
            time: "9:00 AM - 5:00 PM",
            location: "San Francisco Convention Center",
            attendees: { registered: 350, capacity: 400 },
            status: "Filling Fast",
            imageUrl: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1374&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "Design",
            price: "Free",
            title: "UX/UI Bootcamp",
            date: "Jul 20, 2025",
            time: "10:00 AM - 4:00 PM",
            location: "Los Angeles Design Hub",
            attendees: { registered: 120, capacity: 150 },
            status: "Open",
            imageUrl: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?q=80&w=1428&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "Business",
            price: "$199",
            title: "Startup Summit 2025",
            date: "Aug 10, 2025",
            time: "8:00 AM - 6:00 PM",
            location: "New York Business Center",
            attendees: { registered: 450, capacity: 500 },
            status: "Filling Fast",
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 4,
            category: "Education",
            price: "$49",
            title: "EdTech Future Expo",
            date: "Sep 5, 2025",
            time: "11:00 AM - 7:00 PM",
            location: "Chicago Learning Hall",
            attendees: { registered: 200, capacity: 300 },
            status: "Open",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720857673569-3b2d8c886096?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 5,
            category: "Health",
            price: "$59",
            title: "Wellness Retreat 2025",
            date: "Oct 12, 2025",
            time: "7:00 AM - 3:00 PM",
            location: "Denver Wellness Park",
            attendees: {
                registered: 180,
                capacity: 200
            },
            status: "Open",
            imageUrl: "https://plus.unsplash.com/premium_photo-1664299353570-8806eb1de970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            category: "Art",
            price: "Free",
            title: "Digital Art Fest",
            date: "Nov 22, 2025",
            time: "1:00 PM - 9:00 PM",
            location: "Seattle Art Museum",
            attendees: {
                registered: 300,
                capacity: 500
            },
            status: "Open",
            imageUrl: "https://images.unsplash.com/photo-1636471339182-8584b963a73a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 7,
            category: "Finance",
            price: "$149",
            title: "CryptoCon 2025",
            date: "Dec 5, 2025",
            time: "10:00 AM - 5:00 PM",
            location: "Silicon Valley Expo Center",
            attendees: {
                registered: 420,
                capacity: 450
            },
            status: "Filling Fast",
            imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            category: "Music",
            price: "$25",
            title: "Indie Beats Festival",
            date: "Dec 20, 2025",
            time: "4:00 PM - 11:00 PM",
            location: "Austin Music Grounds",
            attendees: {
                registered: 390,
                capacity: 500
            },
            status: "Open",
            imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1470&auto=format&fit=crop"
        }

    ];

    const [events, setEvents] = useState(eventsData);
    const [search, setSearch] = useState("");

    const handleFilter = (category) => {
        if (category === "") {
            setEvents(eventsData);
        } else {
            const filtered = eventsData.filter(event => event.category === category);
            setEvents(filtered);
        }
    };

    return (
        <>
            <Nav />
            <div id='SerachAndFilter' className='flex flex-wrap gap-6 items-center justify-center w-full p-4'>
                <input
                    placeholder='Search by Title'
                    type='text'
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearch(value);
                        const filtered = eventsData.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
                        setEvents(filtered);
                    }}
                    className='min-w-[40%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <select
                    onChange={(e) => handleFilter(e.target.value)}
                    className='min-w-[40%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    <option value=''>Filter by Category</option>
                    <option value='Technology'>Technology</option>
                    <option value='Design'>Design</option>
                    <option value='Business'>Business</option>
                    <option value='Education'>Education</option>
                    <option value='Health'>Health</option>
                    <option value='Art'>Art</option>
                    <option value='Finance'>Finance</option>
                    <option value='Music'>Music</option>

                </select>
            </div>

            <div className='py-10 flex flex-wrap gap-10 items-center justify-center'>
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Page;
