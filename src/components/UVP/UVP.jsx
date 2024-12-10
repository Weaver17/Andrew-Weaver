import "./UVP.css";

import pic from "../../assets/thumbnail-standin.png";

const UVP = () => {
  return (
    <div className="uvp">
      <div className="uvp__portrait-container">
        <img src={pic} alt="My Face" className="uvp__portrait" />
      </div>
      <div className="uvp__text-container">
        <h1 className="uvp__greeting">Hello! My Name is Andrew Weaver</h1>
        <p className="uvp__uvp">
          I am an Auto Body Technician-turned-Software Engineer with strong
          problem-solving skills and a keen attention to detail. I'm most
          comfortable with HTML, JavaScript, and React, and I'm eager to apply
          my technical expertise and adaptability to software development.
        </p>
      </div>
      {/* Link */}
      <p className="uvp__link-text">About me...</p>
    </div>
  );
};

export default UVP;
