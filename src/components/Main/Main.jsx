import React from "react";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../About/About";
import UVP from "../UVP/UVP";

const Main = () => {
  return (
    <section>
      <UVP />
      <About />
      <Skills />
      <Projects />
    </section>
  );
};

export default Main;
