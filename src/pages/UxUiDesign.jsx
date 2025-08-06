import React from 'react';
import './GraphicDesign.css';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

// Graphic Design projects data
const graphicDesignProjects = [
  {
    id: 9,
    title: "Brand Identity Redesign",
    shortDescription: "Complete brand overhaul and visual identity",
    image: "../assets/images/Redesign_Smith2.png",
    fullDescription: "Comprehensive brand identity redesign including logo, color palette, typography, and brand guidelines for a growing business.",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    year: "2023",
    client: "Local Business"
  },
  {
    id: 10,
    title: "Digital Marketing Campaign",
    shortDescription: "Social media and digital advertising design",
    image: "../assets/images/video.png",
    fullDescription: "Complete digital marketing campaign including social media graphics, web banners, and promotional materials.",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    year: "2023",
    client: "Marketing Agency"
  },
  {
    id: 13,
    title: "Packaging Design Series",
    shortDescription: "Product packaging and label design",
    image: "../assets/images/Redesign_Smith2.png",
    fullDescription: "Creative packaging design for a line of organic products, focusing on sustainability messaging and shelf appeal.",
    tools: ["Illustrator", "Photoshop", "Dimension"],
    year: "2024",
    client: "Organic Foods Brand"
  },
  {
    id: 14,
    title: "Event Poster Collection",
    shortDescription: "Typography-focused promotional materials",
    image: "../assets/images/figma.png",
    fullDescription: "Series of event posters combining bold typography, vibrant colors, and creative layouts for music festivals.",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    year: "2023",
    client: "Event Management"
  },
  {
    id: 15,
    title: "Magazine Layout Design",
    shortDescription: "Editorial design and typography",
    image: "../assets/images/Redesign_Smith2.png",
    fullDescription: "Complete magazine layout design including typography hierarchy, grid systems, and visual storytelling elements.",
    tools: ["InDesign", "Photoshop", "Illustrator"],
    year: "2024",
    client: "Lifestyle Magazine"
  },
  {
    id: 16,
    title: "Logo Design Portfolio",
    shortDescription: "Brand mark and identity creation",
    image: "../assets/images/figma.png",
    fullDescription: "Collection of logo designs across various industries, focusing on memorable and scalable brand marks.",
    tools: ["Illustrator", "Photoshop", "Sketch"],
    year: "2023-2024",
    client: "Various Clients"
  }
];

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

          {/* Projects Grid Section */}
          <section className="section projects-section">
            <div className="section-content-wide">
              <div className="projects-grid">
                {graphicDesignProjects.map(project => (
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
                  also serve their purpose effectively. Every color, typeface, and element choice is intentional.
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