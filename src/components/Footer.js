import { FiArrowUpRight } from "react-icons/fi";
import resume from "../images/HarjotResume.pdf";

export const Footer = () => {
  return (
    <div className="h-96 w-full px-10 gap-12 lg:px-32 flex flex-col lg:flex-row lg:justify-between lg:items-center  lg:py-10 bg-white mt-20">
      <div className="flex flex-col items-start gap-3 lg:gap-1">
        <h3 className="poppins-medium text-lg opacity-50">Harjot Singh</h3>
        <h3 className="poppins-regular text-md opacity-30">
          All rights reserved 2024 ©
        </h3>
        <h3 className="poppins-regular text-md opacity-30">
          Designed and developed from scratch using Figma, React, and
          TailwindCSS
        </h3>
      </div>
      <div className="flex flex-col lg:items-end gap-3">
        <h3 className="poppins-medium text-opacity-50 text-black">Connect</h3>
        <button
          onClick={() =>
            window.open("https://www.linkedin.com/in/harjotsingh7/", "_blank")
          }
          className="poppins-regular flex flex-row items-center gap-0.5 text-opacity-30 text-black hover:text-opacity-100 transition duration-300 ease-in-out group"
        >
          Linkedin{" "}
          <FiArrowUpRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
        <button
          onClick={() => window.open("https://github.com/harjotsk03", "_blank")}
          className="poppins-regular flex flex-row items-center gap-0.5 text-opacity-30 text-black hover:text-opacity-100 transition duration-300 ease-in-out group"
        >
          GitHub{" "}
          <FiArrowUpRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
        <button
          onClick={() => window.open(resume, "_blank")}
          className="poppins-regular flex flex-row items-center gap-0.5 text-opacity-30 text-black hover:text-opacity-100 transition duration-300 ease-in-out group"
        >
          Download Resume{" "}
          <FiArrowUpRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
};
