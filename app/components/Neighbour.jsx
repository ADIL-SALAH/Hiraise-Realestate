"use client"

import React from 'react'
import H4 from './H4'
import H3 from './H3'
import Image from 'next/image'

function Neighbour() {

    const images = [
        { img: '/home/neighbor1.png' },
        { img: '/home/neighbor2.png' },
        { img: '/home/neighbor3.png' },
        { img: '/home/neighbor4.png' },
        { img: '/home/neighbor5.png' },
    ]

    return (
        <div className='flex justify-center items-center'>
            <div className='lg:w-[70%] md:w-[90%] p-10 space-y-5'>

                <div className='space-y-5'>
                    <H4 text={'AREAS ACROSS THE TOWN'} />
                    <H3 text={'Neighborhood Properties'} />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='grid md:grid-cols-4 grid-cols-2'>
                        <div className='col-span-1'>

                            <Image src={'/home/neighbor1.png'} width={300} height={300} className=' lg:h-64 md:h-52 w-full hover:scale-105 transition-transform' alt='img1' />
                        </div>
                        <div className='col-span-1 w-full'>

                            <Image src={'/home/neighbor2.png'} width={300} height={300} className=' lg:h-64 md:h-52 w-full hover:scale-105 transition-transform ' alt='img2' />
                        </div>
                        <div className='col-span-2 w-full'>
                            <Image src={'/home/neighbor3.png'} width={300} height={300} className='lg:h-64 md:h-52 w-full hover:scale-105 transition-transform ' alt='img3' />
                        </div>

                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-2  '>
                        <div className='col-span-1 self-center'>
                            <Image src={'/home/neighbor4.png'} width={300} height={300} className='lg:h-64 md:h-52 h-40 w-full  hover:scale-105 transition-transform ' alt='img4' />

                        </div>
                        <div className='md:col-span-2'>
                            <Image src={'/home/neighbor5.png'} width={300} height={300} className='lg:h-64 md:h-52 h-40 md:w-full  hover:scale-105 transition-transform ' alt='img5' />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Neighbour