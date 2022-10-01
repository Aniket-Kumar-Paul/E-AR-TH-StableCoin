import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar'

const Dashboard = () => {
    document.title = "E(AR)TH - NFTD Dashboard"

    return (
        <div className='m-3'>
            <DashboardNavbar />

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