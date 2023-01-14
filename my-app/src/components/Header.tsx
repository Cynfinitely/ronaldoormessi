import React from "react";
import "../assets/css/Header.css";
import VS_icon from "../assets/images/VS_icon.png";

const Header = () => {
  return (
    <div className="header rounded-full py-3 px-6  text-center shadow-sky-800 text-2xl">
      <div className="flex justify-evenly items-center">
        <p className="text-4xl">Ronaldo</p>
        <img
          src={VS_icon}
          alt="vs_icon"
        />
        <p className="text-4xl">Messi</p>
      </div>
    </div>
  );
};

export default Header;
