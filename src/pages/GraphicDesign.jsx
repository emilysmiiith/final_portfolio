import React, { useEffect, useState } from 'react';
import './GraphicDesign.css';
import '../styles/global.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/ProjectFooter';

import logoboxImage from '../assets/images/logobox.png';
import boxImage from '../assets/images/box.png';
import flatImage from '../assets/images/flat.png';
import badImage from '../assets/images/bad.png';
import graphicImage from '../assets/images/graphic.png';

const GraphicDesign = () => {
  const [activeProject, setActiveProject] = useState(null);

  // ============================
  // PAGE-SPECIFIC SEO METADATA
  // ============================
  useEffect(() => {
    const title = "Graphic Design – Emily Rianna Smith | Brand, Print & Packaging";
    const desc = "Explore the graphic design work of Emily Rianna Smith — packaging design, brand identity, print graphics, motion-enhanced visuals, and thoughtful visual storytelling.";
    const image = "https://www.yourwebsite.com/og/og-graphic-design.jpg";

    document.title = title;

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", desc);

    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", desc);

    let ogImage = document.querySelector("meta[property='og:image']");
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", image);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const projects = [
    {
      id: 1,
      title: "Serene Sip",
      subtitle: "Box & Brand Design",
      thumbnail: boxImage,
      images: [
        { src: logoboxImage, label: "Logo Design" },
        { src: boxImage, label: "Box Design" },
        { src: flatImage, label: "Flat Design" }
      ],
      description: "For this project, I designed packaging for a fictional espresso machine brand called Serene Sip. Created in Adobe Photoshop with animation in After Effects, the goal was to bring the design to life while maintaining brand consistency and visual storytelling.",
      goal: "Create a packaged box design using Adobe Photoshop and Adobe After Effects, showcasing both graphic and motion design skills through cohesive branding and presentation.",
      details: {
        type: "Packaging & Motion",
        year: "2024",
        duration: "30 hours",
        timeline: "Nov 15 - Dec 15",
        role: "Designer",
        tools: "Photoshop, After Effects"
      },
      sections: [
        { title: "Objective", content: "Demonstrate packaging and motion design skills through a fictional brand concept that conveys calm, modern design and visual appeal." },
        { title: "Research & Concept", content: "I researched coffee packaging trends and built a cohesive identity system meant to feel modern, warm, and calm." },
        { title: "Design Approach", content: "I combined cohesive branding with clean layout, subtle color palettes, and minimal typography." },
        { title: "Takeaways", content: "This project strengthened my understanding of brand systems and how motion can elevate packaging design." }
      ]
    },
    {
      id: 2,
      title: "Redesign Poster",
      subtitle: "Event Poster Redesign",
      thumbnail: graphicImage,
      images: [
        { src: badImage, label: "Original Design" },
        { src: graphicImage, label: "Final Redesign" }
      ],
      description: "I redesigned a BCIT poster for a 60s-themed pancake breakfast, transforming a flat design into one that felt warm, inviting, and nostalgic.",
      goal: "Redesign an existing poster to improve visual hierarchy, clarity, and theme alignment.",
      details: {
        type: "Print Design",
        year: "2024",
        duration: "11 hours",
        timeline: "Nov 4 - Nov 15",
        role: "Designer",
        tools: "Adobe Photoshop"
      },
      sections: [
        { title: "Objective", content: "Improve layout, color, and readability while creating stronger emotional engagement." },
        { title: "Design Approach", content: "Used warm tones and typographic contrast to strengthen focus and hierarchy." },
        { title: "Takeaways", content: "Showed me how color psychology and layout decisions significantly improve visual clarity." }
      ]
    }
  ];

  return (
    <>
      <ProjectNavbar />

      <div className="graphic-container">
        <div className="graphic-content">

          {/* Projects Grid Section - At Top */}
          <section className="section intro-section">
            <div className="section-content">
              <div className="section-header">
                <h1>graphic design</h1>
                <h2>click to explore each project</h2>
              </div>

              <div className="section-body">
                <div className="projects-grid">
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="project-card"
                      onClick={() => setActiveProject(project)}
                    >
                      <div className="project-card-image">
                        <img src={project.thumbnail} alt={project.title} />
                        <div className="project-card-overlay">
                          <span className="project-card-icon">↗</span>
                        </div>
                      </div>
                      <div className="project-card-info">
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>visual storytelling</h1>
                <h2>about my work</h2>
              </div>
              <div className="section-body">
                <p>
                  Graphic design is where I really get to play and express creativity. Whether it's working on
                  brand identities, packaging, print, or digital graphics — I love the challenge of telling a
                  story through visuals.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>design philosophy</h1>
                <h2>function meets beauty</h2>
              </div>
              <div className="section-body">
                <p>
                  Great design communicates instantly and emotionally. I balance function with beauty, ensuring
                  every element holds meaning and purpose.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Modal Popup */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <h2>{activeProject.title}</h2>
                <p className="modal-subtitle">{activeProject.subtitle}</p>
              </div>

              {/* Project Images */}
              <div className="modal-images">
                {activeProject.images.map((image, index) => (
                  <div key={index} className="modal-image-item">
                    <img src={image.src} alt={image.label} />
                    <span className="modal-image-label">{image.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-body">
                {/* Goal */}
                <div className="modal-goal">
                  <h3>Project Goal</h3>
                  <p>{activeProject.goal}</p>
                </div>

                {/* Description */}
                <p className="modal-description">{activeProject.description}</p>
                
                {/* Details Grid */}
                <div className="modal-details">
                  {Object.entries(activeProject.details).map(([key, value]) => (
                    <div key={key} className="modal-detail-item">
                      <span className="modal-detail-label">{key}</span>
                      <span className="modal-detail-value">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Additional Sections */}
                <div className="modal-sections">
                  {activeProject.sections.map((section, index) => (
                    <div key={index} className="modal-section-item">
                      <h4>{section.title}</h4>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default GraphicDesign;