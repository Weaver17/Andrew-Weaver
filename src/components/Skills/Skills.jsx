import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { DiMongodb, DiNginx } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__header">&lt;Skills /&gt;</h2>
      <div className="skills__container">
        <div className="skills__skill-container">
          <FaHtml5 className="skills__skill" />
          <span className="skills__skill-name">HTML</span>
        </div>
        <div className="skills__skill-container">
          <FaCss3Alt className="skills__skill" />
          <span className="skills__skill-name">CSS</span>
        </div>
        <div className="skills__skill-container">
          <IoLogoJavascript className="skills__skill" />
          <span className="skills__skill-name">JavaScript</span>
        </div>
        <div className="skills__skill-container">
          <FaReact className="skills__skill" />
          <span className="skills__skill-name">React</span>
        </div>
        <div className="skills__skill-container">
          <FaGitAlt className="skills__skill" />
          <span className="skills__skill-name">Git</span>
        </div>
        <div className="skills__skill-container">
          <FaGithub className="skills__skill" />
          <span className="skills__skill-name">GitHub</span>
        </div>
        <div className="skills__skill-container">
          <FaFigma className="skills__skill" />
          <span className="skills__skill-name">Figma</span>
        </div>
        <div className="skills__skill-container">
          <SiPostman className="skills__skill" />
          <span className="skills__skill-name">Postman</span>
        </div>
        <div className="skills__skill-container">
          <FaNode className="skills__skill" />
          <span className="skills__skill-name">Node.js</span>
        </div>
        <div className="skills__skill-container">
          <DiMongodb className="skills__skill" />
          <span className="skills__skill-name">MongoDB</span>
        </div>
        <div className="skills__skill-container">
          <FaBootstrap className="skills__skill" />
          <span className="skills__skill-name">Bootstrap</span>
        </div>
        <div className="skills__skill-container">
          <DiNginx className="skills__skill" />
          <span className="skills__skill-name">NginX</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
