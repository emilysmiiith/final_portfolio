import React, { useEffect, useState } from 'react';
import './Media.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/ProjectFooter';

const Media = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  // ============================
  // PAGE-SPECIFIC META TAGS
  // ============================
  useEffect(() => {
    const title = "Media & Film – Emily Rianna Smith | Creative Designer";
    const desc = "Media production portfolio of Emily Rianna Smith featuring cinematic short films, editing work, and adventure photography.";
    const image = "https://www.yourwebsite.com/og/og-media.jpg";

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

  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      id: 3,
      title: "POV Reel",
      subtitle: "Creative POV • Short Vertical Reel",
      video: `${base}videos/pov.mp4`,
      description: "A vertical POV reel capturing creative moments, motion, and emotional tone through fast-paced cinematic edits.",
      details: {
        type: "Vertical Reel",
        year: "2024",
        role: "Director, Editor",
        tools: "Premiere Pro, After Effects",
        duration: "0:30",
        collaborators: "—"
      }
    },
    {
      id: 4,
      title: "Tip Reel",
      subtitle: "Quick Tip • Short Vertical Reel",
      video: `${base}videos/tip.mp4`,
      description: "A vertical format tip-style video offering quick insights through engaging visuals and impactful pacing.",
      details: {
        type: "Vertical Reel",
        year: "2024",
        role: "Director, Editor",
        tools: "Premiere Pro",
        duration: "0:20",
        collaborators: "—"
      }
    },

    // Existing Projects Below
    {
      id: 1,
      title: "Dementia Care Short Film",
      subtitle: "PSA • First-Person Perspective Experience",
      video: `${base}videos/Smith_ProjectB.mp4`,
      description:
        "Created in collaboration with Denise Devlin — this PSA raises awareness about empathy in dementia care...",
      details: {
        type: "Short Film / PSA",
        year: "2024",
        role: "Director, Editor, Producer",
        tools: "Premiere Pro, After Effects, Audition",
        duration: "3:42",
        collaborators: "Denise Devlin"
      }
    },
    {
      id: 2,
      title: "Beyond Rides",
      subtitle: "Short Film • Featuring Lily Taylor & Kaveen",
      video: `${base}videos/beyondrides.mp4`,
      description:
        "A music-driven narrative featuring Lily Taylor and Kaveen...",
      details: {
        type: "Short Film",
        year: "2024",
        role: "Director, Editor",
        tools: "Premiere Pro, Audition",
        duration: "4:15",
        collaborators: "Lily Taylor, Kaveen"
      }
    }
];



  const squamishPhotos = [
    { src: `${base}assets/images/squamish/photo-1.png`, alt: "Rock climber ascending granite wall" },
    { src: `${base}assets/images/squamish/photo-2.jpg`, alt: "Panoramic view of Squamish climbing area" },
    { src: `${base}assets/images/squamish/photo-3.jpg`, alt: "Climber's hands gripping rock holds" },
    { src: `${base}assets/images/squamish/photo-4.jpg`, alt: "Silhouette of climber against sky" },
    { src: `${base}assets/images/squamish/photo-5.jpg`, alt: "Climbing route with rope systems" },
    { src: `${base}assets/images/squamish/photo-6.jpg`, alt: "Climber celebrating at summit" }
  ];

  const squamishProject = {
    id: 'squamish',
    title: "Squamish Climbing",
    subtitle: "Adventure Photography",
    isTextOnly: true,
    description: "This personal photography project captures the raw beauty and intensity of rock climbing in Squamish, British Columbia. Known as one of the premier climbing destinations in North America, Squamish offers dramatic granite walls set against lush Pacific Northwest forests.",
    story: "I spent several weekends documenting climbers in their element — the focus before a difficult move, the exhaustion at the end of a long route, and the quiet moments of connection with nature. These images represent both the physical challenge and the meditative quality of climbing.",
    details: {
      type: "Photography Series",
      year: "2024",
      location: "Squamish, BC",
      camera: "Sony A7III",
      editing: "Adobe Lightroom",
      images: "6 photographs"
    }
  };

  return (
    <>
      <ProjectNavbar />

      <div className="media-container">
        <div className="media-content">

          {/* Projects Grid - At Top */}
          <section className="section intro-section">
            <div className="section-content">
              <div className="section-header">
                <h1>media & film</h1>
                <h2>click to explore each project</h2>
              </div>
              

              <div className="section-body">
                <div className="projects-grid">
                  {/* Video Projects */}
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="project-card"
                      onClick={() => setActiveProject(project)}
                    >
                      <div className="project-card-video">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>


                        <div className="project-card-overlay">
                          <span className="project-card-icon">▶</span>
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

          {/* Photography Section - Scattered Layout */}
          <section className="section">
            <div className="section-content section-content-wide">
              <div className="section-header">
                <h1>adventure photography</h1>
                <h2>squamish, bc</h2>
              </div>

              <div className="section-body">
                <div className="scattered-gallery">
                  {squamishPhotos.map((photo, index) => (
                  <div 
  key={index} 
  className={`scattered-photo photo-${index + 1}`}
  onClick={() => setActivePhoto(photo.src)}
  style={{ cursor: "pointer" }}
>
  <img src={photo.src} alt={photo.alt} />
</div>
                  ))}
                </div>

                <div className="gallery-cta">
                  <button 
                    className="gallery-btn"
                    onClick={() => setActiveProject(squamishProject)}
                  >
                    about this project →
                  </button>
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
                  Media production is where I combine technical skills with meaningful storytelling.
                  Every story begins with empathy and curiosity.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>creative philosophy</h1>
                <h2>empathy drives everything</h2>
              </div>
              <div className="section-body">
                <p>
                  Whether I'm directing, designing, or editing, my work starts with empathy and curiosity.
                  I believe the best stories come from truly understanding the human experience.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>


{/* PHOTO MODAL */}
{activePhoto && (
  <div 
    className="photo-modal-overlay"
    onClick={() => setActivePhoto(null)}
  >
    <div 
      className="photo-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        className="photo-modal-close"
        onClick={() => setActivePhoto(null)}
      >
        ×
      </button>

      <img src={activePhoto} className="photo-modal-image" />
    </div>
  </div>
)}

      {/* Modal Popup */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className={`modal ${activeProject.isTextOnly ? '' : 'modal-large'}`} onClick={(e) => e.stopPropagation()}>
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

              {/* Video for film projects */}
              {activeProject.video && (
                <div className="modal-media">
                  <video
                    className="modal-video"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source src={activeProject.video} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="modal-body">
                <p className="modal-description">{activeProject.description}</p>
                
                {activeProject.story && (
                  <p className="modal-description">{activeProject.story}</p>
                )}
                
                <div className="modal-details">
                  {Object.entries(activeProject.details).map(([key, value]) => (
                    <div key={key} className="modal-detail-item">
                      <span className="modal-detail-label">{key}</span>
                      <span className="modal-detail-value">{value}</span>
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

export default Media;