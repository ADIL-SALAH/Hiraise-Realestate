import React from 'react'

function H3({ text, color }) {
    return (
        <h3 className={`md:text-4xl text-xl font-bold ${color ? color : 'text-black'}`} >{text}</h3>
    )
}

export default H3