import { FiArrowUpRight } from "react-icons/fi";

const ProjectHero = ({
  name,
  description,
  github,
  website,
  image,
  buttonColor,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="flex flex-col gap-3 lg:gap-6 mb-0">
        <h1 className="poppins-semibold text-4xl lg:text-6xl">{name}</h1>
        <p className="poppins-light text-lg">{description}</p>
        <div className="flex flex-row items-center mt-2 lg:mt-0 gap-8">
          <div className="group">
            <button
              onClick={() => window.open(github, "_blank")} // Open GitHub link
              className={`poppins-medium flex flex-row items-center text-black transition duration-300 ease-in-out ${buttonColor}`}
            >
              GitHub
              <FiArrowUpRight
                className="transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-in-out ml-1"
                strokeWidth={2.5}
              />
            </button>
          </div>

          <div className="group">
            <button
              onClick={() => window.open(website, "_blank")} // Open Live Site link
              className={`poppins-medium flex flex-row items-center text-black transition duration-300 ease-in-out ${buttonColor}`}
            >
              Live Site
              <FiArrowUpRight
                className="transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-in-out ml-1"
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </div>
      <img
        className="lg:w-3/5 w-full -ml-2 lg:ml-0 mt-6 lg:mt-0"
        src={image}
        alt={`${name} screenshot`}
      />
    </div>
  );
};

export default ProjectHero;
