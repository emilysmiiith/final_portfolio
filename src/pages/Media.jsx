import React, { useEffect, useState } from 'react';
import './Media.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/ProjectFooter';
import line2Image from '../assets/images/line2.png';

      import dementia1 from '../assets/images/dementia1.png';
import dementia2 from '../assets/images/dementia2.png';
import storyboard from '../assets/images/Smith_003.png';

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
      if (e.key === 'Escape') {
        if (activePhoto) {
          setActivePhoto(null);
        } else {
          setActiveProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activePhoto]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeProject || activePhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject, activePhoto]);

  const projects = [
  {
  id: 3,
  title: "POV Reel",
  subtitle: "Creative POV • Short Vertical Reel",
  video: "/videos/pov.mp4",
  description: "A vertical POV reel created as part of my part-time work with a non-profit organization focused on gap year experiences. I managed their social media content strategy, rotating between motivational content, informational posts, and trending formats to engage young people considering taking a gap year. This piece represents the motivational content pillar — designed to inspire action and connection through authentic, first-person perspective. The entire reel was created using my personal footage, capturing creative moments, motion, and emotional tone through fast-paced cinematic edits. My goal was to reach young people my age who were exploring gap year opportunities and show them the real, lived experience of adventure and personal growth.",
  story: "As part of the non-profit's social media strategy, I developed a content rotation system that balanced inspiration with education and relevance. This POV piece showcases my approach to authentic storytelling — no stock footage, just real moments that resonate with the target audience. The fast cuts and dynamic movement were intentional choices to match the energy and curiosity of young people scrolling through social media, while the personal perspective creates immediate connection and relatability.",
  details: {
    type: "Vertical Reel / Social Media Content",
    year: "2024",
    role: "Content Creator, Social Media Manager, Editor",
    tools: "Premiere Pro, After Effects",
    duration: "0:30",
    context: "Non-profit Gap Year Outreach",
    contentStrategy: "Motivational, Informational, Trending Rotation",
    footage: "100% Personal Footage",
    collaborators: "—"
  }
},
    {
      id: 4,
      title: "Tip Reel",
      subtitle: "Quick Tip • Short Vertical Reel",
      video: "/videos/tip.mp4",
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

    // Updated Dementia Care Project
    {
      id: 1,
      title: "Dementia Care Short Film",
      subtitle: "PSA • First-Person Perspective Experience",
      video: "/videos/Smith_ProjectB.mp4",
      description: "A first-person PSA that allows viewers to emotionally experience what dementia feels like from the inside. The film follows the perspective of a dementia patient, immersing viewers into their psychological and sensory experience through blurry vision, fragmented audio, and visual distortions. Visual effects intensify as shadows morph into 'monsters,' sounds become overwhelming, and reality feels unstable. At the emotional turning point, a caregiver approaches gently, treating the patient with dignity — the screen becomes warmer and clearer. The film reveals: 'This could be your mom too. 42% of people aged 55 and older will develop dementia in their lifetime.' Created in collaboration with Denise Devlin between June-August 2024, this piece helps caregivers, families, and healthcare workers understand the emotional impact of their approach to dementia patients.",
      story: "The narrative uses POV storytelling to depict confusion through blur pulses, flicker transitions, sketch animations, double-vision overlays, and memory-fragment effects. Sound design includes muffled voices, ringing, ambient noise, heartbeat, and audio dropouts. The final emotional reveal features photo album imagery with stabilized color grading, ending with the question: 'What would you want her heart to hold onto?'",
      details: {
        type: "Short Film / PSA",
        year: "2024",
        timeline: "June - August 2024",
        role: "Director, Editor, Scriptwriter, Sound Designer, Visual Effects",
        tools: "Premiere Pro, After Effects, Audition",
        duration: "1:19",
        totalHours: "40 hours",
        collaborators: "Denise Devlin, Madison Smith"
      },
    


// Then in your project:
behindTheScenes: [
  { src: dementia1, alt: "Behind the scenes - filming day" },
  { src: dementia2, alt: "Behind the scenes - set preparation" }
],
storyboard: storyboard
    },
  {
  id: 2,
  title: "Trailblaze Apparel",
  subtitle: "Promotional Film • Brand Storytelling",
  video: "/videos/beyondrides.mp4",
  description: "A promotional short film for TrailBlaze Apparel, a conceptual outdoor cycling brand that communicates the brand's mission of inspiring confidence, freedom, and connection to nature. The film blends cinematic cycling footage with personal storytelling through carefully directed scenes, color grading, and visual rhythm. I directed featured talent Lily Taylor and worked with Kaveen Wickramasinghe to collect additional footage. My role encompassed assembling, organizing, and structuring all contributed clips into a cohesive narrative. In post-production, I focused extensively on lighting adjustments and color correction to achieve the right outdoor aesthetic. All audio work was completed in Audition, including level adjustments, ambient noise cleanup, and syncing. I composed the entire original musical score in GarageBand, customizing the tone and pacing to match the brand's emotional message of empowerment and exploration.",
  story: "The film represents people-first storytelling and emotional authenticity. Every edit decision was made to align with the brand's values — from the pacing synced to musical beats, to the transitions that emphasize freedom and adventure. The lighting was carefully balanced to capture the warmth of outdoor cycling while maintaining professional polish. The soundtrack I created in GarageBand drives the emotional arc, building from quiet introspection to energetic confidence. This project reflects my creative philosophy: meaningful, emotion-driven design that connects with viewers on a human level.",
  details: {
    type: "Promotional Film",
    year: "2025",
    timeline: "March 1 - March 25, 2025",
    role: "Director, Editor, Creative Strategist, Sound Designer, Composer",
    tools: "Premiere Pro, Audition, GarageBand",
    duration: "2:00",
    totalHours: "40 hours",
    collaborators: "Lily Taylor, Kaveen Wickramasinghe"
  }

    }
  ];

  const squamishPhotos = [
    { src: "/assets/images/squamish/photo-1.png", alt: "Rock climber ascending granite wall" },
    { src: "/assets/images/squamish/photo-2.jpg", alt: "Panoramic view of Squamish climbing area" },
    { src: "/assets/images/squamish/photo-3.jpg", alt: "Climber's hands gripping rock holds" },
    { src: "/assets/images/squamish/photo-4.jpg", alt: "Silhouette of climber against sky" },
    { src: "/assets/images/squamish/photo-5.jpg", alt: "Climbing route with rope systems" },
    { src: "/assets/images/squamish/photo-6.jpg", alt: "Climber celebrating at summit" }
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

        {/* Background Effects - Line decorations */}
        <div className="media-background-effects" aria-hidden="true">
          <img src={line2Image} alt="" className="media-line1-decoration" />
          <img src={line2Image} alt="" className="media-line2-decoration" />
        </div>

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

            <img src={activePhoto} alt="Fullscreen view" className="photo-modal-image" />
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

              {/* Behind the Scenes Photos */}
              {activeProject.behindTheScenes && (
                <div className="modal-bts-section">
                  <h3 className="modal-section-title">Behind the Scenes</h3>
                  <div className="modal-bts-grid">
                    {activeProject.behindTheScenes.map((photo, index) => (
                      <div 
                        key={index} 
                        className="modal-bts-photo"
                        onClick={() => setActivePhoto(photo.src)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={photo.src} alt={photo.alt} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Storyboard */}
              {activeProject.storyboard && (
                <div className="modal-storyboard-section">
                  <h3 className="modal-section-title">Project Storyboard</h3>
                  <div className="modal-storyboard">
                    <img 
                      src={activeProject.storyboard} 
                      alt="Complete project storyboard" 
                      onClick={() => setActivePhoto(activeProject.storyboard)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
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