import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='h-96 p-10 bg-[#121C37] flex flex-row  justify-center items-center'>
            <div className='w-1/3 md:block hidden'>
                <Image src={'/logo.png'} width={300} height={300} alt='logo' />

            </div>
            <div className='md:w-2/3 text-white md:text-left flex md:flex-row flex-col justify-around md:space-y-0 space-y-5'>
                <ul className='space-y-5'>
                    <li>Phone:</li>
                    <li>Mail us here:</li>
                </ul>
                <ul className='space-y-5'>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                    <li>Desclaimer</li>
                </ul>
            </div>
            <div className='w-1/3 md:hidden block'>
                <Image src={'/logo.png'} width={300} height={300} alt='logo' />

            </div>
        </div>
    )
}

export default Footer