import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import test1 from "../../images/ecogrow.png";
import test4 from "../../images/pharmabotics.png";
import test2 from "../../images/sfurobotsoccer.png";
import test3 from "../../images/studySpotr.png";
import Alert from "../UI/Alert";
import { AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const goTo = (location) => {
    navigate(`/${location}`);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Reset the state to false after alert disappears
  };

  return (
    <div className="bg-white h-max lg:px-60 px-6 pt-2 lg:pt-0">
      <AnimatePresence>
        {showAlert && (
          <Alert message="Case study coming soon!" onClose={handleCloseAlert} />
        )}
      </AnimatePresence>
      <div
        className={`flex fadeInUp flex-col lg:flex-row lg:gap-5 gap-8 transition-all duration-1000 ease-in-out ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* STUDY SPOTR */}
        <button
          onClick={() => goTo("studySpotr")}
          className="relative lg:w-1/2 flex text-left flex-col items-start hover:cursor-pointer"
        >
          <div className="group lg:h-96 w-full bg-black rounded-lg overflow-hidden transition-all duration-1000 ease-in-out">
            <div className="absolute mix-blend-difference top-4 right-4 z-30 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45">
              <FiArrowUpRight size={28} />
            </div>
            <img
              src={test3}
              className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-in-out group-hover:scale-110"
              alt="Study Spotr"
            />
          </div>
          <h2 className="poppins-medium mt-3 text-xl lg:mt-5 text-3xl">
            Study Spotr
          </h2>
          <p className="poppins-light mt-1 lg:mt-1.5 w-11/12">
            A study spot finder where users can find, add, and rate study spots
            near them or anywhere around the world
          </p>
          <div className="flex flex-wrap w-10/12 mt-3 gap-1.5 lg:gap-3">
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-400  text-xs py-1 rounded-full">
              ReactJS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-500 text-xs py-1 rounded-full">
              TailwindCSS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-purple-400 text-xs py-1 rounded-full">
              Figma
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-red-500 text-xs py-1 rounded-full">
              Google Maps API
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-green-500 text-xs py-1 rounded-full">
              NodeJS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-green-700 text-xs py-1 rounded-full">
              MongoDB
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-400 text-xs py-1 rounded-full">
              JWT
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-orange-700 text-xs py-1 rounded-full">
              ExpressJS
            </p>
          </div>
        </button>

        {/* SFU ROBOT SOCCER */}
        <button
          onClick={() => goTo("SFURobotSoccer")}
          className="relative lg:w-1/2 flex flex-col items-start hover:cursor-pointer"
        >
          <div className="group lg:h-96 w-full bg-black rounded-lg overflow-hidden transition-all duration-1000 ease-in-out">
            <div className="absolute mix-blend-difference top-4 right-4 z-30 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45">
              <FiArrowUpRight size={28} />
            </div>
            <img
              src={test2}
              className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-in-out group-hover:scale-110"
              alt="SFU Robot Soccer"
            />
          </div>
          <h2 className="poppins-medium mt-3 text-xl lg:mt-5 text-3xl">
            SFU Robot Soccer Website
          </h2>
          <p className="poppins-light mt-1 lg:mt-1.5 w-11/12">
            Redesigned and developed the SFU RS website for better mobile
            usability, a more unified feeling UI, and better user engagement
          </p>
          <div className="flex flex-wrap w-10/12 mt-3 gap-1.5 lg:gap-3">
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-400  text-xs py-1 rounded-full">
              ReactJS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-500 text-xs py-1 rounded-full">
              TailwindCSS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-purple-400 text-xs py-1 rounded-full">
              Figma
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-orange-400 text-xs py-1 rounded-full">
              Google Firebase
            </p>
          </div>
        </button>
      </div>
      <div
        className={`flex fadeInUp flex-col lg:flex-row lg:gap-5 gap-8 transition-all mt-10 duration-1000 ease-in-out visible`}
      >
        {/* PHARMABOTICS */}
        <button
          onClick={handleShowAlert}
          className="relative lg:w-1/2 flex flex-col items-start hover:cursor-pointer"
        >
          <div className="group lg:h-96 w-full bg-black rounded-lg overflow-hidden transition-all duration-1000 ease-in-out">
            <div className="absolute mix-blend-difference top-4 right-4 z-30 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45">
              <FiArrowUpRight size={28} />
            </div>
            <img
              src={test4}
              className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-in-out group-hover:scale-110"
              alt="Pharmabotics"
            />
          </div>
          <h2 className="poppins-medium mt-3 text-xl lg:mt-5 text-3xl">
            Pharmabotics
          </h2>
          <p className="poppins-light mt-1 lg:mt-1.5 w-11/12">
            An algorithm learning and visual aid tool, developed to help student
            and anyone to learn data structures and algorithms
          </p>
          <div className="flex flex-wrap w-10/12 mt-3 gap-1.5 lg:gap-3">
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-400  text-xs py-1 rounded-full">
              ReactJS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-500 text-xs py-1 rounded-full">
              TailwindCSS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-blue-800 text-xs py-1 rounded-full">
              C++
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-orange-500 text-xs py-1 rounded-full">
              Arduino
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-green-500 text-xs py-1 rounded-full">
              NodeJS
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-green-700 text-xs py-1 rounded-full">
              MongoDB
            </p>
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-orange-700 text-xs py-1 rounded-full">
              ExpressJS
            </p>
          </div>
        </button>

        {/* ECOGROW */}
        <button
          onClick={handleShowAlert}
          className="relative lg:w-1/2 flex flex-col items-start hover:cursor-pointer"
        >
          <div className="group lg:h-96 w-full bg-black rounded-lg overflow-hidden transition-all duration-1000 ease-in-out">
            <div className="absolute mix-blend-difference top-4 right-4 z-30 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45">
              <FiArrowUpRight size={28} />
            </div>
            <img
              src={test1}
              className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-in-out group-hover:scale-110"
              alt="EcoGrow"
            />
          </div>
          <h2 className="poppins-medium mt-3 text-xl lg:mt-5 text-3xl">
            EcoGrow
          </h2>
          <p className="poppins-light mt-1 lg:mt-1.5 w-11/12">
            Redesigned and developed the SFU RS website for better mobile
            usability, a more unified feeling UI, and better user engagement
          </p>
          <div className="flex flex-wrap w-10/12 mt-3 gap-1.5 lg:gap-3">
            <p className="borderWidth border-black px-3 opacity-50 transition duration-300 ease-in-out lg:hover:opacity-100 lg:hover:text-orange-400  text-xs py-1 rounded-full">
              Java
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
