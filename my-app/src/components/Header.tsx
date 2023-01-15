import React from "react";
import "../assets/css/Header.css";
import VS_icon from "../assets/images/VS_icon.png";

const Header = () => {
  return (
    <div className="header rounded-full md:py-1 md:px-1 lg:py-3 lg:px-6 text-center shadow-sky-800 md:text-md lg:text-2xl">
      <div className="flex justify-evenly items-center">
        <p className="text-sm md:text-2xl lg:text-4l">Ronaldo</p>
        <img
          src={VS_icon}
          alt="vs_icon"
          className="hidden md:block w-24 h-24"
        />
        <p className="text-md md:hidden">VS</p>
        <p className="text-sm md:text-2xl lg:text-4l">Messi</p>
      </div>
    </div>
  );
};

export default Header;
