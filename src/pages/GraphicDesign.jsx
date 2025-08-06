import React from 'react';
import './GraphicDesign.css';
import '../styles/global.css'; // Add this line to test
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

const GraphicDesign = () => {
  return (
    <>
      <div className="graphic-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Static decorative path"
            className="svg-image-static"
          />
        </div>

        <div className="graphic-content">
          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  visual storytelling
                </h2>
                <h1 className="section-title">graphic design</h1>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Graphic design is where I really get to play and express creativity. Whether it's working on 
                  brand identities, packaging, print, or digital graphics — I love the challenge of telling a 
                  story through visuals. I'm drawn to designs that are clean, thoughtful, and full of personality. 
                  It's such a great feeling when the right visual can really connect with someone.
                </p>
              </div>
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
                      <span className="stat-item">30 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Independent Project</span>
                    </div>
                  </div>
                </div>

                <div className="project-preview">
                  <div className="preview-image">
                    <img src="../assets/images/serene-sip.png" alt="Serene Sip Box Design" />
                    <div className="image-overlay">
                      <div className="tools-preview">
                        <span className="tool-preview">Adobe Photoshop</span>
                        <span className="tool-preview">Adobe After Effects</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="preview-content">
                    <h3 className="preview-title">Project Overview</h3>
                    <p className="preview-description">
                      Create a packaged box design using Adobe Photoshop and Adobe After Effects to showcase both graphic and motion design skills through cohesive branding and presentation.
                    </p>
                    
                    <div className="preview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Start</span>
                        <span className="timeline-value">Nov 15, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">End</span>
                        <span className="timeline-value">Dec 15, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Narrative</h4>
                      <p className="detail-text">
                        For this project, I designed a product box for an original espresso machine by a fictional company called Serene Sip. The project was created in Adobe Photoshop, with an animated component in Adobe After Effects to bring the packaging to life.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Approach</h4>
                      <p className="detail-text">
                        Started with brand development, including naming, logo creation, and color selection. Then designed the box layout and supporting materials like a business card and product artboard. Created a 3D mockup and brought it into After Effects to animate the final presentation.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Key Deliverables</h4>
                      <ul className="deliverables-list">
                        <li>Brand identity & logo design</li>
                        <li>Product packaging design</li>
                        <li>Business card design</li>
                        <li>3D product mockup</li>
                        <li>Animated product reveal</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        This project helped solidify my skills in both Photoshop and After Effects. I gained experience in creating consistent visual branding, understanding the packaging workflow, and transitioning static designs into animated sequences.
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
                    <h2 className="project-title">Poster Redesign</h2>
                    <p className="project-subtitle">Event Poster Redesign & Visual Communication</p>
                    <div className="project-stats">
                      <span className="stat-item">11 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">BCIT Course Project</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                <div className="project-preview">
                  <div className="preview-image">
                    <img src="../assets/images/poster-redesign.png" alt="Poster Redesign" />
                    <div className="image-overlay">
                      <div className="tools-preview">
                        <span className="tool-preview">Adobe Photoshop</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="preview-content">
                    <h3 className="preview-title">Project Goal</h3>
                    <p className="preview-description">
                      To redesign an existing poster in a way that more effectively engages its target audience and clearly communicates the event's purpose.
                    </p>
                    
                    <div className="preview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Start</span>
                        <span className="timeline-value">Nov 4, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">End</span>
                        <span className="timeline-value">Nov 15, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Course</span>
                        <span className="timeline-value">MDIA-2185-PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Project Summary</h4>
                      <p className="detail-text">
                        For this project, I reimagined a poster found on the BCIT Burnaby campus to enhance its message and visual appeal. The original promoted a pancake breakfast celebrating BCIT's 60th anniversary, featuring a 1960s dress-up theme. Using Adobe Photoshop, I redesigned the poster to be more visually inviting and aligned with the event's nostalgic, celebratory spirit.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Research & Concept Development</h4>
                      <p className="detail-text">
                        I selected a poster advertising a pancake breakfast aimed at students and faculty. While the original design used BCIT's official blue and yellow color palette, it lacked emotional warmth and failed to highlight the playful 60s theme. Given that the event also fell on Halloween, I saw an opportunity to introduce a more whimsical, engaging design that reflected the festive atmosphere.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Approach</h4>
                      <p className="detail-text">
                        To create a more inviting and thematic poster, I incorporated warm tones such as orange and brown—colors associated with food and fall festivities. I simplified the layout, reduced cluttered text, and made the pancakes the visual focal point. By weaving in 60s-inspired visuals, I enhanced the nostalgic appeal and made the poster more eye-catching and memorable.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Tasks & Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Nov 4:</strong> Poster research and selection (1 hour)</li>
                        <li><strong>Nov 5:</strong> Concept planning and brainstorming (1 hour)</li>
                        <li><strong>Nov 6:</strong> Sketching layout ideas on iPad (1 hour)</li>
                        <li><strong>Nov 7:</strong> Gathering visual inspiration and beginning Photoshop layout (1 hour)</li>
                        <li><strong>Nov 9:</strong> Developing the design and refining text (2 hours)</li>
                        <li><strong>Nov 11:</strong> Finalizing visuals, adjusting color palette and visual hierarchy (2 hours)</li>
                        <li><strong>Nov 15:</strong> Final polish, minor adjustments, and export (3 hours)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Key Takeaways</h4>
                      <p className="detail-text">
                        As one of my first full design projects, this experience taught me the importance of using color, layout, and tone to influence audience perception. It reinforced the value of designing with mood, clarity, and context in mind—especially for themed or celebratory events.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Objective</h4>
                      <p className="detail-text">
                        Completed as part of the Photoshop course (MDIA-2185-PM – 45799), this assignment involved selecting a real-world poster and improving its design to better capture attention, communicate intent, and resonate with the intended audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  design philosophy
                </h2>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Great graphic design should communicate instantly and emotionally. I believe in finding the 
                  perfect balance between function and beauty, creating visuals that not only catch the eye but 
                  also serve their purpose effectively. Every color, typeface, and element choice is intentional 
                  and serves the greater story we're trying to tell.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraphicDesign;