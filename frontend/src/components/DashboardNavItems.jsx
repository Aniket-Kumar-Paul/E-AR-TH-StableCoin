import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNavItems = ({ link, text, color }) => {
    // const hoverColor = color.slice(0, color.length - 3) + (parseInt(color.slice(-3)) - 100).toString()

    return (
        <Link to={link} className={`${color} hover:bg-blue-500 w-[250px] text-white shadow-2xl rounded-lg flex justify-center items-center p-5`}>
            <span className="font-bold text-lg text-center">
                {text}
            </span>
        </Link>
    )
}

export default DashboardNavItems