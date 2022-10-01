import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs';
import { SiGmail } from "react-icons/si";

const Connect = () => {
    document.title = "E(AR)TH - Connect Wallet"

    return (
        <>
            <Navbar />

            <div className='flex m-2 mx-5'>

                {/* LEFT */}
                <div className='flex gap-10 flex-col flex-initial p-3 m-3 items-center'>
                    <Link to="/"
                        className='rounded-lg flex h-24 w-64 justify-center items-center bg-gradient-to-b from-blue-600 to-blue-400 shadow-lg'>
                        <span className='text-3xl font-bold shadow-md text-white'>
                            HOME
                        </span>
                    </Link>

                    <Link to="/constructing"
                        className='rounded-lg flex flex-col h-28 w-72 justify-center items-center bg-gradient-to-b from-blue-800 to-blue-500 shadow-lg'>
                        <span className='text-xl font-bold shadow-md text-white'>
                            LOG IN WITH
                        </span>
                        <span className='text-xl font-bold shadow-md text-white'>
                            UNSTOPPABLE
                        </span>
                        <span className='text-xl font-bold shadow-md text-white'>
                            DOMAINS
                        </span>
                    </Link>

                    <Link to="/constructing"
                        className='rounded-lg flex flex-col h-28 w-72 justify-center items-center bg-gradient-to-b from-blue-800 to-blue-500 shadow-lg'>
                        <span className='text-xl font-bold shadow-md text-white'>
                            LOG IN WITH
                        </span>
                        <span className='text-xl font-bold shadow-md text-white'>
                            ENS
                        </span>
                    </Link>
                </div>



                {/* CENTER */}
                <div className='flex-auto flex justify-center items-center'>
                    <div className='w-[35vw] flex flex-col gap-7 p-3 m-3'>

                        <div className="relative group">
                            <div
                                className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-pink-600 rounded-3xl blur opacity-75 bg-gradient-to-r from-blue-600 to-purple-600">
                            </div>
                            <Link to="/constructing"
                                className=" bg-white border-blue-700 shadow-xl rounded-3xl relative flex flex-col items-center justify-center p-3">
                                <span className='font-bold'>
                                    CONNECT A WALLET
                                </span>
                            </Link>
                        </div>

                        <div
                            className="text-center mb-3">
                            <span className='font-bold italic'>
                                By connecting a wallet, I agree to all the terms and conditions.
                            </span>
                        </div>

                        <div className="relative group">
                            <div
                                className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-pink-600 rounded-3xl blur opacity-75 bg-gradient-to-r from-blue-600 to-purple-600">
                            </div>
                            <Link to="/constructing"
                                className=" bg-white border-blue-700 shadow-xl rounded-3xl relative flex flex-col items-center justify-center p-3">
                                <span className='font-bold'>
                                    METAMASK
                                </span>
                            </Link>
                        </div>

                        <div className="relative group">
                            <div
                                className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-pink-600 rounded-3xl blur opacity-75 bg-gradient-to-r from-blue-600 to-purple-600">
                            </div>
                            <Link to="/constructing"
                                className=" bg-white border-blue-700 shadow-xl rounded-3xl relative flex flex-col items-center justify-center p-3">
                                <span className='font-bold'>
                                    WALLET CONNECT
                                </span>
                            </Link>
                        </div>

                        <div className="relative group">
                            <div
                                className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-pink-600 rounded-3xl blur opacity-75 bg-gradient-to-r from-blue-600 to-purple-600">
                            </div>
                            <Link to="/constructing"
                                className=" bg-white border-blue-700 shadow-xl rounded-3xl relative flex flex-col items-center justify-center p-3">
                                <span className='font-bold'>
                                    COINBASE WALLET
                                </span>
                            </Link>
                        </div>

                        <div className='border shadow-2xl flex flex-col gap-3 p-1'>
                            <div
                                className="flex flex-col items-center justify-center p-3 gap-3">
                                <span className='italic'>
                                    OR SIGN UP WITH :
                                </span>
                                <div className='space-x-4 flex items-center'>
                                    <span className='font-bold'>
                                        YOUR EMAIL:
                                    </span>
                                    <input type="text"
                                        placeholder='Enter your email'
                                        className='shadow-md border rounded p-2 ring-blue-400 outline-none focus:ring'
                                    />
                                </div>
                                <span>
                                    This option will create a crypto wallet for you.
                                </span>
                            </div>

                            <div
                                className="flex flex-col items-center justify-center p-3 gap-3">
                                <span className='italic'>
                                    OR WITH:
                                </span>
                                <div className='flex gap-10'>
                                    <Link>
                                        <SiGmail size={40} />
                                    </Link>
                                    <Link className='text-blue-600'>
                                        <BsFacebook size={40} />
                                    </Link>
                                    <Link className='text-blue-400'>
                                        <BsTwitter size={40} />
                                    </Link>
                                    <Link>
                                        <BsGithub size={40} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* RIGHT */}
                <div className='flex-initial p-3 m-3'>
                    <div className='bg-gray-300 p-5 rounded-lg'>
                        <span className='text-lg'>
                            WALLET NOT CONNECTED
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect