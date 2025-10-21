import React from 'react';
import './UxUiDesign.css';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

// Memoized slide component for better performance
const SlideImage = React.memo(({ index, total, path, projectName }) => (
  <div className="slide-container">
    <img 
      src={`${path}slide-${index}.png`} 
      alt={`${projectName} case study slide ${index} of ${total}, showing ${
        index === 1 ? 'project overview and goals' :
        index <= 5 ? 'user research and problem definition' :
        index <= 10 ? 'competitive analysis and user personas' :
        index <= 15 ? 'wireframing and information architecture' :
        index <= 20 ? 'visual design and interaction patterns' :
        index <= 25 ? 'prototyping and user testing results' :
        'final designs and project outcomes'
      }`}
      title={`Slide ${index}: ${
        index === 1 ? 'Project Overview' :
        index <= 5 ? 'User Research Phase' :
        index <= 10 ? 'Analysis & Personas' :
        index <= 15 ? 'Wireframing' :
        index <= 20 ? 'Visual Design' :
        index <= 25 ? 'Prototyping & Testing' :
        'Final Designs'
      }`}
      className="slide-image"
      loading={index <= 2 ? "eager" : "lazy"}
      itemProp="image"
      data-slide-number={index}
    />
    <div className="slide-number">{index} / {total}</div>
  </div>
));

const UxUiDesign = () => {
  // Project metadata
  const uxuiProjects = [
    {
      id: 'insight-timer',
      title: 'Insight Timer Redesign',
      subtitle: 'Meditation App UX/UI Enhancement',
      description: 'Redesigned the Insight Timer meditation app to simplify navigation, improve search flow, and enhance personalized content delivery for a calmer, more intuitive user experience.',
      duration: '51 hours',
      timeline: 'May 20 - May 29, 2025',
      tools: ['Figma', 'Illustrator'],
      type: 'Independent Project',
      category: 'Mobile App Redesign',
      methodology: ['User Research', 'Competitive Analysis', 'Wireframing', 'Prototyping', 'User Testing'],
      problemSolved: 'Chaotic navigation and cognitive overload in meditation app',
      targetAudience: 'Busy professionals seeking mindfulness solutions',
      slideCount: 31,
      slidePath: './slides/insight/',
      pdfPath: '../assets/slides/insight.pdf',
      keyFeatures: ['Simplified navigation', 'Guided search flow', 'Unified saved content', 'Daily intention setting']
    },
    {
      id: 'pinpal',
      title: 'Pinpal Travel App',
      subtitle: 'Social Travel Connection Platform',
      description: 'Create an app concept that helps travelers find local events and connect with like-minded people before attending. The goal was to design a tool that makes forming meaningful connections while traveling easier and safer.',
      duration: '23 hours',
      timeline: 'Feb 14 - Apr 15, 2025',
      tools: ['Figma', 'Illustrator'],
      type: 'UX/UI Strategy Course',
      category: 'Mobile App Concept',
      methodology: ['User Interviews', 'Concept Development', 'Visual Design', 'Prototyping'],
      problemSolved: 'Difficulty forming meaningful connections while traveling',
      targetAudience: 'Solo travelers seeking authentic local experiences',
      slideCount: 18,
      slidePath: './slides/pinpal/',
      pdfPath: '../assets/slides/pinpal.pdf',
      keyFeatures: ['Event discovery', 'Pre-event interaction', 'Trust & safety features', 'Community building']
    }
  ];

  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>UX/UI Design Projects - Emily Rianna Smith | Human-Centered Design</title>
        <meta name="description" content="UX/UI design portfolio featuring Insight Timer app redesign and Pinpal travel app concept. Human-centered design solutions focused on empathy, research, and user experience." />
        <meta name="keywords" content="UX UI design, user experience, interface design, mobile app design, user research, wireframing, prototyping, Figma, meditation app, travel app, human-centered design" />
        <meta name="author" content="Emily Rianna Smith" />
        <meta property="og:title" content="UX/UI Design Portfolio - Emily Rianna Smith" />
        <meta property="og:description" content="Human-centered UX/UI design projects solving real problems for real people through research, empathy, and thoughtful design." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./slides/insight/slide-1.png" />
        <meta property="og:url" content="/ux-ui-design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UX/UI Design Projects - Emily Rianna Smith" />
        <meta name="twitter:description" content="Mobile app redesigns and concepts focused on improving user experience through research and empathetic design." />
        <meta name="twitter:image" content="./slides/insight/slide-1.png" />
      </head>

      <div className="uxui-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Decorative SVG background element for visual design enhancement"
            className="svg-image-static"
            role="presentation"
            aria-hidden="true"
          />
        </div>

        <div className="uxui-content">
          {/* Hero Section */}
          <section className="section hero-section" aria-labelledby="hero-heading">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  human-centered design
                </h2>
                <h1 id="hero-heading" className="section-title">ux/ui design</h1>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  UX/UI design is where I get to solve real problems for real people. There's something incredibly 
                  rewarding about taking a complex user journey and making it feel effortless. I love the research 
                  phase — talking to users, understanding their pain points, and then crafting solutions that 
                  actually make their lives easier. Every wireframe, prototype, and interaction is a step toward 
                  creating something that genuinely improves someone's day.
                </p>
              </div>
            </div>
          </section>

          {/* Project 1: Insight Timer */}
          <section className="section" aria-labelledby="insight-timer-heading">
            <div className="section-content">
              <div className="project-showcase blue" itemScope itemType="https://schema.org/CreativeWork">
                <div className="project-header">
                  <div className="project-number">#1</div>
                  <div className="project-meta">
                    <h2 id="insight-timer-heading" className="project-title" itemProp="name">Insight Timer Redesign</h2>
                    <p className="project-subtitle" itemProp="genre">Meditation App UX/UI Enhancement</p>
                    <div className="project-stats">
                      <span className="stat-item" itemProp="timeRequired">51 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item" itemProp="dateCreated">May 20 - May 29, 2025</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Independent Project</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item" itemProp="creator">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                {/* Project Goal Section */}
                <div className="project-overview">
                  <div className="overview-content">
                    <h3 className="overview-title">Project Goal</h3>
                    <p className="overview-description" itemProp="description">
                      Redesigned the Insight Timer meditation app to simplify navigation, improve search flow, and enhance personalized content delivery for a calmer, more intuitive user experience.
                    </p>
                    
                    <div className="overview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Duration</span>
                        <span className="timeline-value">51 hours</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Timeline</span>
                        <span className="timeline-value">May 20 - 29, 2025</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Tools</span>
                        <span className="timeline-value">Figma, Illustrator</span>
                      </div>
                    </div>

                    <div className="presentation-section">
                      <h4 className="presentation-title">📄 Complete Case Study</h4>
                      <div className="slides-gallery" role="img" aria-label="Insight Timer case study presentation slides">
                        {Array.from({ length: 31 }, (_, i) => (
                          <SlideImage 
                            key={i + 1}
                            index={i + 1}
                            total={31}
                            path="./slides/insight/"
                            projectName="Insight Timer UX/UI redesign"
                          />
                        ))}
                        <div className="pdf-controls">
                          <a 
                            href="../assets/slides/insight.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="pdf-download"
                            aria-label="Download complete Insight Timer case study PDF"
                            title="Download complete case study as PDF"
                          >
                            Download Complete PDF ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Narrative</h4>
                      <p className="detail-text">
                        For this project, I redesigned the Insight Timer meditation app to improve usability and reduce cognitive overload. The project focused on enhancing the user experience by streamlining navigation, simplifying the search process, and unifying saved content. I used Figma for prototyping and conducted user testing to validate design decisions.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Objective</h4>
                      <p className="detail-text">
                        As part of an independent UX/UI project, my goal was to reimagine the Insight Timer interface with a user-first approach. The main objectives included improving clarity on the home screen, creating a guided search flow, and making it easier for users to access and track content.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Research and Concept</h4>
                      <p className="detail-text">
                        The project began with user surveys, interviews, and a competitive analysis of meditation apps. Key user frustrations included chaotic navigation, excessive categories, and difficulty finding or saving preferred sessions. I developed a persona—Jeremy, a busy professional—and mapped his journey to identify where the app could be more intuitive.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Approach</h4>
                      <p className="detail-text">
                        Using Figma, I created wireframes and iterated from low to high fidelity. The redesigned home screen focuses on setting a daily intention and offering a clear "Get Started" prompt. The search experience was transformed into a 3-step guided flow, breaking down complex filters into manageable choices.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Project Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Week 1 (Mar 11-17):</strong> Research and Problem framing - Define problem, target audience, purpose. Conduct user surveys, interviews, competitive analysis (8 hours)</li>
                        <li><strong>Week 2 (Mar 18-24):</strong> Design Analysis and planning - Highlight issues and inconsistencies (5 hours)</li>
                        <li><strong>Week 3 (Mar 25-31):</strong> UI Design and Interaction - Create low fidelity wireframes, apply design corrections (18 hours)</li>
                        <li><strong>Week 4 (Apr 1-7):</strong> Prototype and Testing - Build high fidelity prototype, refine based on feedback (15 hours)</li>
                        <li><strong>Week 5 (Apr 8-15):</strong> Case Study - Finalize case study documentation (5 hours)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        This project sharpened my UX research and wireframing skills while reinforcing the value of user testing. I learned how to identify and solve pain points through structure and simplicity, and how thoughtful UX can reduce friction in daily use. Ultimately, I walked away with a polished case study that reflects both design thinking and practical UI execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project 2: Pinpal */}
          <section className="section" aria-labelledby="pinpal-heading">
            <div className="section-content">
              <div className="project-showcase amber" itemScope itemType="https://schema.org/CreativeWork">
                <div className="project-header">
                  <div className="project-number">#2</div>
                  <div className="project-meta">
                    <h2 id="pinpal-heading" className="project-title" itemProp="name">Pinpal Travel App</h2>
                    <p className="project-subtitle" itemProp="genre">Social Travel Connection Platform</p>
                    <div className="project-stats">
                      <span className="stat-item" itemProp="timeRequired">23 hours</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item" itemProp="dateCreated">Feb 14 - Apr 15, 2025</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">UX/UI Strategy Course</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item" itemProp="creator">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                {/* Project Goal Section */}
                <div className="project-overview">
                  <div className="overview-content">
                    <h3 className="overview-title">Project Goal</h3>
                    <p className="overview-description" itemProp="description">
                      Create an app concept that helps travelers find local events and connect with like-minded people before attending. The goal was to design a tool that makes forming meaningful connections while traveling easier and safer.
                    </p>
                    
                    <div className="overview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Duration</span>
                        <span className="timeline-value">23 hours</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Timeline</span>
                        <span className="timeline-value">Feb 14 - Apr 15, 2025</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Tools</span>
                        <span className="timeline-value">Figma, Illustrator</span>
                      </div>
                    </div>

                    <div className="presentation-section">
                      <h4 className="presentation-title">📄 Complete Case Study</h4>
                      <div className="slides-gallery" role="img" aria-label="Pinpal travel app case study presentation slides">
                        {Array.from({ length: 18 }, (_, i) => (
                          <SlideImage 
                            key={i + 1}
                            index={i + 1}
                            total={18}
                            path="./slides/pinpal/"
                            projectName="Pinpal travel app concept"
                          />
                        ))}
                        <div className="pdf-controls">
                          <a 
                            href="../assets/slides/pinpal.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="pdf-download"
                            aria-label="Download complete Pinpal case study PDF"
                            title="Download complete case study as PDF"
                          >
                            Download Complete PDF ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-grid">
                    <div className="detail-section">
                      <h4 className="detail-title">Narrative</h4>
                      <p className="detail-text">
                        For this project, I created Pinpal, a mobile app that helps travelers find local events and connect with like-minded people before attending. I used Adobe Illustrator for graphics and Figma for wireframes and prototyping. The goal was to design a tool that makes forming meaningful connections while traveling easier and safer.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Brainstorming</h4>
                      <p className="detail-text">
                        The idea came from my own experiences struggling to meet people while traveling abroad. I created a mind map to explore ideas around travel, connection, and community. The concept of helping travelers connect through events stood out, and I knew I wanted the app to focus on safety, authentic interaction, and event discovery.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Concept Development</h4>
                      <p className="detail-text">
                        To validate the idea, I ran user interviews and surveys. The feedback confirmed that many travelers find it hard to make real connections. I defined the problem as: "It's challenging to form meaningful, safe connections while abroad." This led me to focus the app around four main features: trust & safety, personalized event discovery, pre-event interaction, and community-building tools.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Design Execution</h4>
                      <p className="detail-text">
                        I went with a vibrant, earthy aesthetic to create a warm and welcoming vibe. The UI was designed to be clean and intuitive, with an activity feed, smart filters, and structured messaging to make interaction easy. To build trust, I included features like mutual connections, profile verification, and post-event reviews.
                      </p>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Project Timeline</h4>
                      <ul className="deliverables-list">
                        <li><strong>Feb 14:</strong> Brainstorming - Mapped ideas inspired by personal travel experience (1 hour)</li>
                        <li><strong>Feb 17-18:</strong> Concept Sketches - Sketched layout ideas focused on social travel connection (2 hours)</li>
                        <li><strong>Feb 21-25:</strong> User Research - Ran interviews and surveys to identify user needs and pain points (2 hours)</li>
                        <li><strong>Feb 26-Mar 1:</strong> Problem Statement & Features - Defined problem and focused on trust, events, interaction, and community tools (3 hours)</li>
                        <li><strong>Mar 2-3:</strong> Visual Design Planning - Set design direction: vibrant, earthy aesthetic, simple UI (2 hours)</li>
                        <li><strong>Mar 6-7:</strong> Low-Fidelity Wireframes - Mapped user flow and layout in Figma (1 hour)</li>
                        <li><strong>Mar 8-10:</strong> Mid & High-Fidelity Wireframes - Refined UI and onboarding based on feedback (5 hours)</li>
                        <li><strong>Mar 12:</strong> Logo & Branding - Created logo and finalized visual identity (1 hour)</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4 className="detail-title">Takeaways</h4>
                      <p className="detail-text">
                        This project taught me how to turn a personal insight into a user-centered product. It showed me the importance of research, thoughtful design, and building trust in digital experiences—especially when connecting people in the real world. I learned how to validate concepts through user research and iterate based on feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="philosophy-heading">
            <div className="section-content">
              <div className="section-header">
                <h2 id="philosophy-heading" className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  design philosophy
                </h2>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Great UX design is invisible — it just works. I believe in starting with empathy, understanding 
                  the user's world before proposing solutions. My process is rooted in research, iteration, and 
                  validation. I love turning complex problems into simple, intuitive experiences that feel natural 
                  and delightful. Every design decision should serve the user's goals while supporting business 
                  objectives.
                </p>
              </div>
            </div>
          </section>

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "UX/UI Design Portfolio - Emily Rianna Smith",
              "description": "Human-centered UX/UI design projects featuring mobile app redesigns and concepts focused on user research, empathy, and problem-solving.",
              "url": "/ux-ui-design",
              "creator": {
                "@type": "Person",
                "name": "Emily Rianna Smith",
                "jobTitle": "UX/UI Designer",
                "knowsAbout": ["User Experience Design", "Interface Design", "User Research", "Prototyping", "Wireframing"]
              },
              "mainEntity": uxuiProjects.map(project => ({
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "creator": {
                  "@type": "Person",
                  "name": "Emily Rianna Smith"
                },
                "dateCreated": project.timeline,
                "genre": project.category,
                "keywords": project.methodology.concat(project.keyFeatures),
                "timeRequired": project.duration,
                "tool": project.tools,
                "audience": {
                  "@type": "Audience",
                  "audienceType": project.targetAudience
                },
                "about": {
                  "@type": "Thing",
                  "name": project.problemSolved,
                  "description": project.description
                }
              })),
              "keywords": [
                "UX design",
                "UI design", 
                "user experience",
                "interface design",
                "mobile app design",
                "user research",
                "wireframing",
                "prototyping",
                "Figma",
                "human-centered design",
                "meditation app",
                "travel app"
              ]
            })}
          </script>

          {uxuiProjects.map(project => (
            <script key={project.id} type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "DigitalDocument",
                "name": `${project.title} Case Study`,
                "description": project.description,
                "creator": {
                  "@type": "Person",
                  "name": "Emily Rianna Smith"
                },
                "dateCreated": project.timeline,
                "genre": "UX/UI Case Study",
                "fileFormat": "PDF",
                "url": project.pdfPath,
                "thumbnailUrl": `${project.slidePath}slide-1.png`,
                "numberOfPages": project.slideCount,
                "keywords": project.methodology.concat(project.keyFeatures),
                "about": {
                  "@type": "SoftwareApplication",
                  "name": project.title,
                  "applicationCategory": "Mobile Application",
                  "operatingSystem": "iOS, Android"
                }
              })}
            </script>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UxUiDesign;