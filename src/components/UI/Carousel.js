import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Carousel = ({
  images,
  currentIndex,
  handleNext,
  handlePrev,
  setCurrentIndex,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-20 -mt-6 lg:mt-32 overflow-hidden relative">
      <button
        onClick={handlePrev}
        className="absolute top-96 lg:top-1/2 left-0 p-3 rounded-lg lg:left-4 z-10 transition-transform duration-300 ease-in-out hover:-translate-x-1"
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
            <img
              src={image}
              className="h-full w-full object-contain"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute top-96 lg:top-1/2 right-0 p-3 rounded-lg lg:right-4 z-10 transition-transform duration-300 ease-in-out hover:translate-x-1"
      >
        <FiArrowRight strokeWidth={3.5} />
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)} // Optional: Clickable dots to jump to specific images
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
