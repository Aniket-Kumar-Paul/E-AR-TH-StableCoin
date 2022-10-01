import React from 'react'
import { GiGearHammer } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import DashboardNavItems from '../components/DashboardNavItems'

const Dashboard = () => {
    return (
        <div className='m-3'>
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
                <DashboardNavItems text="ABOUT MINTING NFTD" color="bg-yellow-500" />
                <DashboardNavItems text="BUY VIRTUAL LAND & MINT NFTD" color="bg-blue-800" />
                <DashboardNavItems text="CONNECT YOUR WALLET" color="bg-blue-600" />
            </div>

            {/* about sentence */}
            <div className='flex items-center justify-center m-5 p-3'>
                <span className='text-2xl text-center w-2/3'>
                    NFTD is a fully decentralized stablecoin with 100% capital efficiency backed by staked ETH generating staking yield for the stablecoin holder
                </span>
            </div>

            {/* swap and mint section  */}
            <div className='flex justify-center ml-14'>
                <div className='flex items-center w-2/3 justify-between'>
                    <div className='flex flex-col space-y-6'>
                        <div className='flex justify-between items-center'>
                            <span className='font-bold'>
                                USDT
                            </span>
                            <input type="text"
                                className='mx-3 shadow-md border rounded p-2 ring-blue-400 outline-none focus:ring'
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='font-bold'>
                                NFTD
                            </span>
                            <input type="text"
                                className='mx-3 shadow-md border rounded p-2 ring-blue-400 outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div>
                        <button className='bg-green-400 p-5 border-4 rounded-full border-green-500 hover:bg-green-500 hover:border-green-300'>
                            <span className='text-lg font-bold text-white'>
                                SWAP & MINT
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <div className='flex justify-between items-center'>
                            <span className='font-bold'>
                                ETH STAKED
                            </span>
                            <input type="text"
                                className='mx-3 shadow-md border rounded p-2 ring-blue-400 outline-none focus:ring'
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='font-bold'>
                                APY %
                            </span>
                            <input type="text"
                                className='mx-3 shadow-md border rounded p-2 ring-blue-400 outline-none focus:ring'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* last section */}
            <div className='flex justify-center'>
                <div className='flex flex-col m-10 mt-20 w-2/3 items-center'>
                    <div className='flex m-5 space-x-32'>
                        <div className='flex items-center justify-center space-x-2'>
                            <span className='block w-40 text-center'>
                                Total Available Balance of NFTD :
                            </span>
                            <span className='block w-40 border-2 border-blue-500 text-center p-3 rounded-xl shadow-md'>
                                {/* sample value -- to be updated by backend */}
                                1300 NFTD
                            </span>
                        </div>
                        <div className='flex items-center justify-center space-x-2'>
                            <span className='block w-40 text-center'>
                                Total rETH staked by this wallet :
                            </span>
                            <span className='block w-40 border-2 border-blue-500 text-center p-3 rounded-xl shadow-md'>
                                {/* sample value -- to be updated by backend */}
                                100 NFTD
                            </span>
                        </div>
                    </div>
                    <div className='flex m-5 space-x-32'>
                        <div className='flex items-center justify-center space-x-2'>
                            <span className='block w-40 text-center'>
                                Total NFTD minted by this wallet :
                            </span>
                            <span className='block w-40 border-2 border-blue-500 text-center p-3 rounded-xl shadow-md'>
                                {/* sample value -- to be updated by backend */}
                                2700 NFTD
                            </span>
                        </div><div className='flex items-center justify-center space-x-2'>
                            <span className='block w-40 text-center'>
                                Average APY rETH of this wallet :
                            </span>
                            <span className='block w-40 border-2 border-blue-500 text-center p-3 rounded-xl shadow-md'>
                                {/* sample value -- to be updated by backend */}
                                150 NFTD
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard