import React, { useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import { Hero } from "../components/Home/Hero";
import { About } from "../components/Home/About";

export const Home = () => {
  return (
    <SmoothScroll>
      <section data-scroll-section>
        <Hero />
      </section>
      <section data-scroll-section>
        <About />
      </section>
    </SmoothScroll>
  );
};
