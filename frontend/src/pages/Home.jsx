import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InfoBox from "../components/InfoBox";
import Slides from "../components/Slides";

const Home = () => {
  const [showMessage, setShowMessage] = useState(true)

  return (
    <>
      {
        showMessage &&
        <div className="bg-blue-700 text-white py-1 px-5 flex justify-between">
          <span className="text-center font-bold">
            SPECIAL THANKS TO MORALIS PLATFORM
          </span>
          <button className="w-6" onClick={() => setShowMessage(false)}>
            <img src="/images/close.png" alt="close button" />
          </button>
        </div>
      }

      <Navbar />

      <div className="p-2 ml-10">
        <div>
          AR/VR EARTH ON BLOCKCHAIN
        </div>
        <div className="font-bold">
          POWERED BY NFTD STABLECOIN
        </div>
      </div>

      <main className="flex m-2 h-[70vh]">
        <div className="LEFT m-3 flex-1 max-w-xs flex flex-col justify-between items-center">
          <InfoBox text={"LOGO NFTD"} />
          <InfoBox text={"ABOUT NFTD"} />
          <InfoBox text={"MINT NFTD"} />
        </div>

        <div className="CENTER flex flex-auto flex-col m-2 justify-between items-center">
          <Slides />

          <button
            className="shadow-2xl transition duration-500 text-4xl border-4 p-3 px-5 bg-blue-300 border-black rounded-full
          hover:text-white hover:bg-blue-500 hover:border-black 
          ">
            LAUNCH AR / VR
          </button>
        </div>

        <div className="RIGHT m-3 flex-1 max-w-xs flex flex-col justify-between items-center">
          <InfoBox text={"CLAIM FREE LAND"} />
          <InfoBox text={"MY LANDS"} />
          <InfoBox text={"VIRTUAL ESTATE"} />
        </div>
      </main>
    </>
  );
};

export default Home;
