import React from 'react';
import './GraphicDesign.css';
import '../styles/global.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

import logoboxImage from '../assets/images/logobox.png';
import boxImage from '../assets/images/box.png';
import flatImage from '../assets/images/flat.png';
import badImage from '../assets/images/bad.png';
import graphicImage from '../assets/images/graphic.png';

const GraphicDesign = () => {
  return (
    <>
      {/* ✅ Global Navbar */}
      <ProjectNavbar />

      <div className="graphic-container">
        {/* Decorative Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt=""
            className="svg-image-static"
            aria-hidden="true"
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
                      <div><strong>Start Date:</strong> Nov 15, 2024</div>
                      <div><strong>End Date:</strong> Dec 15, 2024</div>
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
                        modern design and visual appeal suitable for both print and digital display.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Research & Concept</h4>
                      <p>
                        I researched coffee packaging trends, created a brand identity, and developed a color palette and
                        logo system that evoke serenity and quality. From there, I created a full layout and motion piece
                        simulating a 3D product reveal.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Design Approach</h4>
                      <p>
                        I combined cohesive branding with minimal design and clean typography. The animation emphasized
                        motion and depth, focusing on how visual design enhances perception and emotional engagement.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Project Timeline</h4>
                      <ul>
                        <li><strong>Nov 15:</strong> Research (4h)</li>
                        <li><strong>Nov 18:</strong> Name + concept (0.5h)</li>
                        <li><strong>Nov 23:</strong> Logo design (6h)</li>
                        <li><strong>Nov 28:</strong> Business card (2h)</li>
                        <li><strong>Dec 2:</strong> Layout (10h)</li>
                        <li><strong>Dec 10:</strong> 3D mockup + animation (7h)</li>
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>Takeaways</h4>
                      <p>
                        This project solidified my understanding of brand systems and packaging workflows.
                        I learned how motion can elevate static design, helping to tell a product’s story through immersive visuals.
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
                      Redesign an existing poster to better attract its intended audience and communicate the event message more effectively.
                    </p>

                    <div className="preview-timeline">
                      <div><strong>Start:</strong> Nov 4, 2024</div>
                      <div><strong>End:</strong> Nov 15, 2024</div>
                      <div><strong>Total Hours:</strong> 11</div>
                      <div><strong>Designer:</strong> Emily Rianna Smith</div>
                    </div>

                    <div className="tools-section">
                      <h4>Technical Tools</h4>
                      <div className="tools-preview">
                        <span>Adobe Photoshop</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4>Narrative</h4>
                      <p>
                        I redesigned a BCIT poster for a 60s-themed pancake breakfast, transforming a flat design into one
                        that captured warmth, fun, and nostalgia while keeping it clear and visually balanced.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Objective</h4>
                      <p>
                        Improve hierarchy, color, and tone to better engage the audience and align with the event’s 60s theme and Halloween date.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Design Approach</h4>
                      <p>
                        Used warm tones (orange, brown) to evoke appetite and Halloween spirit. Simplified layout and emphasized “pancakes” as the focal point, using typography and contrast to enhance readability.
                      </p>
                    </div>

                    <div className="detail-section">
                      <h4>Takeaways</h4>
                      <p>
                        This early project taught me how layout, tone, and color psychology affect audience engagement.
                        It also reinforced the importance of designing for clarity and emotional connection.
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
                Great graphic design communicates instantly and emotionally. I believe in balancing function with beauty —
                every color, typeface, and element choice serves a purpose in telling a cohesive, human story.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* ✅ Global Footer */}
      <Footer />
    </>
  );
};

export default GraphicDesign;
