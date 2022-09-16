import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-4 shadow-md">
        <Link to="/" className="LEFT flex items-center space-x-3">
          <img
            src="/images/earth_logo.png"
            width={70}
            alt="logo" />
          <span className="font-bold text-3xl">
            E(AR)TH
          </span>
        </Link>

        <div className="RIGHT flex items-center">
          <NavButton text={"HOME"} link={"/"} active={true} />
          <NavButton text={"ABOUT"} link={"/about"} />
          <NavButton text={"VALUES"} link={"/values"} />
          <NavButton text={"TEAM"} link={"/team"} />
          <NavButton text={"CONNECT"} link={"/connect"} />
          <NavButton text={"ETH"} link={"/eth"} border={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
