import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import imageSvg from '../assets/image.svg';

// Import project images
import mediaImage from '../assets/images/media.png';
import uxuiImage from '../assets/images/uxui.png';
import graphicImage from '../assets/images/graphic.png';

const Projects = () => {
  // Project metadata
  const projectCategories = [
    {
      id: 'media',
      title: 'Media and Editing',
      description: 'Video production, documentary filmmaking, and motion graphics combining technical skills with meaningful storytelling',
      image: mediaImage,
      alt: 'Media and editing project showcase featuring video production and documentary filmmaking work',
      link: '/media',
      skills: ['Video Production', 'Documentary Filmmaking', 'Motion Graphics', 'Adobe After Effects', 'Adobe Audition'],
      projectCount: 5,
      featured: 'Dementia Care Short Film'
    },
    {
      id: 'uxui',
      title: 'UX/UI Design',
      description: 'User experience and interface design focused on creating intuitive, empathetic, and accessible digital experiences',
      image: uxuiImage,
      alt: 'UX/UI design projects showcasing user interface design and user experience research',
      link: '/ux-ui-design',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Interface Design', 'Usability Testing'],
      projectCount: 8,
      featured: 'Mobile App Redesign'
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
      description: 'Brand identity, packaging, print, and digital graphics that tell stories through thoughtful visual communication',
      image: graphicImage,
      alt: 'Graphic design portfolio featuring brand identity, packaging design, and visual communication projects',
      link: '/graphic-design',
      skills: ['Brand Identity', 'Packaging Design', 'Print Design', 'Digital Graphics', 'Typography'],
      projectCount: 12,
      featured: 'Brand Identity System'
    }
  ];

  // Add project-page class to body when component mounts
  useEffect(() => {
    document.body.classList.add('projects-page');
    return () => document.body.classList.remove('projects-page');
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>Projects - Emily Rianna Smith | Creative Portfolio</title>
        <meta name="description" content="Explore Emily Rianna Smith's creative portfolio featuring media production, UX/UI design, and graphic design projects. Human-centered design with empathy and authenticity." />
        <meta name="keywords" content="creative portfolio, media production, UX UI design, graphic design, video editing, documentary film, brand identity, user experience, visual storytelling" />
        <meta name="author" content="Emily Rianna Smith" />
        <meta property="og:title" content="Creative Portfolio - Emily Rianna Smith" />
        <meta property="og:description" content="Multi-disciplinary designer specializing in media production, UX/UI design, and graphic design with a focus on human-centered storytelling." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/portfolio-preview.jpg" />
        <meta property="og:url" content="/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Portfolio - Emily Rianna Smith" />
        <meta name="twitter:description" content="Multi-disciplinary designer creating meaningful connections through empathetic design." />
        <meta name="twitter:image" content="/assets/images/portfolio-preview.jpg" />
      </head>

      <div className="projects-container">
        {/* Static SVG */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Decorative SVG background element for visual design enhancement"
            className="svg-image-static"
            role="presentation"
            aria-hidden="true"
          />
        </div>

        {/* Social Icons */}
        <div className="social-icons" role="navigation" aria-label="Social media links">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Connect with Emily Rianna Smith on LinkedIn"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
          </a>
          <a 
            href="mailto:emily.smiiith@gmail.com" 
            className="social-icon"
            aria-label="Send email to Emily Rianna Smith"
            title="Email Contact"
          >
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
          </a>
        </div>

        {/* Why These Disciplines Section */}
        <section className="section" aria-labelledby="disciplines-heading">
          <div className="section-content">
            <div className="section-header">
              <h2 id="disciplines-heading">why these disciplines?</h2>
            </div>
            <div className="section-body">
              <p>
              Graphic design, UX/UI, and media all share a common relation to me which highlights my ability to express creativity with endless opportunities, allows for storytelling to play a role, and engages audiences in a human-centered way. At the heart of everything I do is a desire to make work that connects — whether that's through a beautifully crafted brand, an intuitive interface, or an engaging piece of media. Leading with empathy, authenticity and collaboration, I'm always learning, always staying curious, and I believe that great design should feel human, warm, and thoughtful.
              </p>
            </div>
          </div>
        </section>

        {/* Media and Editing Section */}
        <section className="section" aria-labelledby="media-heading">
          <div className="section-content">
            <div className="section-header">
              <h1 id="media-heading">media and editing</h1>
            </div>
            <div className="section-body">
              <p>
                I'm fascinated by how sound, motion, and visuals come together to tell a story. Through editing, 
                whether it's video, animation, or motion graphics, I get to bring ideas to life in ways that feel dynamic and 
                emotional. It's one of my favorite ways to create something that resonates with an audience on a deeper level.
              </p>
              
              <div className="projects-grid">
                <Link to="/media" className="project-card-link" aria-label="View media and editing projects">
                  <div className="project-card" itemScope itemType="https://schema.org/CreativeWork">
                    <div className="project-image-container">
                      <img 
                        src={mediaImage} 
                        alt={projectCategories[0].alt}
                        title={projectCategories[0].title}
                        className="project-image"
                        loading="lazy"
                        itemProp="image"
                        data-category="media"
                        data-skills={projectCategories[0].skills.join(', ')}
                        data-project-count={projectCategories[0].projectCount}
                        data-featured={projectCategories[0].featured}
                      />
                      <div className="project-overlay">
                        <div className="overlay-content">
                          <span className="overlay-text">View Media Projects</span>
                          <span className="overlay-arrow">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="check-more-section">
                <Link to="/media" className="check-more-btn">
                  check out more of my projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* UX/UI Section */}
        <section className="section" aria-labelledby="uxui-heading">
          <div className="section-content">
            <div className="section-header">
              <h1 id="uxui-heading">ux/ui</h1>
            </div>
            <div className="section-body">
              <p>
                I love designing with people in mind — creating experiences that feel natural, clear, and welcoming. For me, 
                good UX/UI is all about empathy: understanding how someone will interact with something and making sure that 
                experience feels good. I enjoy working on designs that not only look beautiful but also make people's lives a 
                little easier.
              </p>
              
              <div className="projects-grid">
                <Link to="/ux-ui-design" className="project-card-link" aria-label="View UX/UI design projects">
                  <div className="project-card" itemScope itemType="https://schema.org/CreativeWork">
                    <div className="project-image-container">
                      <img 
                        src={uxuiImage} 
                        alt={projectCategories[1].alt}
                        title={projectCategories[1].title}
                        className="project-image"
                        loading="lazy"
                        itemProp="image"
                        data-category="uxui"
                        data-skills={projectCategories[1].skills.join(', ')}
                        data-project-count={projectCategories[1].projectCount}
                        data-featured={projectCategories[1].featured}
                      />
                      <div className="project-overlay">
                        <div className="overlay-content">
                          <span className="overlay-text">View UX/UI Projects</span>
                          <span className="overlay-arrow">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="check-more-section">
                <Link to="/ux-ui-design" className="check-more-btn">
                  check out more of my projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Graphic Design Section */}
        <section className="section" aria-labelledby="graphic-heading">
          <div className="section-content">
            <div className="section-header">
              <h1 id="graphic-heading">graphic design</h1>
            </div>
            <div className="section-body">
              <p>
                Graphic design is where I really get to play and express creativity. Whether it's working on brand identities, 
                packaging, print, or digital graphics — I love the challenge of telling a story through visuals. I'm drawn to 
                designs that are clean, thoughtful, and full of personality. It's such a great feeling when the right visual can 
                really connect with someone.
              </p>
              
              <div className="projects-grid">
                <Link to="/graphic-design" className="project-card-link" aria-label="View graphic design projects">
                  <div className="project-card" itemScope itemType="https://schema.org/CreativeWork">
                    <div className="project-image-container">
                      <img 
                        src={graphicImage} 
                        alt={projectCategories[2].alt}
                        title={projectCategories[2].title}
                        className="project-image"
                        loading="lazy"
                        itemProp="image"
                        data-category="graphic"
                        data-skills={projectCategories[2].skills.join(', ')}
                        data-project-count={projectCategories[2].projectCount}
                        data-featured={projectCategories[2].featured}
                      />
                      <div className="project-overlay">
                        <div className="overlay-content">
                          <span className="overlay-text">View Graphic Design Projects</span>
                          <span className="overlay-arrow">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="check-more-section">
                <Link to="/graphic-design" className="check-more-btn">
                  check out more of my projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="section ai-section" aria-labelledby="ai-heading">
          <div className="section-content">
            <div className="section-header">
              <h1 id="ai-heading">working with AI in design</h1>
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
        <section className="section process-section" aria-labelledby="process-heading">
          <div className="section-content">
            <div className="section-header">
              <h1 id="process-heading">my approach to every project</h1>
              <h2>values and steps that guide my work</h2>
            </div>
            <div className="section-body">
              <div className="process-content">
                <div className="process-step" itemScope itemType="https://schema.org/Action">
                  <h1 itemProp="name">listen</h1>
                  <p itemProp="description">First I listen to the objective and goal. Understanding my clients values goes a long way for me in knowing how to approach a project.</p>
                </div>
                
                <div className="process-step" itemScope itemType="https://schema.org/Action">
                  <h1 itemProp="name">pre planning</h1>
                  <p itemProp="description">Next is pre planning, creating a mock up or storyboard to get the first idea down.</p>
                </div>
                
                <div className="process-step" itemScope itemType="https://schema.org/Action">
                  <h1 itemProp="name">review and prep</h1>
                  <p itemProp="description">Then comes review and prep planning to refine the concept and ensure we're on the right track.</p>
                </div>
                
                <div className="process-step" itemScope itemType="https://schema.org/Action">
                  <h1 itemProp="name">final execution</h1>
                  <p itemProp="description">Finally, the execution phase where everything comes together. Although this varies on the project, it's important for me to make sure my work stands on a secure foundation of understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Data for Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            "name": "Emily Rianna Smith - Creative Portfolio",
            "description": "Multi-disciplinary creative portfolio featuring media production, UX/UI design, and graphic design projects with a focus on human-centered storytelling and empathetic design.",
            "url": "/projects",
            "creator": {
              "@type": "Person",
              "name": "Emily Rianna Smith",
              "jobTitle": "Creative Designer & Media Producer",
              "email": "emily.smiiith@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/your-linkedin-username"
              ],
              "knowsAbout": [
                "Media Production",
                "UX/UI Design", 
                "Graphic Design",
                "Video Editing",
                "Documentary Filmmaking",
                "Brand Identity",
                "User Experience Design"
              ]
            },
            "workExample": projectCategories.map(category => ({
              "@type": "CreativeWork",
              "name": category.title,
              "description": category.description,
              "image": category.image,
              "url": category.link,
              "keywords": category.skills,
              "genre": category.id,
              "creator": {
                "@type": "Person",
                "name": "Emily Rianna Smith"
              }
            })),
            "mainEntity": {
              "@type": "Person",
              "name": "Emily Rianna Smith",
              "description": "Creative designer passionate about human-centered design, storytelling, and authentic connections through visual communication."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Creative professionals, potential clients, collaborators"
            },
            "keywords": [
              "creative portfolio",
              "media production", 
              "UX UI design",
              "graphic design",
              "video editing",
              "documentary film",
              "brand identity",
              "user experience",
              "visual storytelling",
              "human-centered design",
              "empathetic design"
            ]
          })}
        </script>

        {/* Process Methodology Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Emily Rianna Smith's Design Process",
            "description": "A four-step approach to creative projects emphasizing listening, planning, review, and execution.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Listen",
                "text": "First I listen to the objective and goal. Understanding my clients values goes a long way for me in knowing how to approach a project."
              },
              {
                "@type": "HowToStep", 
                "name": "Pre Planning",
                "text": "Next is pre planning, creating a mock up or storyboard to get the first idea down."
              },
              {
                "@type": "HowToStep",
                "name": "Review and Prep", 
                "text": "Then comes review and prep planning to refine the concept and ensure we're on the right track."
              },
              {
                "@type": "HowToStep",
                "name": "Final Execution",
                "text": "Finally, the execution phase where everything comes together. Although this varies on the project, it's important for me to make sure my work stands on a secure foundation of understanding."
              }
            ],
            "author": {
              "@type": "Person",
              "name": "Emily Rianna Smith"
            }
          })}
        </script>
      </div>
      <Footer />
    </>
  );
};

export default Projects;