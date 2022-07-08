import { React, useState } from "react";
import "./navbar.css";
import Bounce from "react-reveal/Bounce";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("second-nav", window.scrollY > 0);
  });
  const [showNav, setShowNav] = useState(false);
  return (
    <Bounce top>
      <nav className="navbar">
        <div className="logo">Fun&Learn</div>
        <div
          className="ham-icon"
          onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-list ${showNav ? "showMenu" : ""}`}>
          <li>
            <a
              className="nav-link"
              href="#home"
              onClick={() => setShowNav(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="google.com"
              onClick={() => setShowNav(false)}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="google.com"
              onClick={() => setShowNav(false)}
            >
              Search
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="google.com"
              onClick={() => setShowNav(false)}
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </Bounce>
  );
};
export default Navbar;
