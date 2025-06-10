'use client'
import Link from 'next/link'
import React from 'react'
import Button from "./Button";

const Nav = () => {
    const links = [
        {
            title: "Home",
            Link: "/"
        },
        {
            title: "About",
            Link: "/about"
        },
        {
            title: "Events",
            Link: "/events"
        },
        {
            title: "Contact",
            Link: "/contact"
        },
    ]
    return (
        <div className='min-w-full flex items-center justify-between bg-white p-2 z-20'>
            <div className='logo h-10 w-10 bg-black text-white flex items-center justify-center font-bold' >
                E
            </div>
            <div id='links' className='md:flex hidden md:gap-15'>
                {links.map((link, index) => {
                    return <Link href={link.Link} key={index}>{link.title}</Link>
                })}
            </div>
            <div className='p-3 flex gap-5'>
                <Button path = {"/auth/login"} className={"bg-[#3752C7] border-[2px] border-[transparent] rounded text-white cursor-pointer   hover:text-[#3752C7] hover:border-[#3752C7] hover:bg-white"} text={"Login"} />
                <Button  path = {"/auth/register"} className={"text-[#3752C7] border-[2px] border-[#3752C7] rounded cursor-pointer hover:text-white hover:border-white hover:bg-[#3752C7]"} text={"Register"} />
            </div>
        </div>
    )
}

export default Nav