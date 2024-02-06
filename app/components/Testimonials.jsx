"use client"

import React, { useEffect, useState } from 'react'
import H4 from './H4'
import H2 from './H2'
import Text from './Text'
import Carousal from './Carousal'
import userAxios from '@/axios/userAxios'

function Testimonials() {


    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        userAxios.get('/testimonial').then((res) => {
            setFetchedData(res?.data?.fetchedData)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const peopleSays = [
        {
            says: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
            name: 'Barbara D. Smith'
        },
        {
            says: "I highly recommend Jodi J. Appleby",
            name: 'Barbara D. Smith'

        },
        {
            says: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
            name: 'Barbara D. Smith'
        },
        {
            says: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
            name: 'Barbara D. Smith'
        },
    ]

    const customArrow = ({ type, onClick, isEdge }) => {
        return (
            <button onClick={onClick} disabled={isEdge} className={`hidden `}>
                <img src="/home/carousal button.png" alt="" className='md:w-auto w-20' />
            </button>
        )
    }

    return (
        <div className='md:h-screen flex justify-center items-center '>
            <div className='lg:w-2/3 flex lg:flex-row flex-col justify-center items-center lg:space-x-10 lg:space-y-0 space-y-10 '>
                <div className='lg:w-1/2 md:w-2/3 w-[90%] space-y-5 md:p-0 p-5'>

                    <H4 text={'TESTIMONIALS'} color={'text-[#DE8D3E]'} />
                    <H2 text={'Look What Our Customers Say!'} />
                    <Text text={'Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. '} />
                </div>
                <div className='lg:w-1/2 md:w-2/3 w-full relative'>
                    <div className='w-10 h-10 bg-[#C3A67D] bg-gradient-to-tl from-white opacity-50 rounded-full absolute bottom-10  right-10  '></div>
                    <Carousal items={fetchedData} component={'testimonials'} customArrow={customArrow} />

                    <div className='flex justify-center my-3'>
                        {/* {peopleSays.map((item, index) => (
                            <div className=''>

                                <div className='bg-red-800 mx-3 w-[30px] h-[2px]' />
                            </div>
                        ))} */}
                        {/* <span>---- Swipe left or right to view next & prev ----</span> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonials