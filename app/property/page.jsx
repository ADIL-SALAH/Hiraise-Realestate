"use client"

import userAxios from '@/axios/userAxios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import H6 from '../components/H6'
import H7 from '../components/H7'
import DropDown from '../components/DropDown'

function page() {


    // const dropDownItems = [
    //     'New arrival',
    //     'Popular',
    //     'Top'
    // ]
    const [dropDownItems, setDropDownItems] = useState([])
    const [fetchedData, setFetchedData] = useState(null)
    const [selectedTab, setSelectedTab] = useState(null)
    const [filterProperty, setFilteredProperty] = useState(null)

    useEffect(() => {
        userAxios.get('/property').then((res) => {
            setFetchedData(res?.data?.fetchedData)
            const dropdownItem = [...new Set(res?.data?.fetchedData?.map(item => item.sub_title))];

            setDropDownItems(dropdownItem);



        }).catch((err) => {
            console.log(err)
        })

    }, [])
    console.log(dropDownItems)

    useEffect(() => {
        const filterProperty = fetchedData?.filter((item, index) => {
            return item.sub_title === selectedTab
        })
        setFilteredProperty(filterProperty)
    }, [selectedTab])



    // console.log(fetchedData, filterProperty)


    return (
        <div className=' min-h-screen md:p-20 p-10'>
            <div className='m-5'>

                <DropDown menuItems={dropDownItems} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
            </div>
            <div className="md:grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center content-center flex flex-col justify-center">

                {filterProperty ? filterProperty.map((item, index) => (

                    <div key={index} className="max-w-xs h-[450px] bg-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 ">
                        <a >
                            < Image className="rounded-t-lg h-52 w-72 rounded-xl" src={item.image} alt="" width={300} height={300} />
                        </a>
                        <div className="p-5 flex flex-col ">
                            <a >
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-[#C3A67D] ">{item?.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-[#C3A67D] -[#C3A67D]  ">{`Rs: ${item?.price}`}</p>

                            <p className="mb-3 font-normal text-[#C3A67D] ">{item?.location}</p>
                            <p className="mb-3 font-normal text-gray-300  rounded-full text-[12px]">{item?.sub_title}</p>

                        </div>
                    </div>

                ))
                    :
                    fetchedData?.map((item, index) => (

                        <div key={index} className="max-w-xs h-[450px] bg-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 ">
                            <a >
                                < Image className="rounded-t-lg h-52 w-72 rounded-xl" src={item.image} alt="" width={300} height={300} />
                            </a>
                            <div className="p-5 flex flex-col ">
                                <a >
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-[#C3A67D] ">{item?.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-[#C3A67D] -[#C3A67D]  ">{`Rs: ${item?.price}`}</p>

                                <p className="mb-3 font-normal text-[#C3A67D] ">{item?.location}</p>
                                <p className="mb-3 font-normal text-gray-300 rounded-full text-[10px]">{item?.sub_title}</p>

                            </div>
                        </div>

                    ))
                }

            </div >
        </div >
    )
}

export default page