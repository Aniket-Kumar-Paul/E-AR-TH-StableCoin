import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar'

const Mint = () => {
    document.title = "E(AR)TH - Mint NFTD"

    return (
        <div>
            <DashboardNavbar />

            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center relative group w-1/2'>
                    <div
                        className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-pink-600 rounded-3xl blur opacity-75 bg-gradient-to-r from-blue-600 to-purple-600">
                    </div>
                    <div className='relative bg-white border-blue-700 shadow-xl rounded-3xl flex flex-col p-10 w-full'>
                        <div>
                            <div className='flex items-center justify-between group-1'>
                                <input type="text"
                                    placeholder='1200'
                                    className='text-center m-3 w-1/2 shadow-xl rounded p-2 hover:ring-blue-400 outline-none focus:ring'
                                />
                                <span className='shadow-xl group-1-focus-within:bg-blue-100 m-3 font-bold w-1/2 text-center inline-block border-4 border-blue-400 p-2 rounded'>
                                    USDT
                                </span>
                            </div>
                            <div className='flex items-center justify-between group-1'>
                                <input type="text"
                                    placeholder='1200'
                                    className='text-center m-3 w-1/2 shadow-xl rounded p-2 hover:ring-blue-400 outline-none focus:ring'
                                />
                                <span className='shadow-xl group-1-focus-within:bg-blue-100 m-3 font-bold w-1/2 text-center inline-block border-4 border-blue-400 p-2 rounded'>
                                    NFTD
                                </span>
                            </div>
                            <div className='flex items-center justify-between group-1'>
                                <input type="text"
                                    placeholder='0.85'
                                    className='text-center m-3 w-1/2 shadow-xl rounded p-2 hover:ring-blue-400 outline-none focus:ring'
                                />
                                <span className='shadow-xl group-1-focus-within:bg-blue-100 m-3 font-bold w-1/2 text-center inline-block border-4 border-blue-400 p-2 rounded'>
                                    ETH staked
                                </span>
                            </div>
                            <div className='flex items-center justify-between group-1'>
                                <input type="text"
                                    placeholder='4.7'
                                    className='text-center m-3 w-1/2 shadow-xl rounded p-2 hover:ring-blue-400 outline-none focus:ring'
                                />
                                <span className='shadow-xl group-1-focus-within:bg-blue-100 m-3 font-bold w-1/2 text-center inline-block border-4 border-blue-400 p-2 rounded'>
                                    APY %
                                </span>
                            </div>
                        </div>
                        <button className='m-3 mt-6 p-3 bg-orange-500 hover:bg-orange-600 shadow-lg rounded-full'>
                            <span className='text-center font-bold text-lg text-white'>
                                CONFIRM SWAP AND MINT
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint