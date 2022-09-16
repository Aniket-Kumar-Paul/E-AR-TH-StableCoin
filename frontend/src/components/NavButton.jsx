import React from 'react'
import { Link } from 'react-router-dom'

const NavButton = ({ text, link, active, border }) => {
    return (
        <Link
            to={link}
            className={`group transition duration-150 ease-out hover:ease-in p-2 ml-2 md:ml-10 text-xl font-bold
            ${active && 'text-blue-700'} 
            ${border && 'border-black rounded-lg border bg-gray-100 hover:bg-black hover:text-white'}`}
        >
            {text}
            {/* underline animation */}
            <span
                class={`${!border && 'block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-blue-700'}`}>
            </span>
        </Link>
    )
}

export default NavButton