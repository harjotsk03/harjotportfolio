import React, { useState } from "react";
import {
  AiFillFileText,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import resume from "../HarjotResume.pdf";
import {
  BiFile,
  BiFileBlank,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const buttonData = [
    {
      icon: <BiLogoLinkedin size={30} />,
      tooltip: "LinkedIn",
      key: "linkedin",
      link: "https://www.linkedin.com/in/harjotsingh7/",
    },
    {
      icon: <BiLogoGithub size={30} />,
      tooltip: "GitHub",
      key: "github",
      link: "https://github.com/harjotsk03",
    },
    {
      icon: <BiFileBlank size={30} />,
      tooltip: "Resume",
      key: "resume",
      link: resume,
    },
    {
      icon: <BiLogoInstagram size={30} />,
      tooltip: "Instagram",
      key: "instagram",
      link: "https://www.instagram.com/7harjotsk/",
    },
  ];

  const ButtonWithTooltip = ({ icon, tooltip, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group inline-block" key={tooltip}>
        <div className="hidden lg:flex bg-gray-100 poppins-regular bg-opacity-70 text-black px-2 py-1 text-xs rounded-lg absolute -top-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-500">
          {tooltip}
        </div>
        <button className="text-black opacity-10 p-3 rounded-lg hover:bg-white hover:bg-opacity-5 hover:opacity-90 transition duration-300 ease-in-out">
          {icon}
        </button>
      </div>
    </a>
  );

  return (
    <div className="bg-white lg:px-60 px-6 h-max pt-32 lg:pt-40 pb-10 lg:pb-20">
      <h2 className="poppins-semibold text-2xl lg:text-7xl">
        harjot singh kooner<span className="text-purple-500">.</span>
      </h2>
      <p
        style={{ lineHeight: "1.55" }} // Adjust this value as needed
        className="text-lg ml-1 lg:text-xl poppins-light mt-1 lg:mt-7 w-2/3"
      >
        BSc. Computer Science and Interactive Technology at Simon Fraser
        University. Specializing in front-end development & user experience
        focused development
      </p>
      <div className="flex pr-16 mt-16 gap-4 lg:justify-end">
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
        <div className="w-72 rounded-l-full fixed mt-6 bg-opacity-10 right-0 h-1 bg-black"></div>
      </div>
    </div>
  );
};
