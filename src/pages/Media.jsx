import React, { useState } from 'react';
import './Media.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

const Media = () => {
  const climbingPhotos = [
    {
      id: 1,
      src: "/assets/images/squamish/photo-1.jpg",
      alt: "Rock climber ascending granite wall in Squamish, British Columbia",
      title: "Granite Ascent",
      description: "A climber navigating the challenging granite faces of Squamish's world-renowned climbing routes",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Adventure Photography",
      equipment: "Canon T7, 50mm lens"
    },
    {
      id: 2,
      src: "/assets/images/squamish/photo-2.jpg",
      alt: "Panoramic view of Squamish climbing area with mountain backdrop",
      title: "Squamish Vista",
      description: "Breathtaking panoramic view showcasing the natural grandeur of Squamish's climbing landscape",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Landscape Photography",
      equipment: "Canon T7, wide-angle lens"
    },
    {
      id: 3,
      src: "/assets/images/squamish/photo-3.jpg",
      alt: "Close-up detail of climber's hands gripping rock holds",
      title: "Precision Grip",
      description: "Detailed capture of the technical precision required in rock climbing, focusing on grip technique",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Macro Photography",
      equipment: "Canon T7, 85mm lens"
    },
    {
      id: 4,
      src: "/assets/images/squamish/photo-4.jpg",
      alt: "Silhouette of climber against dramatic sky during golden hour",
      title: "Golden Hour Ascent",
      description: "Dramatic silhouette photography capturing the intersection of human determination and natural beauty",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Silhouette Photography",
      equipment: "Canon T7, 35mm lens"
    },
    {
      id: 5,
      src: "/assets/images/squamish/photo-5.jpg",
      alt: "Wide shot of climbing route with safety equipment and rope systems",
      title: "Safety Systems",
      description: "Documentation of climbing safety equipment and rope systems used in multi-pitch climbing",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Documentary Photography",
      equipment: "Canon T7, 24-70mm lens"
    },
    {
      id: 6,
      src: "/assets/images/squamish/photo-6.jpg",
      alt: "Climber celebrating successful completion of challenging route",
      title: "Summit Success",
      description: "Capturing the joy and accomplishment of completing a challenging climbing route in Squamish",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Portrait Photography",
      equipment: "Canon T7, 50mm lens"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % climbingPhotos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + climbingPhotos.length) % climbingPhotos.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <>
      {/* ✅ Global Navbar */}
      <ProjectNavbar />

      <div className="media-container">
        {/* Decorative Background */}
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
                Media production is where I combine technical skills with meaningful storytelling. I believe in creating content that doesn’t just look good, but connects deeply with people and drives change. Every story begins with empathy and curiosity.
              </p>
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
                      <span>Short Film</span> • <span>2024</span> • <span>Client Collaboration</span> • <span>Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                <div className="video-showcase">
                  <video 
                    className="featured-video"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    title="Dementia Care PSA - First-Person Perspective"
                  >
                    <source src="/assets/videos/final_1_1.mp4" type="video/mp4" />
                    <track kind="captions" src="/assets/videos/final_1_1_captions.vtt" srcLang="en" label="English" default />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="project-overview">
                  <h3 className="overview-title">Project Overview</h3>
                  <p>
                    Created in collaboration with Denise Devlin — a nurse and my mom — this PSA aims to raise awareness about empathy in dementia care through a first-person perspective narrative. The goal was to evoke understanding and compassion through immersive storytelling.
                  </p>
                  <div className="overview-timeline">
                    <div><strong>Type:</strong> Short Film / PSA</div>
                    <div><strong>Year:</strong> 2024</div>
                    <div><strong>Client:</strong> Denise Devlin</div>
                    <div><strong>Role:</strong> Director, Editor, Producer</div>
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
                  </div>
                </div>

                <div className="carousel-container">
                  <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {climbingPhotos.map((photo) => (
                      <div key={photo.id} className="carousel-slide">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          title={photo.title}
                          className="carousel-image"
                          loading={photo.id === 1 ? "eager" : "lazy"}
                        />
                        <div className="image-overlay">
                          <div className="image-info">
                            <span>{photo.title}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={prevSlide}>‹</button>
                    <div className="carousel-indicators">
                      {climbingPhotos.map((_, index) => (
                        <span
                          key={index}
                          className={`indicator ${index === currentSlide ? 'active' : ''}`}
                          onClick={() => goToSlide(index)}
                        ></span>
                      ))}
                    </div>
                    <button className="carousel-btn next-btn" onClick={nextSlide}>›</button>
                  </div>
                </div>

                <div className="photography-description">
                  <p>
                    Capturing the raw beauty and adrenaline of climbing in Squamish, BC — documenting the connection between human perseverance and nature’s scale through light, motion, and emotion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                creative philosophy
              </h2>
              <p className="journey-text">
                Whether I’m directing, designing, or editing, my work starts with empathy and curiosity. Every project is a collaboration that brings human stories to life with care, creativity, and connection.
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

export default Media;
