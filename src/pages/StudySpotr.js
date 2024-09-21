import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import image from "../images/studySpotr.png";
import slide1 from "../images/studySpotrImages/Study Spotr 1.png";
import slide2 from "../images/studySpotrImages/Study Spotr 2.png";
import slide3 from "../images/studySpotrImages/Study Spotr 3.png";
import slide4 from "../images/studySpotrImages/Study Spotr 4.png";
import { Footer } from "../components/Footer";

const images = [slide1, slide4, slide3, slide2];

export const StudySpotr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="lg:px-48 fadeInUpFast px-10 pt-24 lg:pt-20 flex flex-col">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-3 lg:gap-6 mb-0">
            <h1 className="poppins-semibold text-4xl lg:text-6xl">
              Study Spotr
            </h1>
            <p className="poppins-light text-lg">
              A study spot finder where users can find, add, and rate study
              spots near them or anywhere around the world
            </p>
            <div className="flex flex-row items-center mt-2 lg:mt-0 gap-8">
              <div className="group">
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/harjotsk03/studySpotter",
                      "_blank"
                    )
                  }
                  className="poppins-medium flex flex-row items-center hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  GitHub
                  <FiArrowUpRight
                    className="transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-in-out"
                    strokeWidth={2.5}
                  />
                </button>
              </div>

              <div className="group">
                <button
                  onClick={() =>
                    window.open(
                      "https://study-spotter-two.vercel.app/",
                      "_blank"
                    )
                  }
                  className="poppins-medium flex flex-row items-center hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  Live Site
                  <FiArrowUpRight
                    className="transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-in-out"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 w-full -ml-2 lg:ml-0 mt-6 lg:mt-0"
            src={image}
          ></img>
        </div>

        <div className="flex flex-col mt-32 lg:flex-row gap-8 lg:gap-20 justify-around">
          <div className="flex flex-col gap-3 lg:w-1/2">
            <h2 className="poppins-semibold text-3xl">Problem</h2>
            <p className="poppins-regular text-lg mb-1 leading-relaxed">
              Before beginning this project, I had not build a{" "}
              <span className="poppins-semibold">full stack application </span>
              where both front and back end were to be hosted for real users to
              be able to use the application <br></br> <br></br>
              Furthermore, the question{" "}
              <span className="poppins-semibold">
                "where should we go study today?"
              </span>{" "}
              is a common one for all student. Finding places to study that have
              everything you need as a student can be difficult. Sometimes there
              is no wifi, or outlets to charge a phone and laptop. Other times
              you need somewhere quiet to study but can never seem to find one.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:w-1/2">
            <h2 className="poppins-semibold text-3xl">Solution</h2>
            <p className="poppins-regular text-lg mb-1 leading-relaxed">
              Study Spotr gives students study spots near them, and all around
              the world. It is now as easy as searching a location using the
              <span className="poppins-semibold"> search functionality </span>,
              or finding a spot using the{" "}
              <span className="poppins-semibold">interactive map </span>
              or just scrolling through the list of locations and finding one
              that meets your needs. <br></br>
              <br></br>
              Each spot will tell the user if that location has{" "}
              <span className="poppins-semibold">wifi</span>,{" "}
              <span className="poppins-semibold">outlets</span>,{" "}
              <span className="poppins-semibold">silent spaces</span>,
              <span className="poppins-semibold">whiteboards</span>, and if{" "}
              <span className="poppins-semibold">ID</span> is required to get in
              to the study spot. Each spot will also be{" "}
              <span className="poppins-semibold"> rated by other users </span>
              who may have been there to give an accurate rating on the study
              spot.
              <br></br>
              <br></br>
              Using the <span className="poppins-semibold">MERN</span> stack
              along with the{" "}
              <span className="poppins-semibold">Google Maps API</span> I was
              able to build a usable,{" "}
              <span className="poppins-semibold">scalable</span>, and
              interactive full stack application that I hope to get 100+ active
              study spots on within the next few months.
            </p>
          </div>
        </div>
        <div className="w-full h-max mt-16 px-10 lg:px-20 py-10 bg-gray-100 flex flex-col lg:flex-row gap-10 justify-between bg-opacity-50 rounded-2xl">
          <div className="flex flex-col gap-1 lg:w-1/4">
            <h2 className="poppins-semibold text-xl">My Role</h2>
            <p className="poppins-regular text-lg mb-1">Designer</p>
            <p className="poppins-regular text-lg mb-1">Developer</p>
          </div>
          <div className="flex flex-col gap-1 lg:w-1/4">
            <h2 className="poppins-semibold text-xl">Tools</h2>
            <p className="poppins-regular text-lg mb-1">MERN stack</p>
            <p className="poppins-regular text-lg mb-1">TailwindCSS</p>
            <p className="poppins-regular text-lg mb-1">Google Maps API</p>
            <p className="poppins-regular text-lg mb-1">Vercel & Render</p>
            <p className="poppins-regular text-lg mb-1">Figma</p>
          </div>
          <div className="flex flex-col gap-1 lg:w-1/4">
            <h2 className="poppins-semibold text-xl">Timeline</h2>
            <p className="poppins-regular text-lg mb-1">Ongoing project</p>
            <p className="poppins-regular text-lg mb-1">Started August 2024</p>
            <p className="poppins-regular text-lg mb-1">
              First Release October 2024
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:w-1/4">
            <h2 className="poppins-semibold text-xl">Next Steps</h2>
            <p className="poppins-regular text-lg mb-1">
              Add image uploading, use AWS S3 for storing images
            </p>
            <p className="poppins-regular text-lg mb-1">
              Complete authentication and user registration functionality
            </p>
            <p className="poppins-regular text-lg mb-1">
              Finish and tidy up the UI
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center -mt-20 lg:mt-28 overflow-hidden relative">
          <button
            onClick={handlePrev}
            className="absolute top-96 lg:top-1/2 left-0 p-3 rounded-lg lg:left-4 z-10 transition-transform duration-300 ease-in-out hover:-translate-x-1" // Added hover effect
          >
            <FiArrowLeft strokeWidth={3.5} />
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 h-[60vh] w-full">
                {" "}
                <img
                  src={image}
                  className="h-full w-full object-contain" // Ensure both height and width are full
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-96 lg:top-1/2 p-3 rounded-lg lg:right-4 z-10 transition-transform duration-300 ease-in-out hover:translate-x-1" // Added hover effect
          >
            <FiArrowRight strokeWidth={3.5} />
          </button>
        </div>
        <div className="flex flex-row gap-4 justify-center -mt-24 lg:mt-8">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 -mt-2 lg:mt-0 rounded-full ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
