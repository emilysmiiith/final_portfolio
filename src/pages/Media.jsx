import React from 'react';
import './Media.css';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

const Media = () => {
  return (
    <>
      <div className="media-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Static decorative path"
            className="svg-image-static"
          />
        </div>

        <div className="media-content">
          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  visual storytelling
                </h2>
                <h1 className="section-title">media & film</h1>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Media production is where I combine technical skills with meaningful storytelling. I believe in 
                  creating content that doesn't just look good, but genuinely connects with people and drives change. 
                  Whether it's a documentary-style piece or branded content, every project starts with understanding 
                  the human story we're trying to tell.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Video Project */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase featured">
                <div className="project-header">
                  <div className="project-number">#1</div>
                  <div className="project-meta">
                    <h2 className="project-title">Dementia Care Short Film</h2>
                    <p className="project-subtitle">PSA • First-Person Perspective Experience</p>
                    <div className="project-stats">
                      <span className="stat-item">Short Film</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Client Collaboration</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                <div className="video-showcase">
                  <div className="video-container">
                    <video 
                      className="featured-video"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/assets/videos/final_1_1.mp4" type="video/mp4" />
                      <source src="/assets/videos/final_1_1.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay">
                      <div className="video-info">
                        <span className="video-label">Dementia Care PSA</span>
                        <span className="video-description">First-person perspective experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-overview">
                  <div className="overview-content">
                    <h3 className="overview-title">Project Overview</h3>
                    <p className="overview-description">
                      This project was created in collaboration with my client, Denise Devlin, a nurse passionate about 
                      changing the way dementia patients are treated in care homes. Denise is also my mom, which made this 
                      project especially meaningful. The goal was to create a short film that raises awareness about the 
                      importance of empathy in dementia care through a first-person perspective experience.
                    </p>
                    
                    <div className="overview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Type</span>
                        <span className="timeline-value">Short Film / PSA</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Year</span>
                        <span className="timeline-value">2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Client</span>
                        <span className="timeline-value">Denise Devlin</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Role</span>
                        <span className="timeline-value">Director, Editor, Producer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Objectives</h4>
                      <ul className="objectives-list">
                        <li>Communicate the importance of <strong>positive approaches to care</strong></li>
                        <li>Create an <strong>immersive, emotional experience</strong> rather than a traditional educational video</li>
                        <li>Ensure the representation of dementia was <strong>respectful, accurate, and impactful</strong></li>
                        <li>Deliver a final piece that my client could share in both personal and professional contexts</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Research & Discovery</h4>
                      <p className="detail-text">
                        To create something authentic, I first spent time understanding my client's core values and message, 
                        common experiences and hallucinations associated with dementia, and techniques used in positive care 
                        approaches. This research helped me design a film that avoided stereotypes or exaggerations, focusing 
                        instead on authenticity and sensitivity.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Concept Development</h4>
                      <p className="detail-text">
                        From the research, I developed the concept of filming entirely in POV (point of view), putting the 
                        audience in the shoes of a dementia patient. The final scene shifts to the patient's daughter, 
                        emphasizing that dementia doesn't just affect the individual — it impacts families.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Production Approach</h4>
                      <ul className="approach-list">
                        <li><strong>Filming style:</strong> Handheld, natural, immersive POV perspective</li>
                        <li><strong>Lighting choices:</strong> Soft and shifting, to convey disorientation</li>
                        <li><strong>Sound design:</strong> Layered audio with subtle effects to reflect altered perception</li>
                        <li><strong>Equipment:</strong> Canon T7 camera, body mic, soft lighting setup</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Post-Production</h4>
                      <p className="detail-text">
                        All editing and audio were completed by me using Adobe After Effects for color grading, transitions, 
                        and visual effects to simulate disorientation and hallucinations, and Adobe Audition for audio cleanup, 
                        ambient sound layering, and subtle effects to guide the viewer's experience.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Results & Impact</h4>
                      <p className="detail-text">
                        The finished short film truly represented my client's mission and values, creating an impactful piece 
                        that communicates the importance of empathy in dementia care. This project showcases my complete process 
                        from research and planning through to production and editing, demonstrating how I approach client work 
                        with empathy, curiosity, and creativity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Photography Section */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase photography">
                <div className="project-header">
                  <div className="project-number">#2</div>
                  <div className="project-meta">
                    <h2 className="project-title">Squamish Climbing Photography</h2>
                    <p className="project-subtitle">Adventure Photography • Personal Project</p>
                    <div className="project-stats">
                      <span className="stat-item">Photography</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Squamish, BC</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Personal Project</span>
                    </div>
                  </div>
                </div>

                <div className="photography-showcase">
                  <div className="photography-intro">
                    <h3 className="photography-title">Adventure Through the Lens</h3>
                    <p className="photography-description">
                      Capturing the raw beauty and adrenaline of rock climbing in Squamish, British Columbia. 
                      This collection showcases the intersection of human determination and natural grandeur, 
                      documenting both the technical precision of climbing and the breathtaking landscapes 
                      that make Squamish a world-renowned climbing destination.
                    </p>
                  </div>

                  <div className="carousel-container">
                    <div className="carousel-track" id="carousel-track">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div key={i + 1} className="carousel-slide">
                          <img 
                            src={`/public/assets/images/squamish/photo-${i + 1}.jpg`}
                            alt={`Squamish Climbing Photography ${i + 1}`}
                            className="carousel-image"
                            loading="lazy"
                          />
                          <div className="image-overlay">
                            <div className="image-info">
                              <span className="image-number">{i + 1}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="carousel-controls">
                      <button 
                        className="carousel-btn prev-btn" 
                        aria-label="Previous image"
                        onClick={() => {
                          const track = document.getElementById('carousel-track');
                          track.scrollBy({ left: -370, behavior: 'smooth' });
                        }}
                      >
                        ‹
                      </button>
                      <div className="carousel-indicators">
                        {Array.from({ length: 6 }, (_, i) => (
                          <span 
                            key={i} 
                            className={`indicator ${i === 0 ? 'active' : ''}`}
                            onClick={() => {
                              const track = document.getElementById('carousel-track');
                              track.scrollTo({ left: i * 370, behavior: 'smooth' });
                            }}
                          ></span>
                        ))}
                      </div>
                      <button 
                        className="carousel-btn next-btn" 
                        aria-label="Next image"
                        onClick={() => {
                          const track = document.getElementById('carousel-track');
                          track.scrollBy({ left: 370, behavior: 'smooth' });
                        }}
                      >
                        ›
                      </button>
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
                  creative philosophy
                </h2>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Whether I'm working in media, UX/UI, or graphic design, I bring the same values to the table: 
                  collaboration, empathy, and a commitment to creating work that connects with people. Every project 
                  starts with listening carefully to understand goals, researching deeply to create authentic results, 
                  and designing thoughtfully with purpose and meaning.
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

export default Media;