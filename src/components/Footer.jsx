import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-name">emily rianna smith</h3>
          <p className="footer-tagline">creative designer bringing emotions to life through art</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">connect</h4>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:emily.smiiith@gmail.com" className="footer-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">navigation</h4>
          <div className="footer-links">
            <a href="/" className="footer-link">
              <span>Home</span>
            </a>
            <a href="/about" className="footer-link">
              <span>About</span>
            </a>
            <a href="/projects" className="footer-link">
              <span>Projects</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Emily Rianna Smith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;