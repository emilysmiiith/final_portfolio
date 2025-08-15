import React from 'react';
import './UxUiDesign.css';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

const UxUiDesign = () => {
  return (
    <>
      <div className="uxui-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Static decorative path"
            className="svg-image-static"
          />
        </div>

        <div className="uxui-content">
          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  human-centered design
                </h2>
                <h1 className="section-title">ux/ui design</h1>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  UX/UI design is where I get to solve real problems for real people. There's something incredibly 
                  rewarding about taking a complex user journey and making it feel effortless. I love the research 
                  phase — talking to users, understanding their pain points, and then crafting solutions that 
                  actually make their lives easier. Every wireframe, prototype, and interaction is a step toward 
                  creating something that genuinely improves someone's day.
                </p>
              </div>
            </div>
          </section>

          {/* Project 1: Insight Timer */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase blue">
                <div className="project-header">
                  <div className="project-number">#1</div>
                  <div className="project-meta">
                    <h2 className="project-title">Insight Timer Redesign</h2>
                    <p className="project-subtitle">Meditation App UX/UI Enhancement</p>
                    <div className="project-stats">
                      <span className="stat-item">51 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">May 20 - May 29, 2025</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Independent Project</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                {/* Project Goal Section */}
                <div className="project-overview">
                  <div className="overview-content">
                    <h3 className="overview-title">Project Goal</h3>
                    <p className="overview-description">
                      Redesigned the Insight Timer meditation app to simplify navigation, improve search flow, and enhance personalized content delivery for a calmer, more intuitive user experience.
                    </p>
                    
                    <div className="overview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Duration</span>
                        <span className="timeline-value">51 hours</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Timeline</span>
                        <span className="timeline-value">May 20 - 29, 2025</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Tools</span>
                        <span className="timeline-value">Figma, Illustrator</span>
                      </div>
                    </div>

                    <div className="presentation-section">
                      <h4 className="presentation-title">📄 Complete Case Study</h4>
                      <div className="slides-gallery">
                        {Array.from({ length: 31 }, (_, i) => (
                          <div key={i + 1} className="slide-container">
                            <img 
                              src={`../public/slides/insight/slide-${i + 1}.png`} 
                              alt={`Insight Timer Case Study - Slide ${i + 1}`}
                              className="slide-image"
                              loading="lazy"
                            />
                            <div className="slide-number">{i + 1} / 31</div>
                          </div>
                        ))}
                        <div className="pdf-controls">
                          <a href="../assets/slides/insight.pdf" target="_blank" rel="noopener noreferrer" className="pdf-download">
                            Download Complete PDF ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Narrative</h4>
                      <p className="detail-text">
                        For this project, I redesigned the Insight Timer meditation app to improve usability and reduce cognitive overload. The project focused on enhancing the user experience by streamlining navigation, simplifying the search process, and unifying saved content. I used Figma for prototyping and conducted user testing to validate design decisions.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Objective</h4>
                      <p className="detail-text">
                        As part of an independent UX/UI project, my goal was to reimagine the Insight Timer interface with a user-first approach. The main objectives included improving clarity on the home screen, creating a guided search flow, and making it easier for users to access and track content.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Research and Concept</h4>
                      <p className="detail-text">
                        The project began with user surveys, interviews, and a competitive analysis of meditation apps. Key user frustrations included chaotic navigation, excessive categories, and difficulty finding or saving preferred sessions. I developed a persona—Jeremy, a busy professional—and mapped his journey to identify where the app could be more intuitive.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Approach</h4>
                      <p className="detail-text">
                        Using Figma, I created wireframes and iterated from low to high fidelity. The redesigned home screen focuses on setting a daily intention and offering a clear "Get Started" prompt. The search experience was transformed into a 3-step guided flow, breaking down complex filters into manageable choices.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Project Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Week 1 (Mar 11-17):</strong> Research and Problem framing - Define problem, target audience, purpose. Conduct user surveys, interviews, competitive analysis (8 hours)</li>
                        <li><strong>Week 2 (Mar 18-24):</strong> Design Analysis and planning - Highlight issues and inconsistencies (5 hours)</li>
                        <li><strong>Week 3 (Mar 25-31):</strong> UI Design and Interaction - Create low fidelity wireframes, apply design corrections (18 hours)</li>
                        <li><strong>Week 4 (Apr 1-7):</strong> Prototype and Testing - Build high fidelity prototype, refine based on feedback (15 hours)</li>
                        <li><strong>Week 5 (Apr 8-15):</strong> Case Study - Finalize case study documentation (5 hours)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        This project sharpened my UX research and wireframing skills while reinforcing the value of user testing. I learned how to identify and solve pain points through structure and simplicity, and how thoughtful UX can reduce friction in daily use. Ultimately, I walked away with a polished case study that reflects both design thinking and practical UI execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project 2: Pinpal */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase amber">
                <div className="project-header">
                  <div className="project-number">#2</div>
                  <div className="project-meta">
                    <h2 className="project-title">Pinpal Travel App</h2>
                    <p className="project-subtitle">Social Travel Connection Platform</p>
                    <div className="project-stats">
                      <span className="stat-item">23 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Feb 14 - Apr 15, 2025</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">UX/UI Strategy Course</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                {/* Project Goal Section */}
                <div className="project-overview">
                  <div className="overview-content">
                    <h3 className="overview-title">Project Goal</h3>
                    <p className="overview-description">
                      Create an app concept that helps travelers find local events and connect with like-minded people before attending. The goal was to design a tool that makes forming meaningful connections while traveling easier and safer.
                    </p>
                    
                    <div className="overview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Duration</span>
                        <span className="timeline-value">23 hours</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Timeline</span>
                        <span className="timeline-value">Feb 14 - Apr 15, 2025</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Tools</span>
                        <span className="timeline-value">Figma, Illustrator</span>
                      </div>
                    </div>

                    <div className="presentation-section">
                      <h4 className="presentation-title">📄 Complete Case Study</h4>
                      <div className="slides-gallery">
                        {Array.from({ length: 18 }, (_, i) => (
                          <div key={i + 1} className="slide-container">
                            <img 
                              src={`../public/slides/pinpal/slide-${i + 1}.png`} 
                              alt={`Pinpal Case Study - Slide ${i + 1}`}
                              className="slide-image"
                              loading="lazy"
                            />
                            <div className="slide-number">{i + 1} / 18</div>
                          </div>
                        ))}
                        <div className="pdf-controls">
                          <a href="../assets/slides/pinpal.pdf" target="_blank" rel="noopener noreferrer" className="pdf-download">
                            Download Complete PDF ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Narrative</h4>
                      <p className="detail-text">
                        For this project, I created Pinpal, a mobile app that helps travelers find local events and connect with like-minded people before attending. I used Adobe Illustrator for graphics and Figma for wireframes and prototyping. The goal was to design a tool that makes forming meaningful connections while traveling easier and safer.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Brainstorming</h4>
                      <p className="detail-text">
                        The idea came from my own experiences struggling to meet people while traveling abroad. I created a mind map to explore ideas around travel, connection, and community. The concept of helping travelers connect through events stood out, and I knew I wanted the app to focus on safety, authentic interaction, and event discovery.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Concept Development</h4>
                      <p className="detail-text">
                        To validate the idea, I ran user interviews and surveys. The feedback confirmed that many travelers find it hard to make real connections. I defined the problem as: "It's challenging to form meaningful, safe connections while abroad." This led me to focus the app around four main features: trust & safety, personalized event discovery, pre-event interaction, and community-building tools.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Execution</h4>
                      <p className="detail-text">
                        I went with a vibrant, earthy aesthetic to create a warm and welcoming vibe. The UI was designed to be clean and intuitive, with an activity feed, smart filters, and structured messaging to make interaction easy. To build trust, I included features like mutual connections, profile verification, and post-event reviews.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Project Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Feb 14:</strong> Brainstorming - Mapped ideas inspired by personal travel experience (1 hour)</li>
                        <li><strong>Feb 17-18:</strong> Concept Sketches - Sketched layout ideas focused on social travel connection (2 hours)</li>
                        <li><strong>Feb 21-25:</strong> User Research - Ran interviews and surveys to identify user needs and pain points (2 hours)</li>
                        <li><strong>Feb 26-Mar 1:</strong> Problem Statement & Features - Defined problem and focused on trust, events, interaction, and community tools (3 hours)</li>
                        <li><strong>Mar 2-3:</strong> Visual Design Planning - Set design direction: vibrant, earthy aesthetic, simple UI (2 hours)</li>
                        <li><strong>Mar 6-7:</strong> Low-Fidelity Wireframes - Mapped user flow and layout in Figma (1 hour)</li>
                        <li><strong>Mar 8-10:</strong> Mid & High-Fidelity Wireframes - Refined UI and onboarding based on feedback (5 hours)</li>
                        <li><strong>Mar 12:</strong> Logo & Branding - Created logo and finalized visual identity (1 hour)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        This project taught me how to turn a personal insight into a user-centered product. It showed me the importance of research, thoughtful design, and building trust in digital experiences—especially when connecting people in the real world. I learned how to validate concepts through user research and iterate based on feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  design philosophy
                </h2>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Great UX design is invisible — it just works. I believe in starting with empathy, understanding 
                  the user's world before proposing solutions. My process is rooted in research, iteration, and 
                  validation. I love turning complex problems into simple, intuitive experiences that feel natural 
                  and delightful. Every design decision should serve the user's goals while supporting business 
                  objectives.
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

export default UxUiDesign;