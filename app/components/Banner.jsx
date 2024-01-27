"use client"

import React from 'react'
import Carousal from './Carousal'
import H4 from './H4'
import H2 from './H2'

function Banner() {

    const carousalItems = [
        { src: '/home/carousal1.png' },
        { src: '/home/carousal1.png' },
        { src: '/home/carousal1.png' },
        { src: '/home/carousal1.png' },
        { src: '/home/carousal1.png' },

    ]

    const customArrow = ({ type, onClick, isEdge }) => {
        return (
            <button onClick={onClick} disabled={isEdge} className={`absolute z-10 ${type === 'PREV' ? 'lg:left-0 lg:top-48 md:right-28 md:-top-20 top-64 right-24' : 'lg:right-5 lg:top-44 md:right-10 md:-top-[100px] top-[243px] right-10 rotate-180'}`}>
                <img src="/home/carousal button.png" alt="" className='md:w-auto w-20' />
            </button>
        )
    }

    return (
        <div className='h-screen  '>
            <div className='h-screen  lg:rounded-b-full  bg-[#C3A67D] p-10 relative flex flex-col justify-center items-center md:gap-28 gap-10'>
                <div className='lg:w-[40%] lg:absolute lg:top-24 lg:left-36  lg:space-y-5 space-y-5 '>
                    {/* <h4 className='md:text-2xl text-lg text-black font-semibold '>REAL ESTATE</h4> */}
                    <H4 text={'REAL ESTATE'} />
                    {/* <h4 className='md:text-6xl text-4xl font-bold'>Find a perfect</h4> */}
                    <H2 text={'Find a perfect'} />
                    <H2 text={'home you love..!'} />
                    {/* <h4 className='md:text-6xl text-4xl font-bold'>home you love..!</h4> */}
                    <div>
                        <p className='text-[#808080]'>
                            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
                        </p>
                    </div>
                </div>

                <div className='md:w-[700px] w-[380px] relative lg:hidden flex flex-col justify-center items-center'>
                    <div className='w-10 h-10 bg-blue-600 bg-gradient-to-t from-white opacity-50 rounded-full absolute bottom-96 right-52 md:block hidden'></div>
                    <div className=' w-full lg:absolute lg:block  lg:-bottom-32 lg:right-24 '>
                        <Carousal items={carousalItems} itemsToShow={1} customArrow={customArrow} />

                    </div>
                    <div className='w-20 h-20 bg-[#C3A67D] bg-gradient-to-tl from-white opacity-50 rounded-full absolute right-[770px] mt-16 '></div>

                </div>
            </div>
            <div className='w-full relative lg:flex hidden justify-center items-center'>
                <div className='w-10 h-10 bg-blue-600 bg-gradient-to-t from-white opacity-50 rounded-full absolute bottom-96 right-52 md:block hidden' ></div>
                <div className='lg:w-[800px] w-2/3 lg:absolute lg:block  lg:-bottom-32 lg:right-24 '>
                    <Carousal items={carousalItems} itemsToShow={1} customArrow={customArrow} />

                </div>
                <div className='w-20 h-20 bg-[#C3A67D] bg-gradient-to-tl from-white opacity-50 rounded-full absolute right-[770px] md:mt-40 '></div>

            </div>
        </div>
    )
}

export default Banner