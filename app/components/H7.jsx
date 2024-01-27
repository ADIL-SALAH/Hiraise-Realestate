import React from 'react'

function H7({ text, color }) {
    return (
        <h7 className={`md:text-lg text-lg text-black font-semibold ${color}`}>{text}</h7>
    )
}

export default H7