import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseSignal } from '@fortawesome/free-solid-svg-icons';

import H4 from './H4'
import H2 from './H2'
import Image from 'next/image';
import H3 from './H3';
import Text from './Text';

function WhoWeAre() {
    return (
        <div className='flex lg:flex-row flex-col justify-center items-center md:h-screen md:mt-40 mt-16 md:space-x-10 space-y-20 md:py-0 py-10'>
            <div className='lg:w-2/5 w-4/5 space-y-10 md:h-auto '>
                <H4 text={'WHO WE ARE'} />

                {/* <h3 className='md:text-4xl text-xl font-bold' >
                    Assisting individuals in locating the appropriate real estate.
                </h3> */}
                <H3 text={' Assisting individuals in locating the appropriate real estate.'} />

                {/* <p className='text-[#808080]'>
                    Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
                    Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
                </p> */}
                <Text text={`Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
                    Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.`} />

                <div className='flex flex-col justify-center items-center space-y-8'>
                    <div className='flex justify-between md:w-[70%] items-center rounded-3xl shadow-lg p-5  space-x-5'>
                        <div >
                            <FontAwesomeIcon icon={faHouseSignal} className=' w-10 text-[#C3A67D]' />
                        </div>
                        <div>
                            <h5 text={''} color={''} className='text-[20px] text-[#C3A67D]'>
                                Donec porttitor euismod
                            </h5>
                            <p className='text-[16px]'>
                                Nullam a lacinia ipsum, nec dignissim purus. Nulla
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between md:w-[70%] items-center rounded-3xl shadow-lg p-5 space-x-5'>
                        <div >
                            <FontAwesomeIcon icon={faHouseSignal} className=' w-10 text-[#C3A67D]' />
                        </div>
                        <div>
                            <h5 text={''} color={''} className='text-[20px] text-[#C3A67D]'>
                                Donec porttitor euismod
                            </h5>
                            <p className='text-[16px]'>
                                Nullam a lacinia ipsum, nec dignissim purus. Nulla
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/5 w-4/5 space-y-10 lg:space-x-5 md:space-x-10 md:flex hidden justify-center'>
                <div className='h-full flex justify-center items-center'>
                    <Image src={'/home/whoweare1.png'} width={200} height={200} alt='img1' className='rounded-3xl md:h-[400px] md:w-[300px]  mt-10 shadow-xl' />
                </div>
                <div className='space-y-5 flex flex-col justify-center items-center'>
                    <Image src={'/home/whoweare2.png'} width={200} height={200} alt='img1' className='rounded-3xl shadow-xl md:w-[300px] ' />
                    <Image src={'/home/whoweare3.png'} width={200} height={200} alt='img1' className='rounded-3xl shadow-xl md:w-[300px] ' />
                    <div className='w-20 h-20 bg-gradient-to-tl from-white via-[#C3A67D] to-black opacity-30  rounded-full lg:block hidden' />
                </div>

            </div>
        </div>
    )
}

export default WhoWeAre