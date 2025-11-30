import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// Only include the PROJECT navbar — nothing else
import ProjectNavbar from '../components/ProjectNavbar';
import ProjectFooter from '../components/ProjectFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/global.css';

import mediaImage from '../assets/images/media.png';
import uxuiImage from '../assets/images/uxui.png';
import graphicImage from '../assets/images/graphic.png';

const Projects = () => {

 // ============================
// PAGE-SPECIFIC METADATA
// ============================
useEffect(() => {
  const title = "Projects – Emily Rianna Smith | UX/UI · Media · Graphic Design";

  const desc =
    "Explore the full creative portfolio of Emily Rianna Smith — featuring UX/UI design, media & editing, and graphic design projects focused on emotion-driven storytelling and human-centered design.";

  const image = "https://www.yourwebsite.com/og/og-projects.jpg";

  const canonical = "https://www.yourwebsite.com/projects";

  document.title = title;

  // Description
  let metaDescription = document.querySelector("meta[name='description']");
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", desc);

  // OG Title
  let ogTitle = document.querySelector("meta[property='og:title']");
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute("content", title);

  // OG Description
  let ogDesc = document.querySelector("meta[property='og:description']");
  if (!ogDesc) {
    ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute("content", desc);

  // OG Image
  let ogImage = document.querySelector("meta[property='og:image']");
  if (!ogImage) {
    ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    document.head.appendChild(ogImage);
  }
  ogImage.setAttribute("content", image);

  // Canonical
  let canonicalLink = document.querySelector("link[rel='canonical']");
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", canonical);

}, []);


  // Apply projects-page body class
  useEffect(() => {
    document.body.classList.add('projects-page');
    return () => document.body.classList.remove('projects-page');
  }, []);

  return (
    <>
      {/* ONLY the Project Navbar */}
      <ProjectNavbar />

      <div className="projects-container">

        {/* Social Icons */}
        <div className="social-icons" role="navigation" aria-label="Social media links">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="mailto:emily.smiiith@gmail.com"
            className="social-icon"
            aria-label="Email Emily Rianna Smith"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* WHY THESE DISCIPLINES */}
        <section className="section">
          <div className="section-content">
            <div className="section-header">
              <h2>why these disciplines?</h2>
            </div>
            <div className="section-body">
              <p>
                Graphic design, UX/UI, and media all share a common relation to me which highlights my
                ability to express creativity with endless opportunities…
              </p>
            </div>
          </div>
        </section>

        {/* MEDIA */}
        <section className="section">
          <div className="section-content">
            <div className="section-header">
              <h1>media and editing</h1>
            </div>
            <div className="section-body">
              <p>
                I'm fascinated by how sound, motion, and visuals come together to tell a story…
              </p>

              <div className="projects-grid">
                <Link to="/media">
                  <div className="project-card">
                    <div className="project-image-container">
                      <img src={mediaImage} className="project-image" alt="Media projects" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="check-more-section">
                <Link to="/media" className="check-more-btn">check out more of my projects →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* UX/UI */}
        <section className="section">
          <div className="section-content">
            <div className="section-header">
              <h1>ux/ui</h1>
            </div>
            <div className="section-body">
              <p>I love designing experiences that feel natural, clear, and welcoming…</p>

              <div className="projects-grid">
                <Link to="/ux-ui-design">
                  <div className="project-card">
                    <div className="project-image-container">
                      <img src={uxuiImage} className="project-image" alt="UX/UI projects" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="check-more-section">
                <Link to="/ux-ui-design" className="check-more-btn">check out more →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* GRAPHIC DESIGN */}
        <section className="section">
          <div className="section-content">
            <div className="section-header">
              <h1>graphic design</h1>
            </div>
            <div className="section-body">
              <p>Graphic design is where I really get to play and express creativity…</p>

              <div className="projects-grid">
                <Link to="/graphic-design">
                  <div className="project-card">
                    <div className="project-image-container">
                      <img src={graphicImage} className="project-image" alt="Graphic design projects" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="check-more-section">
                <Link to="/graphic-design" className="check-more-btn">check out more →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section className="section">
          <div className="section-content">
            <div className="section-header">
              <h1>working with AI in design</h1>
              <h2>the human touch in an AI world</h2>
            </div>
            <div className="section-body">
              <p>With the world turning toward many AI powered tools…</p>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="section">
          <div className="section-content">
            <div className="section-header">
              <h1>my approach to every project</h1>
              <h2>values and steps that guide my work</h2>
            </div>

            <div className="section-body">
              <div className="process-content">
                <div className="process-step"><h1>listen</h1><p>First I listen…</p></div>
                <div className="process-step"><h1>pre planning</h1><p>Next is pre planning…</p></div>
                <div className="process-step"><h1>review</h1><p>Then comes review…</p></div>
                <div className="process-step"><h1>execute</h1><p>The final stage…</p></div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <ProjectFooter />
    </>
  );
};

export default Projects;
