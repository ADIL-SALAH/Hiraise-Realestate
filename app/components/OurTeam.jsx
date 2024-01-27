import React from 'react'
import H6 from './H6'
import H4 from './H4'
import Image from 'next/image'

function OurTeam() {

    const members = [
        { name: 'Brendon M', img: '/home/members1.jpg', designation: 'CEO & Founder' },
        { name: 'Jodi J.Appleby', img: '/home/members2.jpg', designation: 'Realestate developer' },
        { name: 'Justin S.Meza', img: '/home/members1.jpg', designation: 'Listing Agent' },
        { name: 'Susant T. Smith', img: '/home/members2.jpg', designation: 'Buyers Agent' },
    ]


    return (
        <div className='lg:h-screen flex flex-col justify-center items-center space-y-10 p-10'>
            <div className='w-[70%] flex flex-col justify-center items-center space-y-5'>
                <H6 text={'INTRODUCE YOURSELF TO'} color={'text-[#C3A67D]'} />
                <H4 text={'Our Team of Experts'} />
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-10  '>
                {members.map((item, index) => (
                    <div key={index} className='text-center'>
                        <Image src={item.img} width={400} height={400} alt={index} className='md:w-[200px] md:h-[300px] w-[200px] h-[200px] object-cover rounded-tl-[100px] rounded-tr-[50px] rounded-b-[50px]' />
                        <H4 text={item.name} />
                        <span className='text-blue-600 text-sm '>{item.designation}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OurTeam