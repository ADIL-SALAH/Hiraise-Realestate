import React from 'react'

function H4({ text, color }) {
    return (
        <h4 className={`md:text-2xl text-lg text-black font-semibold ${color}`}>{text}</h4>
    )
}

export default H4