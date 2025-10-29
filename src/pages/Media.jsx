import React from 'react';
import './Media.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

// ✅ Correctly import your video from src
import dementiaVideo from '../assets/videos/Smith_ProjectB.mp4';

const Media = () => {
  const climbingPhotos = [
    { id: 1, src: "/assets/images/squamish/photo-1.jpg", alt: "Rock climber ascending granite wall", title: "Granite Ascent" },
    { id: 2, src: "/assets/images/squamish/photo-2.jpg", alt: "Panoramic view of Squamish climbing area", title: "Squamish Vista" },
    { id: 3, src: "/assets/images/squamish/photo-3.jpg", alt: "Climber's hands gripping rock holds", title: "Precision Grip" },
    { id: 4, src: "/assets/images/squamish/photo-4.jpg", alt: "Silhouette of climber against sky", title: "Golden Hour Ascent" },
    { id: 5, src: "/assets/images/squamish/photo-5.jpg", alt: "Climbing route with rope systems", title: "Safety Systems" },
    { id: 6, src: "/assets/images/squamish/photo-6.jpg", alt: "Climber celebrating at summit", title: "Summit Success" }
  ];

  return (
    <>
      {/* Navbar */}
      <ProjectNavbar />

      <div className="media-container">
        {/* Decorative SVG Background */}
        <div className="svg-static">
          <img src={imageSvg} alt="" className="svg-image-static" aria-hidden="true" />
        </div>

        <div className="media-content">
          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                visual storytelling
              </h2>
              <h1 className="section-title">media & film</h1>
              <p className="journey-text">
                Media production is where I combine technical skills with meaningful storytelling. 
                Every story begins with empathy and curiosity.
              </p>
            </div>
          </section>

          {/* 🎥 Video Section */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase featured">
                <div className="project-header">
                  <div className="project-number">#1</div>
                  <div className="project-meta">
                    <h2 className="project-title">Dementia Care Short Film</h2>
                    <p className="project-subtitle">PSA • First-Person Perspective Experience</p>
                  </div>
                </div>

                {/* ✅ Fixed: Using imported video */}
                <div className="video-showcase">
                  <video
                    className="featured-video"
                    controls
                    playsInline
                    muted
                    title="Dementia Care Short Film by Emily Rianna Smith"
                  >
                    <source src={dementiaVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="project-overview">
                  <h3 className="overview-title">Project Overview</h3>
                  <p>
                    Created in collaboration with Denise Devlin — this PSA raises awareness about empathy in dementia care 
                    through a first-person narrative. The goal was to evoke understanding and compassion through immersive storytelling.
                  </p>
                  <div className="overview-timeline">
                    <div><strong>Type:</strong> Short Film / PSA</div>
                    <div><strong>Year:</strong> 2024</div>
                    <div><strong>Role:</strong> Director, Editor, Producer</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 🧗 Photography Grid Section */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase photography">
                <div className="project-header">
                  <div className="project-number">#2</div>
                  <div className="project-meta">
                    <h2 className="project-title">Squamish Climbing Photography</h2>
                    <p className="project-subtitle">Adventure Photography • Personal Project</p>
                  </div>
                </div>

                <div className="photo-grid">
                  {climbingPhotos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                      <img src={photo.src} alt={photo.alt} title={photo.title} />
                      <div className="photo-caption">{photo.title}</div>
                    </div>
                  ))}
                </div>

                <div className="photography-description">
                  <p>
                    Capturing the raw beauty and adrenaline of climbing in Squamish, BC — documenting the 
                    connection between human perseverance and nature’s scale through light, motion, and emotion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ✨ Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                creative philosophy
              </h2>
              <p className="journey-text">
                Whether I’m directing, designing, or editing, my work starts with empathy and curiosity. 
                Every project is a collaboration that brings human stories to life with care and creativity.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Media;
