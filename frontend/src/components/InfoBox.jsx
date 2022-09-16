import React from 'react'

const InfoBox = ({ text }) => {
    return (
        <div className="relative group">
            <div
                className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-pink-600 rounded-3xl blur opacity-75 bg-gradient-to-r from-blue-600 to-purple-600">
            </div>
            <div
                className="relative bg-white cursor-pointer rounded-3xl flex items-center justify-center border-blue-700 w-48 h-40 shadow-xl
        
                ">
                <span className="p-16 text-center text-2xl font-bold">
                    {text}
                </span>
            </div>
        </div >
    )
}

export default InfoBox