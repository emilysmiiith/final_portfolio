import React from 'react';
import './ProjectFooter.css';

const ProjectFooter = () => {
  return (
    <footer className="project-footer">
      <div className="project-footer-content">

        {/* LEFT NAME */}
        <div className="project-footer-section-name">
          <h2 className="project-footer-name">Emily Rianna Smith</h2>
        </div>

        {/* RIGHT LINKS */}
        <div className="project-footer-section-links">
          <div className="project-footer-links-column">
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="project-footer-link"
            >
              <span>Linkedin</span>
            </a>
            <a href="mailto:emily.smiiith@gmail.com" className="project-footer-link">
              <span>Email</span>
            </a>
          </div>

          <div className="project-footer-links-column">
            <a href="/" className="project-footer-link"><span>Home</span></a>
            <a href="/about" className="project-footer-link"><span>About</span></a>
            <a href="/projects" className="project-footer-link"><span>Projects</span></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ProjectFooter;
