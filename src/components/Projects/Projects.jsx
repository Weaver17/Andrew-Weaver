import "./Projects.css";

import pic from "../../assets/thumbnail-standin.png";

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects__header">&lt;Projects /&gt;</h3>
      <ul className="projects__container">
        <li className="projects__project">
          <h4 className="projects__title">M I S T</h4>
          <img
            src={pic}
            alt="-project name- thumbnail"
            className="projects__img"
          />
        </li>
        <li className="projects__project">
          <h4 className="projects__title">What To Wear (WTWR)</h4>
          <img
            src={pic}
            alt="-project name- thumbnail"
            className="projects__img"
          />
        </li>
        <li className="projects__project">
          <h4 className="projects__title">Around the U.S.</h4>
          <img
            src={pic}
            alt="-project name- thumbnail"
            className="projects__img"
          />
        </li>
        <li className="projects__project">
          <h4 className="projects__title">Triple Peaks Coffee Shop</h4>
          <img
            src={pic}
            alt="-project name- thumbnail"
            className="projects__img"
          />
        </li>
      </ul>
    </div>
  );
};

export default Projects;
