import showOne from "../../images/showOne.png";
import showTwo from "../../images/showTwo.png";
import showThree from "../../images/showThree.png";
import React, { useState, useEffect } from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="lg:mt-28 mt-14">
      <div className="h-max w-full flex items-center flex-col gap-8 lg:gap-10 lg:flex-col">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl poppins-semibold leading-normal">
            Final UI Design Choices
          </h1>
          <p className="poppins-regular text-lg leading-loose">
            Now that the majority of the current features have been implemented,
            and the UI has been designed and developed, there are a few key
            features I did a certain way for particular reasons.
          </p>
        </div>
        <div className="w-full lg:h-96 gap-0 overflow-x-scroll overflow-y-hidden flex">
          <img
            className="object-contain w-auto h-full flex-shrink-0 cursor-zoom-in" // Added cursor-pointer
            src={showTwo}
            alt="Image 2"
            onClick={() => handleImageClick(showTwo)} // Handle click
          />
          <img
            className="object-contain w-auto h-full flex-shrink-0 cursor-zoom-in"
            src={showOne}
            alt="Image 1"
            onClick={() => handleImageClick(showOne)}
          />
          <img
            className="object-contain w-auto h-full flex-shrink-0 cursor-zoom-in"
            src={showThree}
            alt="Image 3"
            onClick={() => handleImageClick(showThree)}
          />
        </div>
      </div>

      {/* Modal for displaying the enlarged image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center cursor-zoom-out bg-black bg-opacity-70 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged"
              onClick={handleCloseModal}
              className="object-contain w-full h-full max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
