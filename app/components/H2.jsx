import React from 'react'

function H2({ text, color }) {
    return (
        <h2 className={`md:text-6xl text-4xl font-bold ${color}`}>{text}</h2>
    )
}

export default H2