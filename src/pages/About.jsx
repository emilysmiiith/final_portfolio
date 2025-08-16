import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import imageSvg from '../assets/image.svg';
import meImage from '../assets/images/me.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';

const About = () => {
  // Personal information metadata
  const personalInfo = {
    name: "Emily Rianna Smith",
    jobTitle: "Creative Designer & Visual Storyteller",
    location: "Vancouver, British Columbia, Canada",
    education: "British Columbia Institute of Technology",
    specializations: [
      "UX/UI Design",
      "Graphic Design", 
      "Media Production",
      "Video Editing",
      "Brand Identity",
      "Visual Storytelling",
      "Documentary Filmmaking"
    ],
    coreValues: ["Empathy", "Authenticity", "Collaboration", "Curiosity"],
    creativeTools: [
      "Adobe After Effects",
      "Adobe Photoshop", 
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Figma",
      "Adobe Audition"
    ],
    coreStrengths: [
      "Communication & collaboration",
      "Passion for meaningful work",
      "Creative problem solving",
      "Innovation & adaptability"
    ]
  };

  // Images metadata
  const aboutImages = [
    {
      src: meImage,
      alt: "Professional portrait of Emily Rianna Smith, creative designer and visual storyteller, showing her approachable and empathetic personality",
      title: "Emily Rianna Smith - Creative Designer",
      description: "Professional portrait showcasing Emily's creative and empathetic approach to design"
    },
    {
      src: littleMeImage,
      alt: "Childhood photo of Emily Rianna Smith showing early creative curiosity and artistic exploration that shaped her design journey",
      title: "Early Creative Years",
      description: "Childhood moments that sparked lifelong passion for creativity and design"
    },
    {
      src: travelImage,
      alt: "Emily Rianna Smith traveling through Europe, experiences that influenced her empathetic design approach and global perspective",
      title: "European Adventure",
      description: "Solo backpacking trip through Europe that shaped understanding of human connection and cultural empathy"
    }
  ];

  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>About Emily Rianna Smith - Creative Designer & Visual Storyteller</title>
        <meta name="description" content="Learn about Emily Rianna Smith, a creative designer from Vancouver specializing in empathetic, human-centered design. Discover her journey, values, and approach to meaningful creative work." />
        <meta name="keywords" content="Emily Rianna Smith, about, creative designer, visual storyteller, Vancouver designer, BCIT, empathetic design, human-centered design, UX UI designer, graphic designer, media producer" />
        <meta name="author" content="Emily Rianna Smith" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/about" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Emily Rianna Smith - Creative Designer & Visual Storyteller" />
        <meta property="og:description" content="Creative designer from Vancouver leading with empathy, authenticity, and collaboration. Specializing in UX/UI, graphic design, and media production." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="/about" />
        <meta property="og:image" content="/assets/images/me.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="Emily Rianna Smith Portfolio" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Profile-specific Open Graph */}
        <meta property="profile:first_name" content="Emily" />
        <meta property="profile:last_name" content="Smith" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Emily Rianna Smith - Creative Designer" />
        <meta name="twitter:description" content="Creative designer from Vancouver creating meaningful connections through empathetic, human-centered design." />
        <meta name="twitter:image" content="/assets/images/me.png" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Vancouver, British Columbia" />
        <meta name="geo.position" content="49.2827;-123.1207" />
        <meta name="ICBM" content="49.2827, -123.1207" />
      </head>

      <div className="about-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Decorative SVG background element representing Emily's creative journey and artistic expression"
            className="svg-image-static"
            role="presentation"
            aria-hidden="true"
          />
        </div>

        {/* Background effects */}
        <div className="background-effects" aria-hidden="true">
          <div className="gradient-orb orb-1" role="presentation"></div>
          <div className="gradient-orb orb-2" role="presentation"></div>
          <div className="gradient-orb orb-3" role="presentation"></div>
          <div className="gradient-orb orb-4" role="presentation"></div>
        </div>

        {/* Social Icons */}
        <div className="social-icons" role="navigation" aria-label="Social media and contact links">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Connect with Emily Rianna Smith on LinkedIn"
            title="LinkedIn Profile - Emily Rianna Smith"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
          </a>
          <a 
            href="mailto:emily.smiiith@gmail.com" 
            className="social-icon"
            aria-label="Send email to Emily Rianna Smith"
            title="Email Emily Rianna Smith"
          >
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
          </a>
        </div>

        {/* Main content */}
        <main className="main-content">
          {/* Hero Section */}
          <section className="section hero-section" aria-labelledby="hero-heading">
            <div className="section-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <h1 id="hero-heading">about emily</h1>
                  <h2>{personalInfo.jobTitle}</h2>
                  <p>
                    It's the ability to lead with empathy, stay grounded in authenticity, and collaborate with others that fuels my passion for this work.
                  </p>
                </div>
                <div className="hero-image">
                  <div className="image-container main-portrait">
                    <img 
                      src={aboutImages[0].src} 
                      alt={aboutImages[0].alt}
                      title={aboutImages[0].title}
                      className="portrait-image"
                      loading="eager"
                      itemProp="image"
                      itemScope
                      itemType="https://schema.org/ImageObject"
                      data-description={aboutImages[0].description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Story Section */}
          <section className="section story-section" aria-labelledby="story-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="story-heading">my story</h1>
                <h2>the journey that shaped my creative vision</h2>
              </div>
              
              <div className="section-body">
                <div className="story-grid">
                  <div className="story-text">
                    <p>
                      My journey began when I moved to the West Coast at just six years old, a shift that forever changed my perspective. Leaving Ontario behind meant saying goodbye to familiar faces and places, but it also opened the door to a world of new emotions, experiences, and ways of seeing.
                    </p>
                    <p>
                      I grew up on a small island just off the coast of Vancouver, surrounded by nature and a close-knit community. In the past year, I made the leap to the mainland to further my education and expand my technical skill set at the British Columbia Institute of Technology.
                    </p>
                    <p>
                      At 18, I took a solo backpacking trip through Europe—a pivotal experience that sparked my passion for deeper human connection. Since then, my journey as a creative designer has taken me across the world, where I've learned to infuse emotion and empathy into everything I create.
                    </p>
                  </div>
                  <div className="story-images"> 
                    <div className="image-grid" role="img" aria-label="Personal photos showing Emily's creative journey from childhood to world traveler">
                      <img 
                        src={aboutImages[1].src} 
                        alt={aboutImages[1].alt}
                        title={aboutImages[1].title}
                        className="story-image"
                        loading="lazy"
                        data-description={aboutImages[1].description}
                        itemProp="image"
                        itemScope
                        itemType="https://schema.org/Photograph"
                      />
                      <img 
                        src={aboutImages[2].src} 
                        alt={aboutImages[2].alt}
                        title={aboutImages[2].title}
                        className="story-image"
                        loading="lazy"
                        data-description={aboutImages[2].description}
                        itemProp="image"
                        itemScope
                        itemType="https://schema.org/Photograph"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Values Section */}
          <section className="section values-section" aria-labelledby="values-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="values-heading">my values</h1>
                <h2>the principles that guide my creative work</h2>
              </div>
              
              <div className="section-body">
                <div className="values-content">
                  <p>
                    I lead every project with empathy, staying curious, and authenticity. These values shape the way I listen, collaborate, and create. I believe design is most powerful when it reflects real human experiences—when it's honest, emotionally aware, and connected to a sense of curiosity and purpose.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* My Process Section */}
          <section className="section process-section" aria-labelledby="process-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="process-heading">my process</h1>
                <h2>how I approach every project</h2>
              </div>
              
              <div className="section-body">
                <div className="process-content">
                  <p>
                    My process always starts with listening. I take time to understand the goals, values, and vision of the people I'm working with. That insight becomes the foundation for everything that follows. From there, I explore, experiment, and build with intention—balancing creative freedom with clear communication and collaboration.
                  </p>
                  <p>
                    I stay open, adaptable, and focused on creating work that not only looks great but also resonates and inspires.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* My Skills Section */}
          <section className="section skills-section" aria-labelledby="skills-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="skills-heading">my skills</h1>
                <h2>tools and strengths that bring ideas to life</h2>
              </div>
              
              <div className="section-body">
                <div className="skills-content">
                  <div className="skills-grid">
                    <div className="skills-column">
                      <h1>creative tools</h1>
                      {personalInfo.creativeTools.map((tool, index) => (
                        <p key={index} data-skill-type="software">{tool}</p>
                      ))}
                    </div>
                    <div className="skills-column">
                      <h1>core strengths</h1>
                      {personalInfo.coreStrengths.map((strength, index) => (
                        <p key={index} data-skill-type="soft-skill">{strength}</p>
                      ))}
                    </div>
                  </div>
                  <p>
                    I'm also grateful to be recognized as easy to work with, with endorsements from peers like Lily, Qui, Dat, and Yuhan, who've experienced my dedication and teamwork firsthand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Looking Forward Section */}
          <section className="section forward-section" aria-labelledby="forward-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="forward-heading">looking forward</h1>
                <h2>where my journey takes me next</h2>
              </div>
              
              <div className="section-body">
                <div className="forward-content">
                  <p>
                    With my experience and adventurous, driven spirit, I'm excited by the opportunity to work in an environment where community is valued, freedom is embraced, travel is encouraged, and creativity never stops flowing.
                  </p>
                  <p>
                    I believe I have a lot to offer—feel free to explore my portfolio and see my work in action.
                  </p>
                  <div className="cta-buttons">
                    <a 
                      href="../assets/resume.pdf" 
                      className="cta-button primary" 
                      download
                      aria-label="Download Emily Rianna Smith's resume as PDF"
                      title="Download Resume - Emily Rianna Smith"
                      data-file-type="PDF"
                      data-file-size="2MB"
                      data-document-type="Resume"
                    >
                      download resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Person Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": personalInfo.name,
            "jobTitle": personalInfo.jobTitle,
            "description": "Creative designer and visual storyteller from Vancouver, BC, specializing in empathetic, human-centered design with a focus on meaningful connections and authentic collaboration.",
            "url": "/about",
            "image": "/assets/images/me.png",
            "email": "emily.smiiith@gmail.com",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vancouver",
              "addressRegion": "BC",
              "addressCountry": "CA"
            },
            "sameAs": [
              "https://www.linkedin.com/in/your-linkedin-username"
            ],
            "alumniOf": {
              "@type": "Organization",
              "name": "British Columbia Institute of Technology",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Burnaby",
                "addressRegion": "BC",
                "addressCountry": "CA"
              }
            },
            "knowsAbout": personalInfo.specializations,
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Creative Designer",
              "description": "Multi-disciplinary designer creating emotional connections through empathetic, human-centered design",
              "skills": personalInfo.specializations.concat(personalInfo.creativeTools),
              "occupationLocation": {
                "@type": "Place",
                "name": "Vancouver, British Columbia, Canada"
              }
            },
            "birthPlace": {
              "@type": "Place",
              "name": "Ontario, Canada"
            },
            "homeLocation": {
              "@type": "Place", 
              "name": "Vancouver, British Columbia, Canada"
            },
            "nationality": "Canadian",
            "award": [
              "Peer Recognition for Collaboration",
              "Team Leadership Excellence"
            ],
            "colleague": [
              {
                "@type": "Person",
                "name": "Lily"
              },
              {
                "@type": "Person", 
                "name": "Qui"
              },
              {
                "@type": "Person",
                "name": "Dat"
              },
              {
                "@type": "Person",
                "name": "Yuhan"
              }
            ]
          })}
        </script>

        {/* Professional Profile Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": personalInfo.name
            },
            "about": {
              "@type": "Person",
              "name": personalInfo.name,
              "description": "Creative designer specializing in empathetic, human-centered design"
            },
            "significantLink": [
              "https://www.linkedin.com/in/your-linkedin-username",
              "/projects",
              "/ux-ui-design",
              "/media",
              "/graphic-design"
            ],
            "relatedLink": [
              "../assets/resume.pdf"
            ]
          })}
        </script>

        {/* Resume Document Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DigitalDocument",
            "name": "Emily Rianna Smith - Resume",
            "description": "Professional resume of Emily Rianna Smith, creative designer and visual storyteller specializing in UX/UI design, graphic design, and media production.",
            "url": "../assets/resume.pdf",
            "fileFormat": "application/pdf",
            "creator": {
              "@type": "Person",
              "name": personalInfo.name
            },
            "dateModified": "2025-01-15",
            "genre": "Resume",
            "keywords": [
              "resume",
              "CV",
              "creative designer",
              "UX/UI designer",
              "graphic designer",
              "media producer"
            ],
            "about": {
              "@type": "Person",
              "name": personalInfo.name
            }
          })}
        </script>

        {/* Educational Background Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalCredential",
            "name": "Technical Education in Design",
            "description": "Technical skill development in creative design and media production",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "British Columbia Institute of Technology"
            },
            "about": personalInfo.specializations,
            "holder": {
              "@type": "Person",
              "name": personalInfo.name
            }
          })}
        </script>

        {/* Skills and Competencies Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Emily Rianna Smith - Professional Skills",
            "description": "Comprehensive list of creative, technical, and soft skills",
            "numberOfItems": personalInfo.creativeTools.length + personalInfo.coreStrengths.length,
            "itemListElement": [
              ...personalInfo.creativeTools.map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "DefinedTerm",
                  "name": tool,
                  "description": `Proficiency in ${tool} for creative design work`,
                  "inDefinedTermSet": "Creative Software Tools"
                }
              })),
              ...personalInfo.coreStrengths.map((strength, index) => ({
                "@type": "ListItem",
                "position": personalInfo.creativeTools.length + index + 1,
                "item": {
                  "@type": "DefinedTerm",
                  "name": strength,
                  "description": `Core professional strength: ${strength}`,
                  "inDefinedTermSet": "Professional Competencies"
                }
              }))
            ]
          })}
        </script>
      </div>
      
      <Footer />
    </>
  );
};

export default About;