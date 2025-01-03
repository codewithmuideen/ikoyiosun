import React, { useState } from "react";
import images from "../constants/images";
// import { Link } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Compounds", link: "/" },
    { name: "Royal Families", link: "/" },
    { name: "Tourist Centres", link: "/" },
    { name: "Traditional Rulers", link: "/" },
    { name: "Markets", link: "/" },
    { name: "Forums", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-xl w-full fixed top-0 left-0 h-[12vh] z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          {/* <BookOpenIcon className="w-7 h-" /> */}
          <img
           src={images.logo}
           alt="logo-icon"
           className="headerlogo"
          />

            
          <span className="text-red-600" style={{fontFamily:"elephant"}}>ESO IKOYI</span>
        </div>
        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link Items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-red-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="flex items-center gap-2 bg-red-500 text-white md:ml-8 font-semibold px-5 py-5 rounded-full duration-500 md:static">
            CONNECCT <AiOutlineArrowRight className="w-4 h-4" />
          </button>
        </ul>
      </div>
    </div> 
  );
};

export default Header;
