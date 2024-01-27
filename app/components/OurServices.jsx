import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faBed } from '@fortawesome/free-solid-svg-icons';
import H4 from './H4'
import H3 from './H3'
import H7 from './H7';
import Text from './Text';

function OurServices() {

    const items = [
        { img: faMagnifyingGlass, title: 'Buy a New Home', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: faHouse, title: 'Sell a House', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
        { img: faBed, title: 'Rent a House', desc: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ' },
    ]

    return (
        <div className='lg:h-screen bg-[#D4D4D4] flex flex-col justify-center items-center lg:py-0 py-10'>
            <div className=' lg:w-2/3 lg:p-0 md:p-5 space-y-10 '>
                <div className='md:px-2 px-8 space-y-5'>

                    <H4 text={'OUR SERVICES'} />
                    <H3 text={'Donec porttitor euismod dignissim'} />
                </div>
                <div className='flex md:flex-row flex-col md:justify-between justify-center md:space-x-10 md:space-y-0 space-y-5 items-center '>
                    {items.map((item, index) => (
                        <div key={index} className=' w-2/3  p-5 md:h-96 bg-white rounded-3xl flex flex-col justify-center items-center space-y-5'>
                            <div className='bg-black w-16 h-16 rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={item.img} className=' text-3xl text-white' />
                            </div>
                            <div className='space-y-5 text-center'>
                                <H7 text={item.title} />
                                <Text text={item.desc} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default OurServices