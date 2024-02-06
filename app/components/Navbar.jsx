"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation } from 'react-router-dom';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)
    const [selectedTab, setSelectedTab] = useState('')


    const navItems = [
        { itemName: 'Home', navigate: '/' },
        // { itemName: 'About', navigate: '/about' },
        { itemName: 'Listings', navigate: '/property' },
        // { itemName: 'Services', navigate: '/services' },
        { itemName: 'Blogs', navigate: '/blog' },
    ]

    const router = useRouter()
    const navOnclick = (item) => {
        setSelectedTab(item.itemName)
        router.push(item.navigate)

    }

    const location = useLocation()





    return (
        <nav className="bg-[#121C37]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setOpenMenu(!openMenu)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className={`block h-6 w-6 ${openMenu ? 'rotate-90' : null}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navItems.map((item, index) => (
                                    <a key={index} onClick={() => navOnclick(item)} className={`${selectedTab === item.itemName ? 'bg-[#C3A67D]' : null} cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium`} aria-current="page">{item.itemName}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img className="md:h-20 md:w-32 h-12 " src="/logo.png" alt="" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {openMenu ?
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navItems.map((item, index) => (
                            <a key={index} onClick={() => navOnclick(item)} className={`${selectedTab === item.itemName ? 'bg-[#C3A67D]' : null} bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium`} aria-current="page">{item.itemName}</a>
                        ))}
                    </div>
                </div>
                : null}
        </nav>
    )
}

export default Navbar