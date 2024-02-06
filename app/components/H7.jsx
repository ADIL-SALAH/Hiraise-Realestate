import React from 'react'

function H7({ text, color }) {
    return (
        <h6 className={`md:text-lg text-[12px] text-black font-semibold ${color}`}>{text}</h6>
    )
}

export default H7