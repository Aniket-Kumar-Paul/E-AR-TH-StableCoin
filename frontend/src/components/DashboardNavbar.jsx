import React from 'react'
import { GiGearHammer } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import DashboardNavItems from '../components/DashboardNavItems'

const DashboardNavbar = () => {
    return (
        <>
            {/* Navbar  */}
            <div className='flex m-3 p-5 space-x-5'>
                <Link to="/" className='w-[250px] flex items-center justify-center'>
                    <div className='border-2 border-blue-400 shadow-xl rounded-full p-5 w-[135px] h-[126px] flex flex-col justify-center items-center'>
                        <GiGearHammer fontSize={70} className="text-blue-600" />
                        <span className='font-bold'>
                            NFTD
                        </span>
                        <span className='font-bold'>
                            STABLECOIN
                        </span>
                    </div>
                </Link>

                <DashboardNavItems link="/dashboard" text="NFTD DASHBOARD" color="bg-gray-500" />
                <DashboardNavItems link="/mint" text="MINT NFTD WITH YOUR STABLECOIN" color="bg-green-700" />
                <DashboardNavItems link="/aboutmint" text="ABOUT MINTING NFTD" color="bg-yellow-500" />
                <DashboardNavItems text="BUY VIRTUAL LAND & MINT NFTD" color="bg-blue-800" />
                <DashboardNavItems text="CONNECT YOUR WALLET" color="bg-blue-600" />
            </div>

            {/* about sentence */}
            <div className='flex items-center justify-center m-5 p-3'>
                <span className='text-2xl text-center w-2/3'>
                    NFTD is a fully decentralized stablecoin with 100% capital efficiency backed by staked ETH generating staking yield for the stablecoin holder
                </span>
            </div>
        </>
    )
}

export default DashboardNavbar