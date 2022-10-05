import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNavItems = ({ active, link, text, color }) => {
    // const hoverColor = color.slice(0, color.length - 3) + (parseInt(color.slice(-3)) - 100).toString()

    return (
        <Link to={link} className={`bg-blue-500 border-4 border-blue-700 ${active && "border-b-4 border-black"} hover:bg-blue-600 w-[250px] text-white shadow-2xl rounded-lg flex justify-center items-center p-5`}>
            <span className="font-bold text-lg text-center">
                {text}
            </span>
        </Link>
    )
}

export default DashboardNavItems