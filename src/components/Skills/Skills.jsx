import React from "react";
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
    <div>
      <h2>My skills:</h2>
      <div>
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <FaNode />
        <DiMongodb />
        <FaBootstrap />
        <FaFigma />
        <FaGitAlt />
        <FaGithub />
        <IoLogoJavascript />
        <DiNginx />
        <SiPostman />
      </div>
    </div>
  );
};

export default Skills;
