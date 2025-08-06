import React from 'react';
import './Media.css';
import Footer from '../components/Footer';

// Media projects data
const mediaProjects = [
  {
    id: 1,
    title: "Motion Graphics Reel",
    shortDescription: "Dynamic video editing and animation showcase",
    image: "/images/video.png",
    fullDescription: "A comprehensive reel showcasing motion graphics, video editing, and animation work across various projects.",
    tools: ["After Effects", "Premiere Pro", "Cinema 4D"],
    year: "2023",
    client: "Personal Project"
  },
  {
    id: 2,
    title: "Animated Explainer Video",
    shortDescription: "Educational animation and storytelling",
    image: "/images/Redesign_Smith2.png",
    fullDescription: "Animated explainer video combining storytelling, motion graphics, and sound design to communicate complex concepts simply.",
    tools: ["After Effects", "Illustrator", "Audition"],
    year: "2024",
    client: "Educational Platform"
  },
  {
    id: 3,
    title: "Documentary Short Film",
    shortDescription: "Cinematic storytelling and post-production",
    image: "/images/video.png",
    fullDescription: "Complete post-production workflow for a documentary short film including color grading, sound design, and final edit.",
    tools: ["Premiere Pro", "DaVinci Resolve", "Audition"],
    year: "2023",
    client: "Independent Filmmaker"
  },
  {
    id: 4,
    title: "Social Media Content Series",
    shortDescription: "Multi-platform video content creation",
    image: "/images/Redesign_Smith2.png",
    fullDescription: "Created a series of engaging video content for social media platforms, optimized for different formats and audiences.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    year: "2024",
    client: "Social Media Agency"
  },
  {
    id: 5,
    title: "Brand Animation Package",
    shortDescription: "Cohesive animated brand elements",
    image: "/images/figma.png",
    fullDescription: "Complete animated brand package including logo animations, transitions, and promotional video content.",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    year: "2024",
    client: "Startup Company"
  },
  {
    id: 6,
    title: "Music Video Edit",
    shortDescription: "Creative editing and color grading",
    image: "/images/video.png",
    fullDescription: "Music video post-production featuring creative editing techniques, color grading, and visual effects synchronization.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    year: "2023",
    client: "Independent Artist"
  }
];

const Media = () => {
  return (
    <>
      <div className="media-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src="/image.svg" 
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
                  where stories come to life
                </h2>
                <h1 className="section-title">media & editing</h1>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  I'm fascinated by how sound, motion, and visuals come together to tell a story. Through editing,
                  whether it's video, animation, or motion graphics, I get to bring ideas to life in ways that feel 
                  dynamic and emotional. It's one of my favorite ways to create something that resonates with an 
                  audience on a deeper level.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid Section */}
          <section className="section projects-section">
            <div className="section-content-wide">
              <div className="projects-grid">
                {mediaProjects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-image-container">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="project-info">
                          <span className="project-year">{project.year}</span>
                          <span className="project-client">{project.client}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.shortDescription}</p>
                      
                      <div className="project-tools">
                        {project.tools.map((tool, index) => (
                          <span key={index} className="tool-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  my approach
                </h2>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Every project starts with understanding the story we want to tell. I focus on creating 
                  seamless narratives that engage viewers from the first frame to the last, using a 
                  combination of technical expertise and creative vision to deliver impactful media experiences.
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