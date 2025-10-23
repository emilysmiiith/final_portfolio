import React from 'react';
import './Footer.css';
// FontAwesome imports removed as per image
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    // Change the tag from 'footer' to 'div' if you want it to wrap the content 
    // as shown in the image (inside a container with the rounded bottom)
    // but sticking to semantic 'footer' for the overall section.
    <footer className="footer-image-style">
      <div className="footer-content-image-style">
        {/* Left Section: Name */}
        <div className="footer-section-name-image-style">
          {/* Use h2 style for the name based on the navbar's typography H2: 'Liu Jian Mao Cao' / #442B12 */}
          <h2 className="footer-name-image-style">Emily Rianna Smith</h2>
        </div>
        
        {/* Right Section: Links (Combined Contact and Navigation) */}
        <div className="footer-section-links-image-style">
          <div className="footer-links-column">
            {/* Contact Links */}
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-image-style"
            >
              <span>Linkedin</span>
            </a>
            <a href="mailto:emily.smiiith@gmail.com" className="footer-link-image-style">
              <span>Email</span>
            </a>
          </div>
          <div className="footer-links-column">
            {/* Navigation Links */}
            <a href="/" className="footer-link-image-style">
              <span>Home</span>
            </a>
            <a href="/about" className="footer-link-image-style">
              <span>About</span>
            </a>
            <a href="/projects" className="footer-link-image-style">
              <span>Projects</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom/Copyright section is not visible in the crop */}
    </footer>
  );
};

export default Footer;