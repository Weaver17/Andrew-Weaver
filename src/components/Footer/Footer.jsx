import { Link, NavLink } from "react-router-dom";

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="footer__nav">
          <NavLink className="footer__nav-link" to="/games">
            <p className="footer__nav-link-text">NavLink</p>
          </NavLink>
          <NavLink className="footer__nav-link" to="/search">
            <p className="footer__nav-link-text">NavLink</p>
          </NavLink>
          <NavLink className="footer__nav-link" to="/about">
            <p className="footer__nav-link-text">NavLink</p>
          </NavLink>
        </div>
        <div className="footer__social-icons">
          <Link
            className="footer__nav-link footer__nav-link_icon"
            to="https://facebook.com"
            target="_blank"
          >
            <FaSquareGithub className="footer__social-icon" />
          </Link>
          <Link
            className="footer__nav-link footer__nav-link_icon"
            to="https://instagram.com"
            target="_blank"
          >
            <FaLinkedin className="footer__social-icon" />
          </Link>
        </div>
      </div>
      <p className="footer__signature">Developed in 2024 by Andrew Weaver</p>
    </footer>
  );
};

export default Footer;
