"use client"

import React from 'react'
import H4 from './components/H4'
import H3 from './components/H3'
import Carousal from './components/Carousal'

function Trendings() {

    const carousalItems = [
        { src: '/home/carousal1.png', title: 'Top 10 Home Buying Mistakes to Avoid' },
        { src: '/home/carousal1.png', title: 'How to Stage Your Home for a Quick Sale' },
        { src: '/home/carousal1.png', title: '5 Tips for First-Time Home Sellers' },
        { src: '/home/carousal1.png', title: 'Top 10 Home Buying Mistakes to Avoid' },
        { src: '/home/carousal1.png', title: 'Top 10 Home Buying Mistakes to Avoid' },

    ]
    const customArrow = ({ type, onClick, isEdge }) => {
        return (
            <button onClick={onClick} disabled={isEdge} className={`absolute z-10 ${type === 'PREV' ? 'lg:-left-20 lg:top-20 md:right-28 md:top-36 top-14 -left-3' : 'lg:-right-16 lg:top-[60px] md:right-0 md:top-[130px] top-[45px] -right-3 rotate-180'}`}>
                <img src="/home/carousal button.png" alt="" className='md:w-auto w-20' />
            </button>
        )
    }

    return (
        <div className='bg-[#C3A67D] lg:h-screen md:h-[800px] h-[500px] flex flex-col justify-center items-center'>
            <div className='w-[80%] text-center space-y-10'>
                <div className='space-y-5'>
                    <H4 text={"WHAT'S TRENDING"} color={'text-white'} />
                    <H3 text={"Latest Blogs & Posts"} color={'text-white'} />
                </div>
                <div className='w-full relative'>
                    <Carousal items={carousalItems} itemsToShow={3} customArrow={customArrow} component={'trending'} />
                </div>
            </div>
        </div>
    )
}

export default Trendings