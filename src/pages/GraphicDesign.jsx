import React, { useEffect } from 'react';
import './GraphicDesign.css';
import '../styles/global.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/ProjectFooter';
import imageSvg from '../assets/image.svg';

import logoboxImage from '../assets/images/logobox.png';
import boxImage from '../assets/images/box.png';
import flatImage from '../assets/images/flat.png';
import badImage from '../assets/images/bad.png';
import graphicImage from '../assets/images/graphic.png';

const GraphicDesign = () => {

  // ✅ PAGE-SPECIFIC SEO METADATA
  useEffect(() => {
    document.title = "Graphic Design – Emily Rianna Smith | Brand, Print & Packaging";

    const desc =
      "Explore the graphic design work of Emily Rianna Smith — packaging design, brand identity, print graphics, motion-enhanced visuals, and thoughtful visual storytelling.";
    
    const image = "https://www.yourwebsite.com/og/og-graphic-design.jpg";

    document.querySelector("meta[name='description']")?.setAttribute("content", desc);
    document.querySelector("meta[property='og:title']")?.setAttribute("content", "Graphic Design – Emily Rianna Smith");
    document.querySelector("meta[property='og:description']")?.setAttribute("content", desc);
    document.querySelector("meta[property='og:image']")?.setAttribute("content", image);

  }, []);

  return (
    <>
      {/* Global Navbar */}
      <ProjectNavbar />

      <div className="graphic-container">

        {/* Decorative Background */}
        <div className="svg-static" aria-hidden="true">
          <img 
            src={imageSvg}
            alt=""
            className="svg-image-static"
          />
        </div>

        <div className="graphic-content">

          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                visual storytelling
              </h2>
              <h1 className="section-title">graphic design</h1>
              <p className="journey-text">
                Graphic design is where I really get to play and express creativity. Whether it’s working on
                brand identities, packaging, print, or digital graphics — I love the challenge of telling a
                story through visuals. I’m drawn to designs that are clean, thoughtful, and full of personality.
                It’s such a great feeling when the right visual can really connect with someone.
              </p>
            </div>
          </section>

          {/* Project 1: Serene Sip */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase amber">
                <div className="project-header">
                  <div className="project-number">#4</div>
                  <div className="project-meta">
                    <h2 className="project-title">Serene Sip – Box/Brand Design</h2>
                    <p className="project-subtitle">Packaging Design & Motion Graphics</p>
                    <div className="project-stats">
                      <span>30 hours</span> • <span>Nov 15 - Dec 15, 2024</span> • <span>Independent Project</span> • <span>Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                <div className="project-preview">
                  <div className="preview-images-grid">
                    <div className="preview-image">
                      <img src={logoboxImage} alt="Serene Sip Logo Design" />
                      <div className="image-label">Logo Design</div>
                    </div>
                    <div className="preview-image">
                      <img src={boxImage} alt="Serene Sip Box Design" />
                      <div className="image-label">Box Design</div>
                    </div>
                    <div className="preview-image">
                      <img src={flatImage} alt="Serene Sip Flat Design" />
                      <div className="image-label">Flat Design</div>
                    </div>
                  </div>

                  <div className="preview-content">
                    <h3 className="preview-title">Project Goal</h3>
                    <p>
                      The goal of this project was to create a packaged box design using Adobe Photoshop and Adobe After Effects,
                      showcasing both graphic and motion design skills through cohesive branding and presentation.
                    </p>

                    <div className="preview-timeline">
                      <div><strong>Start:</strong> Nov 15, 2024</div>
                      <div><strong>End:</strong> Dec 15, 2024</div>
                      <div><strong>Total Hours:</strong> 30</div>
                      <div><strong>Designer:</strong> Emily Rianna Smith</div>
                    </div>

                    <div className="tools-section">
                      <h4 className="tools-title">Technical Tools</h4>
                      <div className="tools-preview">
                        <span>Adobe Photoshop</span>
                        <span>Adobe After Effects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4>Narrative</h4>
                      <p>
                        For this project, I designed packaging for a fictional espresso machine brand called Serene Sip.
                        Created in Adobe Photoshop with animation in After Effects, the goal was to bring the design to life
                        while maintaining brand consistency and visual storytelling.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Objective</h4>
                      <p>
                        Demonstrate packaging and motion design skills through a fictional brand concept that conveys calm,
                        modern design and visual appeal.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Research & Concept</h4>
                      <p>
                        I researched coffee packaging trends and built a cohesive identity system meant to feel modern, warm,
                        and calm.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Design Approach</h4>
                      <p>
                        I combined cohesive branding with clean layout, subtle color palettes, and minimal typography.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Takeaways</h4>
                      <p>
                        This project strengthened my understanding of brand systems and how motion can elevate packaging design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project 2: Redesign Poster */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase blue">
                <div className="project-header">
                  <div className="project-number">#3</div>
                  <div className="project-meta">
                    <h2 className="project-title">Redesign Poster</h2>
                    <p className="project-subtitle">Event Poster Redesign & Visual Communication</p>
                    <div className="project-stats">
                      <span>11 hours</span> • <span>Nov 4 - Nov 15, 2024</span> • <span>BCIT Course Project</span> • <span>Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                <div className="project-preview">
                  <div className="preview-images-grid">
                    <div className="preview-image">
                      <img src={badImage} alt="Original Poster Design" />
                      <div className="image-label">Original Design</div>
                    </div>
                    <div className="preview-image">
                      <img src={graphicImage} alt="Redesigned Poster" />
                      <div className="image-label">Final Redesign</div>
                    </div>
                  </div>

                  <div className="preview-content">
                    <h3>Project Goal</h3>
                    <p>
                      Redesign an existing poster to improve visual hierarchy, clarity, and theme alignment.
                    </p>

                    <div className="preview-timeline">
                      <div><strong>Start:</strong> Nov 4, 2024</div>
                      <div><strong>End:</strong> Nov 15, 2024</div>
                      <div><strong>Total Hours:</strong> 11</div>
                      <div><strong>Designer:</strong> Emily Rianna Smith</div>
                    </div>

                    <h4>Tools</h4>
                    <div className="tools-preview">
                      <span>Adobe Photoshop</span>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4>Narrative</h4>
                      <p>
                        I redesigned a BCIT poster for a 60s-themed pancake breakfast, transforming a flat design
                        into one that felt warm, inviting, and nostalgic.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Objective</h4>
                      <p>
                        Improve layout, color, and readability while creating stronger emotional engagement.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Design Approach</h4>
                      <p>
                        Used warm tones and typographic contrast to strengthen focus and hierarchy.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Takeaways</h4>
                      <p>
                        Showed me how color psychology and layout decisions significantly improve visual clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Philosophy */}
          <section className="section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                design philosophy
              </h2>
              <p className="journey-text">
                Great design communicates instantly and emotionally. I balance function with beauty, ensuring
                every element holds meaning and purpose.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default GraphicDesign;
