import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./ProjectNavbar.css"; // ✅ CORRECT PATH

import logo from "../assets/emilylogolight.png";

const ProjectNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  }, [location.pathname]);

  // Scroll behavior (fixes double navbar effect)
  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 100;

      if (hasScrolled !== scrolled) {
        setScrolled(hasScrolled);
        if (hasScrolled) {
          setIsOpen(false);
          setIsProjectsOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const disciplines = [
    { name: "UX/UI Design", path: "/ux-ui-design" },
    { name: "Media", path: "/media" },
    { name: "Graphic Design", path: "/graphic-design" }
  ];

  const toggleProjects = (e) => {
    e.preventDefault();
    setIsProjectsOpen((prev) => !prev);
  };

  return (
    <nav className={`project-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-header">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Emily Rianna Logo" className="logo-img" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/"><p>Home</p></Link>
        </li>

        <li>
          <Link to="/about"><p>About</p></Link>
        </li>

        <li className="projects-dropdown">
          <div className="projects-link-container">
            <Link to="/projects"><p>Projects</p></Link>

            <button className="dropdown-toggle" onClick={toggleProjects}>
              <span className={`dropdown-arrow ${isProjectsOpen ? "open" : ""}`}>
                ▼
              </span>
            </button>
          </div>

          <div className={`dropdown-menu ${isProjectsOpen ? "show" : ""}`}>
            <div className="dropdown-content">
              {disciplines.map((d, i) => (
                <Link
                  key={i}
                  to={d.path}
                  className="dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  <p>{d.name}</p>
                </Link>
              ))}

              <div className="dropdown-divider"></div>

              <Link
                to="/projects"
                className="dropdown-item view-all"
                onClick={() => setIsOpen(false)}
              >
                <p>View All Projects</p>
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-icon">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li className="nav-icon">
          <a href="mailto:emily.smiiith@gmail.com" className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectNavbar;
