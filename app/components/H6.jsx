import React from 'react'

function H6({ text, color }) {
    return (
        <h6 className={`md:text-xl text-sm  font-semibold ${color ? color : 'text-black'}`}>{text}</h6>
    )
}

export default H6