import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import "./Navbar.css";

function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
      <>
        <nav className="nav-wrapper">
          <div className="nav-content">
            <p className="logo">Jagdish Jangid</p>
            <ul className={`nav-links ${MenuOpen ? "active" : ""}`}>
              <li>
                <a href="#home" className="menu-item" onClick={(e) => handleScroll(e, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="menu-item" onClick={(e) => handleScroll(e, "skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#work-experience" className="menu-item" onClick={(e) => handleScroll(e, "work-experience")}>
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="menu-item" onClick={(e) => handleScroll(e, "contact")}>
                  Contact Me
                </a>
              </li>
            </ul>
            <a href="./assets/images/Resume.pdf" download className="contact-btn">
              Hire Me
            </a>
            <button
                className={`menu-btn ${MenuOpen ? "rotated" : ""}`}
                onClick={toggleMenu}
            >
              {MenuOpen ? (
                  <XMarkIcon className="h-8 w-8 text-white" />
              ) : (
                  <Bars3Icon className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </nav>
      </>
  );
}

export default Navbar;
