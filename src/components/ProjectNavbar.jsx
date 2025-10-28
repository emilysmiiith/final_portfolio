import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ProjectNavbar.css';
import logo from '../assets/emilylogo.png';

const ProjectNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const disciplines = [
    { name: 'UX/UI Design', path: '/ux-ui-design' },
    { name: 'Media', path: '/media' },
    { name: 'Graphic Design', path: '/graphic-design' }
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 100;
          if (shouldBeScrolled !== scrolled) {
            setScrolled(shouldBeScrolled);
            if (shouldBeScrolled) {
              setIsOpen(false);
              setIsProjectsOpen(false);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setIsProjectsOpen(!isProjectsOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setIsProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setIsProjectsOpen(false);
  };

  return (
    <nav className={`project-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-header">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Emily Rianna Logo" className="logo-img" />
        </Link>
        
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}><p>Home</p></Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMobileMenu}><p>About</p></Link>
        </li>

        <li 
          className="projects-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="projects-link-container">
            <Link to="/projects" onClick={closeMobileMenu}><p>Projects</p></Link>
            <button 
              className="dropdown-toggle" 
              onClick={handleProjectsClick}
              aria-label="Toggle projects menu"
            >
              <span className={`dropdown-arrow ${isProjectsOpen ? 'open' : ''}`}>▼</span>
            </button>
          </div>

          <div className={`dropdown-menu ${isProjectsOpen ? 'show' : ''}`}>
            <div className="dropdown-content">
              {disciplines.map((discipline, index) => (
                <Link 
                  key={index}
                  to={discipline.path}
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  <p>{discipline.name}</p>
                </Link>
              ))}
              <div className="dropdown-divider"></div>
              <Link to="/projects" className="dropdown-item view-all" onClick={closeMobileMenu}>
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
          <a 
            href="mailto:emily.smiiith@gmail.com" 
            className="icon"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectNavbar;
