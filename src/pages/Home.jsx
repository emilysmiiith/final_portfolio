import React, { useEffect, useRef } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';

const Home = () => {
  const svgRef = useRef();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (svgRef.current) {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const maxScroll = windowHeight * 0.8;
            const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
            
            const clipHeight = progress * 100;
            svgRef.current.style.clipPath = `inset(0 0 ${100 - clipHeight}% 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial state
    if (svgRef.current) {
      svgRef.current.style.clipPath = `inset(0 0 85% 0)`;
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToProjects = () => {
    window.location.href = '/projects';
  };

  return (
    <>
      <div className="home-container">
        {/* Animated SVG */}
        <div ref={svgRef} className="svg-scroll">
          <img 
            src="../assets/image.svg" 
            alt="Animated scroll path"
            className="svg-image"
          />
        </div>

        {/* Background effects */}
        <div className="background-effects">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:emily.smiiith@gmail.com" className="social-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Main content */}
        <main className="main-content">
          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <div className="hero-text">
                <h1>hi!</h1>
                <p>i'm emily rianna smith</p>
                <h2>i am a creative designer who enjoys bringing emotions to life through art</h2>
                <p>scroll to explore!</p>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section className="section work-section">
            <div className="section-content">
              <div className="section-header">
                <h1>nice to meet you</h1>
              </div>

                <div className="video-container">
                  <div className="video-placeholder">
                    <div className="play-button">
                      <span className="play-icon">▶</span>
                    </div>
                    <div className="video-overlay">
                      <p>Emily talking about her work</p>
                    </div>
                  </div>
                </div>
              </div>
 
          </section>

          {/* Features Section */}
          <section className="section features-section">
            <div className="section-content">
              <div className="section-header">
                <h1>features</h1>
                <h2>showcasing my latest projects</h2>
              </div>
              
              <div className="section-body">
                <div className="projects-grid">
                  {[
                    { image: '../assets/images/video.png', title: 'Project One', category: 'Video Design' },
                    { image: '../assets/images/figma.png', title: 'Project Two', category: 'UI/UX Design' },
                    { image: '../assets/images/Redesign_Smith2.png', title: 'Project Three', category: 'Brand Design' }
                  ].map((project, index) => (
                    <div key={index} className="project-card" onClick={navigateToProjects}>
                      <div className="project-image-container">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-image"
                        />
                        <div className="project-overlay">
                          <span className="project-category">{project.category}</span>
                          <h1>{project.title}</h1>
                          <p>View Project →</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section about-section">
            <div className="section-content">
              <div className="section-header">
                <h1>a bit about me</h1>
                <h2>exploring the world taught me how to design with heart</h2>
              </div>
              
              <div className="section-body">
                <div className="about-grid">
                  <div className="about-text">
                    <p>
                     leading with empathy, authenticity and collaboration are reasons why i love doing what i do. 
                    </p>
                  </div>
                  <div className="about-images">
                    {['../assets/images/me.png', '../assets/images/me2.png', '../assets/images/me3.png'].map((image, index) => (
                      <div key={index} className="image-container">
                        <img 
                          src={image} 
                          alt={`Emily ${index + 1}`} 
                          className="about-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;