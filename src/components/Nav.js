import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "./logoWebsite.svg";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div className="w-11/12 h-16 flex items-center rounded-2xl px-6 justify-between bg-transparent outer-glow backdrop-blur-md fixed top-4 lg:top-10 left-1/2 transform -translate-x-1/2 z-20">
        <img src={logo} className="w-6 h-6"></img>
        <button
          className={`text-md poppins-medium hover:cursor-pointer transition-transform duration-300 ease-in-out transform ${
            open ? "scale-110" : "scale-90"
          }`}
          onClick={toggleNav}
        >
          {open ? (
            <AiOutlineClose
              size={22}
              className="transition-transform duration-300 ease-in-out"
            />
          ) : (
            <AiOutlineMenu
              size={24}
              className="transition-transform duration-300 ease-in-out"
            />
          )}
        </button>
      </div>
      <div className={`menu__nav ${open ? "menu__nav--open" : ""}`}></div>
      <style jsx>{`
        .menu__nav {
          position: fixed;
          top: 0;
          right: -100vw; /* Hide menu initially */
          height: 100%;
          width: 100vw; /* Full width */
          overflow: hidden;
          background-color: #f7f7f7;
          transition: all 1s ease-in-out; /* Faster transition */
          z-index: 10;
        }
        .menu__nav--open {
          right: 0; /* Slide in */
        }
      `}</style>
    </div>
  );
};
