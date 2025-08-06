import React from 'react';
import './Projects.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import imageSvg from '../assets/image.svg';

// Project data
const projectsData = [
  {
    id: 1,
    title: "Motion Graphics Reel",
    category: "media",
    shortDescription: "Dynamic video editing and animation showcase",
    image: "../assets/images/video.png",
    additionalImages: ["../assets/images/video.png", "../assets/images/Redesign_Smith2.png", "../assets/images/figma.png", "../assets/images/video.png"]
  },
  {
    id: 2,
    title: "E-Commerce App Design",
    category: "ux-ui", 
    shortDescription: "Complete UX/UI design for mobile shopping app",
    image: "../assets/images/figma.png",
    additionalImages: ["../assets/images/figma.png", "../assets/images/video.png", "../assets/images/Redesign_Smith2.png", "../assets/images/figma.png"]
  },
  {
    id: 3,
    title: "Brand Identity Redesign",
    category: "graphic",
    shortDescription: "Complete brand overhaul and visual identity",
    image: "../assets/images/Redesign_Smith2.png",
    additionalImages: ["../assets/images/Redesign_Smith2.png", "../assets/images/figma.png", "../assets/images/video.png", "../assets/images/Redesign_Smith2.png"]
  }
];

const Projects = () => {
  // Get project by category
  const getProjectByCategory = (category) => {
    return projectsData.find(project => project.category === category);
  };

  return (
    <>
      <div className="projects-container">
        {/* Static SVG */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Static decorative path"
            className="svg-image-static"
          />
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

        <div className="projects-content">
          {/* Intro Section */}
          <section className="section intro-section">
            <div className="section-content">
              <div className="section-header">
                <h2>these are the areas I'm most passionate about and where I'm continuing to grow my skills</h2>
                <h1>what i love to do</h1>
              </div>
              <div className="section-body">
                <p>
                  As I explore the world to new levels I am constantly growing and learning what this beautiful design world has to offer
                </p>
              </div>
            </div>
          </section>

          {/* Media and Editing Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>media and editing</h1>
              </div>
              <div className="section-body">
                <p>
                  I'm fascinated by how sound, motion, and visuals come together to tell a story. Through editing, 
                  whether it's video, animation, or motion graphics, I get to bring ideas to life in ways that feel dynamic and 
                  emotional. It's one of my favorite ways to create something that resonates with an audience on a deeper level.
                </p>
                
                <div className="projects-grid">
                  {(() => {
                    const project = getProjectByCategory('media');
                    return project ? (
                      <div key={project.id} className="project-card">
                        <div className="project-image-container">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="project-image"
                          />
                          <div className="project-images-grid">
                            {project.additionalImages.map((img, index) => (
                              <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="grid-image" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
                
                <div className="check-more-section">
                  <span className="check-more-btn">
                    check out more of my projects →
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* UX/UI Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>ux/ui</h1>
              </div>
              <div className="section-body">
                <p>
                  I love designing with people in mind — creating experiences that feel natural, clear, and welcoming. For me, 
                  good UX/UI is all about empathy: understanding how someone will interact with something and making sure that 
                  experience feels good. I enjoy working on designs that not only look beautiful but also make people's lives a 
                  little easier.
                </p>
                
                <div className="projects-grid">
                  {(() => {
                    const project = getProjectByCategory('ux-ui');
                    return project ? (
                      <div key={project.id} className="project-card">
                        <div className="project-image-container">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="project-image"
                          />
                          <div className="project-images-grid">
                            {project.additionalImages.map((img, index) => (
                              <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="grid-image" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
                
                <div className="check-more-section">
                  <span className="check-more-btn">
                    check out more of my projects →
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Graphic Design Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>graphic design</h1>
              </div>
              <div className="section-body">
                <p>
                  Graphic design is where I really get to play and express creativity. Whether it's working on brand identities, 
                  packaging, print, or digital graphics — I love the challenge of telling a story through visuals. I'm drawn to 
                  designs that are clean, thoughtful, and full of personality. It's such a great feeling when the right visual can 
                  really connect with someone.
                </p>
                
                <div className="projects-grid">
                  {(() => {
                    const project = getProjectByCategory('graphic');
                    return project ? (
                      <div key={project.id} className="project-card">
                        <div className="project-image-container">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="project-image"
                          />
                          <div className="project-images-grid">
                            {project.additionalImages.map((img, index) => (
                              <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="grid-image" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
                
                <div className="check-more-section">
                  <span className="check-more-btn">
                    check out more of my projects →
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* AI Section */}
          <section className="section ai-section">
            <div className="section-content">
              <div className="section-header">
                <h1>working with AI in design</h1>
                <h2>the human touch in an AI world</h2>
              </div>
              <div className="section-body">
                <p>
                  With the world turning toward many AI powered tools there is a lot of fear surrounding what this brings for our generation. I am confident in the power of talking from one human to another to create the most authentic version of what my client is looking for. There are certain emotions and nuances that no robot will be able to understand.
                </p>
              </div>
            </div>
          </section>

          {/* Values and Process Section */}
          <section className="section process-section">
            <div className="section-content">
              <div className="section-header">
                <h1>my approach to every project</h1>
                <h2>values and steps that guide my work</h2>
              </div>
              <div className="section-body">
                <div className="process-content">
                  <div className="process-step">
                    <h1>listen</h1>
                    <p>First I listen to the objective and goal. Understanding my clients values goes a long way for me in knowing how to approach a project.</p>
                  </div>
                  
                  <div className="process-step">
                    <h1>pre planning</h1>
                    <p>Next is pre planning, creating a mock up or storyboard to get the first idea down.</p>
                  </div>
                  
                  <div className="process-step">
                    <h1>review and prep</h1>
                    <p>Then comes review and prep planning to refine the concept and ensure we're on the right track.</p>
                  </div>
                  
                  <div className="process-step">
                    <h1>final execution</h1>
                    <p>Finally, the execution phase where everything comes together. Although this varies on the project, it's important for me to make sure my work stands on a secure foundation of understanding.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why These Disciplines Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h2>why these disciplines?</h2>
              </div>
              <div className="section-body">
                <p>
                  At the heart of everything I do is a desire to make work that connects — whether that's through a beautifully 
                  crafted brand, an intuitive interface, or an engaging piece of media. I'm always learning, always staying 
                  curious, and I believe that great design should feel human, warm, and thoughtful. These are the areas where I 
                  feel most at home creatively — and I'm so excited to keep growing in them.
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

export default Projects;