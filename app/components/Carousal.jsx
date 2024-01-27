"use client"


import React, { useState } from 'react'
import Carousel from '@itseasy21/react-elastic-carousel';
import H6 from './H6';
import H7 from './H7';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

function Carousal({ items, itemsToShow, customArrow, component }) {


    const breakPoints = [
        { width: 100, itemsToShow: 1 },
        { width: 800, itemsToShow: 3 },
        // { width: 850, itemsToShow: 3 },
        // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 1 },
    ]



    const customPagination = ({ pages, activePage, onClick }) => {
        return (
            <div className='flex' style={{ flexDirection: 'row' }}>
                {pages.map(page => {
                    const isActivePage = activePage === page;
                    return (
                        <div
                            key={page}
                            onClick={() => onClick(page)}
                            className={`${isActivePage ? 'bg-yellow-900' : 'bg-slate-500'} mx-2 h-[3px] w-5 bg-opacity-30 `}
                        />
                    );
                })}
            </div>
        );
    };


    return (
        <div className='w-full h-full'>
            <Carousel renderArrow={customArrow} renderPagination={customPagination} itemsToShow={itemsToShow} enableMouseSwipe={true} enableSwipe={true} breakPoints={component ? breakPoints : null}>
                {items?.map((item, index) => (
                    component === 'testimonials' ? (
                        <div key={index} className='flex flex-col justify-center items-center  p-5 '>
                            <div className=' rounded-3xl  shadow-lg p-5  min-h-72 md:min-w-[450px] flex flex-col justify-center   '>
                                <div className='w-full'>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='text-3xl text-yellow-400' />
                                </div>
                                <div className='space-y-10'>

                                    <p>
                                        {item.says}
                                    </p>
                                    <hr />
                                    <H7 text={item.name} />
                                </div>

                            </div>
                        </div>
                    ) : (

                        <div key={index} className='flex flex-col justify-center items-center'>
                            {/* <img src={item.src} alt={item.src} className='object-cover' /> */}
                            <Image src={item.src} width={800} height={800} className='object-cover' />
                            <div className='w-2/3'>
                                {/* <h1>{item.title}</h1> */}
                                <H7 text={item.title} color={'text-white'} />
                            </div>
                        </div>
                    )
                ))
                }
                {/* {items.map(item, index => <div key={index}>{item.src}</div>)} */}
            </Carousel >
        </div >
    )
}

export default Carousal