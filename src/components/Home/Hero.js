import React, { useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <h2 className="poppins-semibold text-2xl lg:text-7xl leading-tight">
        Harjot Singh
      </h2>
    </div>
  );
};
