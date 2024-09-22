import React, { useState } from "react";
import {
  AiFillFileText,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import resume from "../../images/HarjotResume.pdf";
import {
  BiFile,
  BiFileBlank,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import {
  FiArrowDownRight,
  FiArrowUpLeft,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const buttonData = [
    {
      icon: <BiLogoLinkedin size={25} />,
      tooltip: "LinkedIn",
      key: "linkedin",
      link: "https://www.linkedin.com/in/harjotsingh7/",
    },
    {
      icon: <BiLogoGithub size={25} />,
      tooltip: "GitHub",
      key: "github",
      link: "https://github.com/harjotsk03",
    },
    {
      icon: <BiFileBlank size={25} />,
      tooltip: "Resume",
      key: "resume",
      link: resume,
    },
    {
      icon: <BiLogoInstagram size={25} />,
      tooltip: "Instagram",
      key: "instagram",
      link: "https://www.instagram.com/7harjotsk/",
    },
  ];

  const ButtonWithTooltip = ({ icon, tooltip, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group inline-block" key={tooltip}>
        <div className="hidden lg:flex bg-gray-100 poppins-regular bg-opacity-70 text-black px-2 py-1 text-xs rounded-lg absolute top-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-500">
          {tooltip}
        </div>
        <button className="text-black opacity-10 p-3 rounded-lg hover:bg-white hover:bg-opacity-5 hover:opacity-90 transition duration-300 ease-in-out">
          {icon}
        </button>
      </div>
    </a>
  );

  return (
    <div className="bg-white lg:px-60 px-8 h-max pt-32 lg:pt-40 pb-10 lg:pb-20">
      <h2
        style={{ lineHeight: "1.15" }}
        className="poppins-semibold text-5xl lg:text-7xl"
      >
        harjot singh kooner
        {/* <span className="text-purple-500">.</span> */}
      </h2>
      <p
        style={{ lineHeight: "1.55" }} // Adjust this value as needed
        className="text-lg ml-0 lg:ml-1.5 lg:text-xl poppins-light w-11/12 mt-6 lg:mt-8 lg:w-3/4"
      >
        BSc. in Computer Science and Interactive Technology at Simon Fraser
        University. Specializing in full-stack software development & user
        experience focused design
      </p>
      <button
        onClick={() =>
          window.open("https://www.linkedin.com/in/harjotsingh7/", "_blank")
        }
        className="poppins-regular lg:ml-2 mt-4 flex flex-row items-center gap-0.5 text-opacity-30 text-black hover:text-opacity-100 hover:text-purple-500 transition duration-300 ease-in-out group"
      >
        More About Me{" "}
        <FiArrowUpRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>

      <p className="poppins-light hover:cursor-default flex flex-row items-center gap-2 lg:justify-end text-black text-xs text-opacity-20 mt-16 lg:mt-32 lg:mr-3.5">
        get in touch
      </p>
      <div className="flex -ml-3 mt-1 gap-4 lg:justify-end">
        <div className="flex flex-row gap-2 mt-10 lg:mt-0">
          {buttonData.map(({ icon, tooltip, link, key }) => (
            <ButtonWithTooltip
              icon={icon}
              tooltip={tooltip}
              link={link}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
