import React, { useEffect, useState } from 'react';
import './UxUiDesign.css';
import Footer from '../components/ProjectFooter';
import ProjectNavbar from '../components/ProjectNavbar';
import line2Image from '../assets/images/line2.png';

const UxUiDesign = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState('video'); // 'video' or 'prototype'

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

  // Reset tab when opening a new project
  useEffect(() => {
    if (activeProject) {
      setActiveTab('video');
    }
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
      videoPath: '/videos/insighttimer.mp4',
      figmaUrl: 'https://www.figma.com/proto/mhYxBQhJ77XyMgKgXgc60T/uxui?node-id=201-4172&t=2aE8ZSIici3dE2AZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A277&show-proto-sidebar=1',
      slideNotes: [
  "Introduces the project: a UX/UI redesign of Insight Timer, including the student's name and project code, setting the tone with the app's theme and imagery.",
  "Shows the week-by-week project timeline outlining research, design, iteration, prototyping, and presentation stages.",
  "Explains what Insight Timer is, its purpose, and the meaning behind its Tibetan bowl logo to ground the redesign context.",
  "Analyzes the current Insight Timer app layout, highlighting usability problems like long onboarding, excessive options, and overwhelming filters.",
  "Shows the current website layout and notes branding and UX inconsistencies between web and app versions.",
  "Summarizes survey findings about meditation app usage, preferences, and the importance of clear navigation.",
  "Presents additional survey data on search behaviors, desired profile features, and frustrations like overwhelming choice and poor navigation.",
  "Displays the interview questions used to gather qualitative user insights about motivations, habits, and frustrations.",
  "Summarizes Interview 1: a 35-year-old developer focused on sleep support, emphasizing the need for simplicity and clarity.",
  "Summarizes Interview 2: a 24-year-old student focused on daily meditation and growth, highlighting needs for personalization and better content organization.",
  "Summarizes user testing on the current app, noting issues with onboarding, navigation, content organization, and clarity.",
  "Introduces Jeremy Dawson, the user persona representing typical users, detailing his needs, motivations, goals, and pain points.",
  "Narrative of Jeremy's experience with the app, showing frustration with category overload and how a guided flow could help.",
  "Presents the empathy map showing what Jeremy thinks, feels, says, and does while navigating meditation apps.",
  "Displays the user journey map across discover, explore, engage, and reflect, with emotions and UX opportunities for each phase.",
  "Recaps main pain points: cognitive overload, chaotic search, fragmented content, unclear teacher sections, and a confusing home screen.",
  "Visualizes Phase 1 onboarding flow, showing steps for login, intent selection, preferences, and reminders.",
  "Visualizes Phase 2 navigation flow, outlining how users move through home, intentions, browsing, and the library.",
  "Illustrates the search and profile flow, including filters by intention, experience level, time, and access to saved content.",
  "Presents the finalized visual design system: colors, typography, shapes, and reasoning behind the app's new calming aesthetic.",
  "Shows simplified low-fidelity onboarding wireframes demonstrating a streamlined, guided setup experience.",
  "Displays low-fidelity wireframes for navigation, search, and meditation selection to test early structure and filtering.",
  "Lists the specific usability testing tasks: onboarding, intention-setting, search, saving, playlist creation, and profile review.",
  "Summarizes beginner user feedback noting confusion around onboarding and category choices with suggestions for added guidance.",
  "Presents intermediate and advanced user feedback regarding unclear filters, lack of visual feedback, and insufficient progress insights.",
  "Highlights feedback about difficulty finding saved content and recommends reorganizing the library with clearer sub-categories.",
  "Explains improvements applied after testing, such as clearer CTAs, improved icon contrast, and increased guidance.",
  "Shows high-fidelity onboarding screens that apply the final visual system with a calming, intuitive setup experience.",
  "Displays high-fidelity home and library screens with updated cards, imagery, and a more structured navigation system.",
  "Shows refined high-fidelity search and meditation screens and summarizes positive final testing results.",
  "Concludes the project with lessons learned about user-centered design, iterative testing, simplifying flows, and reducing cognitive overload."
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
      slideCount: 16,
      slidePath: '/slides/pinpal/',
      pdfPath: '/files/pinpal.pdf',
      videoPath: '/videos/pinpal.mp4',
      figmaUrl: 'https://www.figma.com/proto/gEPemxSab58gccyBhdDZSL/pinpal--Copy-?node-id=1-3&t=9clDEhNDfGgw0jUN-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
   slideNotes: [
  "Title slide introducing PinPal, its UX/UI strategy, tagline, and concept of connecting travelers worldwide.",
  "Overview of the PinPal app and its purpose, including target audience demographics and travel types.",
  "Summary of user interview insights highlighting needs for safety, spontaneity, and authentic travel connections.",
  "Survey results showing demographic breakdown and the importance users place on making friends while traveling.",
  "Problem statement outlining challenges travelers face in forming meaningful, safe social connections.",
  "Solution overview describing core pillars: trust and safety, personalized event discovery, pre-event interaction, and community features.",
  "Design moodboard including color palette, typography, and visual direction emphasizing a vibrant, earthy aesthetic.",
  "Logo exploration showing multiple concepts and evolution toward the final PinPal map-pin symbol.",
  "User persona: Olivia Rose—her background, goals, and pain points as an outdoor adventure traveler.",
  "User persona: Ethan James—his background, goals, and pain points related to sustainability-focused travel.",
  "User scenario describing Olivia's experience using PinPal before, during, and after her backpacking trip.",
  "Empathy map summarizing Olivia's feelings, thoughts, actions, and statements as she uses the app.",
  "User journey map outlining the stages of preparation, engagement, and reflection with emotional states and opportunities.",
  "High-level user flow chart detailing signup, home screen navigation, chat interactions, and search behavior.",
  "Low-fidelity sketches representing early concept wireframes for onboarding, profile setup, home feed, chat, and search.",
  "Mid-fidelity wireframes showing refined layouts for onboarding, profile creation, activity discovery, chat, and profile pages."
]

    }
  ];

  // Check if project has interactive content (video or prototype)
  const hasInteractiveContent = (project) => {
    return project.videoPath || project.figmaUrl;
  };

  return (
    <>
      <ProjectNavbar />

      <div className="uxui-container">

        {/* Background Effects - Line decorations */}
        <div className="uxui-background-effects" aria-hidden="true">
          <img src={line2Image} alt="" className="uxui-line1-decoration" />
          <img src={line2Image} alt="" className="uxui-line2-decoration" />
        </div>

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

              {/* Interactive Prototype Section - Only show if has content */}
              {hasInteractiveContent(activeProject) && (
                <div className="modal-prototype-section">
                  <div className="prototype-header">
                    <h3>Interactive Prototype</h3>
                    
                    {/* Tab Toggle - Only show if both video and prototype exist */}
                    {activeProject.videoPath && activeProject.figmaUrl && (
                      <div className="prototype-tabs">
                        <button 
                          className={`prototype-tab ${activeTab === 'video' ? 'active' : ''}`}
                          onClick={() => setActiveTab('video')}
                        >
                          <span className="tab-icon">▶</span>
                          Video Walkthrough
                        </button>
                        <button 
                          className={`prototype-tab ${activeTab === 'prototype' ? 'active' : ''}`}
                          onClick={() => setActiveTab('prototype')}
                        >
                          <span className="tab-icon">✦</span>
                          Try Prototype
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Video Player */}
                  {activeTab === 'video' && activeProject.videoPath && (
                    <div className="prototype-video-container">
                      <video 
                        controls 
                        playsInline
                        poster={activeProject.thumbnail}
                        className="prototype-video"
                      >
                        <source src={activeProject.videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="prototype-caption">
                        Watch a guided walkthrough of the key user flows and interactions.
                      </p>
                    </div>
                  )}

                  {/* Figma Embed */}
                  {activeTab === 'prototype' && activeProject.figmaUrl && (
                    <div className="prototype-figma-container">
                      <div className="figma-embed-wrapper">
                        <iframe 
                          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(activeProject.figmaUrl)}`}
                          allowFullScreen
                          title={`${activeProject.title} Figma Prototype`}
                        />
                      </div>
                      <div className="prototype-figma-footer">
                        <p className="prototype-caption">
                          Click through the prototype to explore the design. 
                        </p>
                        <a 
                          href={activeProject.figmaUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="figma-fullscreen-link"
                        >
                          Open in Figma ↗
                        </a>
                      </div>
                    </div>
                  )}

                  {/* If only video exists (no tabs shown) */}
                  {activeProject.videoPath && !activeProject.figmaUrl && activeTab === 'video' && (
                    <div className="prototype-video-container">
                      <video 
                        controls 
                        playsInline
                        poster={activeProject.thumbnail}
                        className="prototype-video"
                      >
                        <source src={activeProject.videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="prototype-caption">
                        Watch a guided walkthrough of the key user flows and interactions.
                      </p>
                    </div>
                  )}

                  {/* If only prototype exists (no tabs shown) */}
                  {!activeProject.videoPath && activeProject.figmaUrl && (
                    <div className="prototype-figma-container">
                      <div className="figma-embed-wrapper">
                        <iframe 
                          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(activeProject.figmaUrl)}`}
                          allowFullScreen
                          title={`${activeProject.title} Figma Prototype`}
                        />
                      </div>
                      <div className="prototype-figma-footer">
                        <p className="prototype-caption">
                          Click through the prototype to explore the design.
                        </p>
                        <a 
                          href={activeProject.figmaUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="figma-fullscreen-link"
                        >
                          Open in Figma ↗
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}

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