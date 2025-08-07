import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import imageSvg from '../assets/image.svg';
import meImage from '../assets/images/me.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';

const About = () => {
  return (
    <>
      <div className="about-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Static decorative path"
            className="svg-image-static"
          />
        </div>

        {/* Background effects */}
        <div className="background-effects">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="gradient-orb orb-4"></div>
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
              <div className="hero-grid">
                <div className="hero-text">
                  <h1>about emily</h1>
                  <h2>creative designer & visual storyteller</h2>
                  <p>
                    It's the ability to lead with empathy, stay grounded in authenticity, and collaborate with others that fuels my passion for this work.
                  </p>
                </div>
                <div className="hero-image">
                  <div className="image-container main-portrait">
                    <img 
                      src={meImage} 
                      alt="Emily Rianna" 
                      className="portrait-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Story Section */}
          <section className="section story-section">
            <div className="section-content">
              <div className="section-header">
                <h1>my story</h1>
                <h2>the journey that shaped my creative vision</h2>
              </div>
              
              <div className="section-body">
                <div className="story-grid">
                  <div className="story-text">
                    <p>
                      My journey began when I moved to the West Coast at just six years old—a shift that forever changed my perspective. Leaving Ontario behind meant saying goodbye to familiar faces and places, but it also opened the door to a world of new emotions, experiences, and ways of seeing.
                    </p>
                    <p>
                      I grew up on a small island just off the coast of Vancouver, surrounded by nature and a close-knit community. In the past year, I made the leap to the mainland to further my education and expand my technical skill set at the British Columbia Institute of Technology.
                    </p>
                    <p>
                      At 18, I took a solo backpacking trip through Europe—a pivotal experience that sparked my passion for deeper human connection. Since then, my journey as a creative designer has taken me across the world, where I've learned to infuse emotion and empathy into everything I create.
                    </p>
                  </div>
                  <div className="story-images"> 
                    <div className="image-grid">
                      <img src={littleMeImage} alt="Emily as a child" className="story-image" />
                      <img src={travelImage} alt="Emily traveling" className="story-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

                  {/* My Values Section */}
          <section className="section values-section">
            <div className="section-content">
              <div className="section-header">
                <h1>my values</h1>
                <h2>the principles that guide my creative work</h2>
              </div>
              
              <div className="section-body">
                <div className="values-content">
                  <p>
                    I lead every project with empathy, staying curious, and authenticity. These values shape the way I listen, collaborate, and create. I believe design is most powerful when it reflects real human experiences—when it's honest, emotionally aware, and connected to a sense of curiosity and purpose.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* My Process Section */}
          <section className="section process-section">
            <div className="section-content">
              <div className="section-header">
                <h1>my process</h1>
                <h2>how I approach every project</h2>
              </div>
              
              <div className="section-body">
                <div className="process-content">
                  <p>
                    My process always starts with listening. I take time to understand the goals, values, and vision of the people I'm working with. That insight becomes the foundation for everything that follows. From there, I explore, experiment, and build with intention—balancing creative freedom with clear communication and collaboration.
                  </p>
                  <p>
                    I stay open, adaptable, and focused on creating work that not only looks great but also resonates and inspires.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* My Skills Section */}
          <section className="section skills-section">
            <div className="section-content">
              <div className="section-header">
                <h1>my skills</h1>
                <h2>tools and strengths that bring ideas to life</h2>
              </div>
              
              <div className="section-body">
                <div className="skills-content">
                  <div className="skills-grid">
                    <div className="skills-column">
                      <h1>creative tools</h1>
                      <p>After Effects</p>
                      <p>Photoshop</p>
                      <p>Illustrator</p>
                      <p>Premiere Pro</p>
                    </div>
                    <div className="skills-column">
                      <h1>core strengths</h1>
                      <p>Communication & collaboration</p>
                      <p>Passion for meaningful work</p>
                      <p>Creative problem solving</p>
                      <p>Innovation & adaptability</p>
                    </div>
                  </div>
                  <p>
                    I'm also grateful to be recognized as easy to work with, with endorsements from peers like Lily, Qui, Dat, and Yuhan, who've experienced my dedication and teamwork firsthand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Looking Forward Section */}
          <section className="section forward-section">
            <div className="section-content">
              <div className="section-header">
                <h1>looking forward</h1>
                <h2>where my journey takes me next</h2>
              </div>
              
              <div className="section-body">
                <div className="forward-content">
                  <p>
                    With my experience and adventurous, driven spirit, I'm excited by the opportunity to work in an environment where community is valued, freedom is embraced, travel is encouraged, and creativity never stops flowing.
                  </p>
                  <p>
                    I believe I have a lot to offer—feel free to explore my portfolio and see my work in action.
                  </p>
                  <div className="cta-buttons">
                    <a href="../assets/resume.pdf" className="cta-button primary" download>
                      download resume
                    </a>
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

export default About;