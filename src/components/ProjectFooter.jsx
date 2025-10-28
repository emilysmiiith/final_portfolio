import React from 'react';
import './ProjectFooter.css';

const ProjectFooter = () => {
  return (
    <footer className="project-footer">
      <div className="footer-content">
        <div className="footer-section-name">
          <h2 className="footer-name">Emily Rianna Smith</h2>
        </div>
        <div className="footer-section-links">
          <div className="footer-links-column">
            <a href="/about" className="footer-link">About</a>
            <a href="/projects" className="footer-link">Projects</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
          <div className="footer-links-column">
            <a href="mailto:emily.smiiith@gmail.com" className="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
