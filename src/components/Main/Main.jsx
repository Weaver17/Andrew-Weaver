import "./Main.css";

import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import UVP from "../UVP/UVP";

const Main = () => {
  return (
    <section className="main">
      <UVP />
      <Skills />
      <Projects />
    </section>
  );
};

export default Main;
