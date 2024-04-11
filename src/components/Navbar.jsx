import "./Navbar.css";
import { FiHome } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { FcDocument } from "react-icons/fc";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {};

  const handleScroll = (elementId) => {
    showNavbar();
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "instant",
      });
    }
  };

  return (
    <header>
      <div
        className="logo"
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <a
          href="/"
          className="d-flex navbar-brand"
          onClick={() => {
            handleScroll("/");
          }}>
          <h1 className="logo-text">Pranavesh</h1>
        </a>
      </div>
      <nav ref={navRef}>
        <div className="nav-item">
          <a
            className="nav-link"
            href="#home"
            onClick={() => {
              handleScroll("home");
            }}>
            <FiHome />
            <span className="intro">Home</span>
          </a>
        </div>
        <div className="nav-item">
          <a
            className="nav-link"
            href="#about"
            onClick={() => {
              handleScroll("about");
            }}>
            <BsFillPersonFill />
            <span className="intro">About</span>
          </a>
        </div>

        <div className="nav-item">
          <a
            className="nav-link"
            href="#projects"
            onClick={() => {
              handleScroll("projects");
            }}>
            <PiProjectorScreenChartThin />
            <span className="intro">Projects</span>
          </a>
        </div>

        <div className="nav-item">
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1QrE5Ou6RXTRGZ7c6Vb8QiiPI-JZGCpR2/view?usp=drive_link">
            <FcDocument />
            <span className="intro">Resume</span>
          </a>
        </div>
        <button
          type="button"
          onClick={showNavbar}
          className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
