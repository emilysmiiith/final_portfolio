import React, { useEffect, useState } from 'react';
import './UxUiDesign.css';
import Footer from '../components/ProjectFooter';
import ProjectNavbar from '../components/ProjectNavbar';

const UxUiDesign = () => {
  const [activeProject, setActiveProject] = useState(null);
  const base = import.meta.env.BASE_URL;

  // Page-specific metadata
  useEffect(() => {
    const title = "UX/UI Design – Emily Rianna Smith | Human-Centered Digital Design";
    const desc = "Explore UX/UI case studies by Emily Rianna Smith — including app redesigns, research-led workflows, and human-centered interface design.";
    const image = "https://www.yourwebsite.com/og/og-uxui.jpg";

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
      id: 'insight-timer',
      title: 'Insight Timer Redesign',
      subtitle: 'Meditation App UX/UI Enhancement',
      thumbnail: `${base}slides/insight/slide-1.png`,
      description: 'Redesigned the Insight Timer meditation app to simplify navigation, improve search flow, and enhance personalized content delivery. The project focused on creating a more intuitive user experience while maintaining the app\'s core meditation-focused identity.',
      goal: 'Simplify the user journey for discovering and engaging with meditation content, while improving the overall visual hierarchy and accessibility of the interface.',
      details: {
        type: 'Mobile App Redesign',
        duration: '51 hours',
        timeline: 'May 20 - May 29, 2025',
        tools: 'Figma, Illustrator',
        project: 'Independent Project',
        deliverables: '31 slides'
      },
      slideCount: 31,
      slidePath: 'slides/insight/',
      pdfPath: `${base}files/insight.pdf`,
      sections: [
        { title: 'Research', content: 'Conducted user interviews and competitive analysis to identify pain points in the current meditation app landscape.' },
        { title: 'Problem', content: 'Users struggled with content discovery and felt overwhelmed by the navigation structure.' },
        { title: 'Solution', content: 'Streamlined information architecture and introduced personalized content recommendations based on user behavior.' },
        { title: 'Outcome', content: 'Created a cleaner, more focused experience that reduces cognitive load while increasing content engagement.' }
      ]
    },
    {
      id: 'pinpal',
      title: 'Pinpal Travel App',
      subtitle: 'Social Travel Connection Platform',
      thumbnail: `${base}slides/pinpal/slide-1.png`,
      description: 'Created an app concept that helps travelers find local events and connect with like-minded people before attending. The platform bridges the gap between solo travel and meaningful social connections.',
      goal: 'Design a travel companion app that makes it easy for travelers to discover local events and connect with others who share similar interests.',
      details: {
        type: 'Mobile App Concept',
        duration: '23 hours',
        timeline: 'Feb 14 - Apr 15, 2025',
        tools: 'Figma, Illustrator',
        project: 'UX/UI Strategy Course',
        deliverables: '18 slides'
      },
      slideCount: 18,
      slidePath: 'slides/pinpal/',
      pdfPath: `${base}files/pinpal.pdf`,
      sections: [
        { title: 'Research', content: 'Surveyed solo travelers to understand their challenges in meeting people and finding authentic local experiences.' },
        { title: 'Problem', content: 'Travelers often miss out on local events and struggle to find companions with shared interests.' },
        { title: 'Solution', content: 'Built a platform that combines event discovery with social matching, allowing users to connect before attending.' },
        { title: 'Outcome', content: 'A comprehensive app concept with user flows, wireframes, and high-fidelity prototypes ready for development.' }
      ]
    }
  ];

  return (
    <>
      <ProjectNavbar />

      <div className="uxui-container">
        <div className="uxui-content">

          {/* Projects Grid - At Top */}
          <section className="section intro-section">
            <div className="section-content">
              <div className="section-header">
                <h1>ux/ui design</h1>
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
                <h1>human-centered design</h1>
                <h2>about my approach</h2>
              </div>
              <div className="section-body">
                <p>
                  UX/UI design lets me solve real problems for real people — turning complex user journeys
                  into effortless experiences through research and empathy.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>design philosophy</h1>
                <h2>invisible design</h2>
              </div>
              <div className="section-body">
                <p>
                  Great UX design is invisible — it just works. I design with empathy, research, and iteration,
                  turning complex problems into intuitive, delightful experiences.
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

              {/* Slides Preview */}
              <div className="modal-slides">
                <div className="slides-scroll">
                  {Array.from({ length: Math.min(6, activeProject.slideCount) }, (_, i) => (
                    <div key={i} className="slide-preview">
                      <img 
                        src={`${base}${activeProject.slidePath}slide-${i + 1}.png`} 
                        alt={`${activeProject.title} slide ${i + 1}`} 
                      />
                    </div>
                  ))}
                </div>
                <p className="slides-count">{activeProject.slideCount} slides total</p>
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

                {/* Process Sections */}
                <div className="modal-sections">
                  {activeProject.sections.map((section, index) => (
                    <div key={index} className="modal-section-item">
                      <h4>{section.title}</h4>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>

                {/* PDF Download */}
                <div className="modal-cta">
                  <a 
                    href={activeProject.pdfPath} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-btn"
                  >
                    view full case study →
                  </a>
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

export default UxUiDesign;