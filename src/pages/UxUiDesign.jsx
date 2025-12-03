import React, { useEffect, useState } from 'react';
import './UxUiDesign.css';
import Footer from '../components/ProjectFooter';
import ProjectNavbar from '../components/ProjectNavbar';

const UxUiDesign = () => {
  const [activeProject, setActiveProject] = useState(null);

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
      thumbnail: '/slides/insight/slide-1.png',
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
      slidePath: '/slides/insight/',
      pdfPath: '/files/insight.pdf',
      // Customize these notes for each slide
      slideNotes: [
        "Project cover introducing the Insight Timer redesign case study.",
        "Overview of the meditation app market and Insight Timer's position.",
        "Research methodology: user interviews, surveys, and competitive analysis.",
        "Key user personas developed from research findings.",
        "Pain points identified through user journey mapping.",
        "Competitive analysis comparing major meditation apps.",
        "Problem statement defining the core UX challenges.",
        "Design goals and success metrics for the redesign.",
        "Information architecture restructuring proposal.",
        "Low-fidelity wireframes exploring navigation patterns.",
        "Wireframe iterations based on initial feedback.",
        "User flow diagrams for content discovery.",
        "Visual design exploration and mood boards.",
        "Typography and color palette decisions.",
        "Component library and design system foundations.",
        "High-fidelity home screen designs.",
        "Search and discovery interface improvements.",
        "Meditation player screen redesign.",
        "Personalization and recommendation features.",
        "Profile and settings interface updates.",
        "Onboarding flow for new users.",
        "Notification and reminder system design.",
        "Accessibility considerations and implementations.",
        "Prototype testing methodology and setup.",
        "Usability testing results and insights.",
        "Iteration based on user feedback.",
        "Final design solutions overview.",
        "Before and after comparison screens.",
        "Impact metrics and projected improvements.",
        "Lessons learned and design reflections.",
        "Thank you and project summary."
      ]
    },
    {
      id: 'pinpal',
      title: 'Pinpal Travel App',
      subtitle: 'Social Travel Connection Platform',
      thumbnail: '/slides/pinpal/slide-1.png',
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
      slidePath: '/slides/pinpal/',
      pdfPath: '/files/pinpal.pdf',
      // Customize these notes for each slide
      slideNotes: [
        "Project cover introducing the Pinpal travel app concept.",
        "Problem space: loneliness and missed connections in solo travel.",
        "Research insights from surveying 50+ solo travelers.",
        "User personas representing different traveler types.",
        "Competitive landscape analysis of travel social apps.",
        "Opportunity areas and unique value proposition.",
        "Core feature set and prioritization matrix.",
        "User flow for event discovery and matching.",
        "Low-fidelity wireframes for main screens.",
        "Wireframe testing and iteration insights.",
        "Visual identity and brand personality development.",
        "High-fidelity event discovery interface.",
        "User matching and connection features.",
        "Chat and meetup coordination screens.",
        "Safety features and trust-building elements.",
        "Prototype walkthrough and key interactions.",
        "Next steps and development roadmap.",
        "Thank you and project conclusions."
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

      {/* Modal Popup - Vertical Slides with Notes */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal modal-slides-vertical" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <h2>{activeProject.title}</h2>
                <p className="modal-subtitle">{activeProject.subtitle}</p>
              </div>

              {/* Project Info Summary */}
              <div className="modal-info-summary">
                <div className="modal-goal">
                  <h3>Project Goal</h3>
                  <p>{activeProject.goal}</p>
                </div>

                <div className="modal-details">
                  {Object.entries(activeProject.details).map(([key, value]) => (
                    <div key={key} className="modal-detail-item">
                      <span className="modal-detail-label">{key}</span>
                      <span className="modal-detail-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical Slides with Notes */}
              <div className="modal-slides-vertical-container">
                <div className="slides-vertical-header">
                  <h3>Case Study Slides</h3>
                  <p>{activeProject.slideCount} slides</p>
                </div>

                <div className="slides-vertical-list">
                  {Array.from({ length: activeProject.slideCount }, (_, i) => (
                    <div key={i} className="slide-row">
                      <div className="slide-image-large">
                        <img 
                          src={`${activeProject.slidePath}slide-${i + 1}.png`} 
                          alt={`${activeProject.title} slide ${i + 1}`}
                          loading="lazy"
                        />
                        <span className="slide-number">{i + 1}</span>
                      </div>
                      <div className="slide-note">
                        <span className="slide-note-label">Slide {i + 1}</span>
                        <p>{activeProject.slideNotes[i] || "Slide content and design details."}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Download */}
              <div className="modal-cta">
                <a 
                  href={activeProject.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  download full case study →
                </a>
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