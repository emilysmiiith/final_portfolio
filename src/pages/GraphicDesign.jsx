import React from 'react';
import './GraphicDesign.css';
import '../styles/global.css';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';
// Import all the images at the top like in About.js
import logoboxImage from '../assets/images/logobox.png';
import boxImage from '../assets/images/box.png';
import flatImage from '../assets/images/flat.png';
import badImage from '../assets/images/bad.png';
import graphicImage from '../assets/images/graphic.png';

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
                      <span className="stat-item">Nov 15 - Dec 15, 2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Independent Project</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
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
                    <p className="preview-description">
                      The goal of this project was to create a packaged box design using Adobe Photoshop and Adobe After Effects. The goal was to showcase both graphic and motion design skills through cohesive branding and presentation.
                    </p>
                    
                    <div className="preview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Start Date</span>
                        <span className="timeline-value">Nov 15, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">End Date</span>
                        <span className="timeline-value">Dec 15, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Total Hours</span>
                        <span className="timeline-value">30 hours</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Designer</span>
                        <span className="timeline-value">Emily Rianna Smith</span>
                      </div>
                    </div>

                    <div className="tools-section">
                      <h4 className="tools-title">Technical Tools</h4>
                      <div className="tools-preview">
                        <span className="tool-preview">Adobe Photoshop</span>
                        <span className="tool-preview">Adobe After Effects</span>
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
                      <h4 className="detail-title">Objective</h4>
                      <p className="detail-text">
                        This independent project aimed to demonstrate my ability to create product packaging and translate it into a dynamic visual experience. The design had to represent a fictional brand, reflect product identity, and be suitable for display in both static and animated formats.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Research and Concept</h4>
                      <p className="detail-text">
                        I began by researching coffee machine packaging and branding trends to better understand the visual language of the industry. I then created a fictional company, Serene Sip, intended to convey calm, quality, and modernity. Using this concept, I developed a full branding package including name, logo, colour palette, and supporting content.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Approach</h4>
                      <p className="detail-text">
                        I started with brand development, including naming, logo creation, and color selection. I then designed the box layout and supporting materials like a business card and product artboard. To enhance the visual storytelling, I created a 3D mockup and brought it into After Effects to animate the final presentation. The animation simulates a product reveal, highlighting both the design and the product's branding.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Project Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Nov 15:</strong> Researching coffee machines (4.0 hours)</li>
                        <li><strong>Nov 18:</strong> Choosing name and product (0.5 hours)</li>
                        <li><strong>Nov 20:</strong> Picking color palette (0.5 hours)</li>
                        <li><strong>Nov 23:</strong> Working on logo (6.0 hours)</li>
                        <li><strong>Nov 28:</strong> Business card design (2.0 hours)</li>
                        <li><strong>Dec 2:</strong> Artboard layout and development (10.0 hours)</li>
                        <li><strong>Dec 10:</strong> Creating and refining 3D mockup (7.0 hours)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        This project helped solidify my skills in both Photoshop and After Effects. I gained experience in creating consistent visual branding, understanding the packaging workflow, and transitioning static designs into animated sequences. It emphasized the importance of storytelling and clarity in product-focused design.
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
                      <span className="stat-item">11 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Nov 4 - Nov 15, 2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">BCIT Course Project</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
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
                    <h3 className="preview-title">Project Goal</h3>
                    <p className="preview-description">
                      The goal of this project was to redesign an existing poster to better capture an audience and more effectively communicate its message and purpose.
                    </p>
                    
                    <div className="preview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Start Date</span>
                        <span className="timeline-value">Nov 4, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">End Date</span>
                        <span className="timeline-value">Nov 15, 2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Total Hours</span>
                        <span className="timeline-value">11 hours</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Designer</span>
                        <span className="timeline-value">Emily Rianna Smith</span>
                      </div>
                    </div>

                    <div className="tools-section">
                      <h4 className="tools-title">Technical Tools</h4>
                      <div className="tools-preview">
                        <span className="tool-preview">Adobe Photoshop</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Narrative</h4>
                      <p className="detail-text">
                        For this project, I redesigned a poster found on the BCIT Burnaby campus to better communicate its message and attract its intended audience. The original promoted a pancake breakfast celebrating BCIT's 60th anniversary with a 60s dress-up theme. The redesign was done entirely in Adobe Photoshop.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Objective</h4>
                      <p className="detail-text">
                        Part of the Photoshop course (MDIA-2185-PM – 45799), the assignment challenged us to find a real poster and improve its design to better connect with viewers and reflect its purpose.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Research and Concept</h4>
                      <p className="detail-text">
                        I chose a poster aimed at students and instructors for a pancake breakfast event. While it used BCIT's blue and yellow colors, it lacked warmth and didn't effectively highlight the fun, nostalgic theme. Since the event was also on Halloween, I felt a more playful and visually inviting approach would be more engaging.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Approach</h4>
                      <p className="detail-text">
                        To create a stronger emotional connection, I used warm tones like orange and brown to evoke appetite and tie into Halloween. I simplified the layout, reduced the text, and made "pancakes" the main focus. Emphasizing the 60s theme visually made the poster more fun and eye-catching, encouraging people to read more.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Project Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Nov 4:</strong> Research and poster selection (1 hour)</li>
                        <li><strong>Nov 5:</strong> Brainstorming and concept planning (1 hour)</li>
                        <li><strong>Nov 6:</strong> Sketching layout ideas on iPad (1 hour)</li>
                        <li><strong>Nov 7:</strong> Gathering inspiration and starting Photoshop layout (1 hour)</li>
                        <li><strong>Nov 9:</strong> Design development and refining text layout (2 hours)</li>
                        <li><strong>Nov 11:</strong> Finalizing visuals, adjusting colors and hierarchy (2 hours)</li>
                        <li><strong>Nov 15:</strong> Final polish, tweaks, and export (3 hours)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        As one of my first design projects, this taught me how color, layout, and tone affect audience perception. It helped me understand the value of designing with mood, clarity, and relevance in mind—especially for themed events like this one.
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