import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Hero } from "../components/Home/Hero";
import { Projects } from "../components/Home/Projects";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />

      <Footer />
    </div>
  );
};
