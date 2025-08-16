import React, { useEffect, useRef } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import imageSvg from '../assets/image.svg';
import homeVideo from '../assets/videos/home.mp4';
import boxImage from '../assets/images/box.png';
import graphicImage from '../assets/images/graphic.png';
import mediaImage from '../assets/images/media.png';
import littleMe2Image from '../assets/images/littleme2.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';

const Home = () => {
  const svgRef = useRef();
  const videoRef = useRef();

  // Project showcase metadata
  const featuredProjects = [
    {
      id: 'project-one',
      image: boxImage,
      title: 'Project One',
      category: 'Video Design',
      description: 'Creative video design project showcasing motion graphics and storytelling',
      alt: 'Video design project featuring creative motion graphics and visual storytelling elements',
      keywords: ['video design', 'motion graphics', 'visual storytelling', 'creative direction']
    },
    {
      id: 'project-two', 
      image: graphicImage,
      title: 'Project Two',
      category: 'UI/UX Design',
      description: 'User interface and experience design focused on human-centered solutions',
      alt: 'UI/UX design project showing user interface mockups and user experience design process',
      keywords: ['UI design', 'UX design', 'user interface', 'user experience', 'human-centered design']
    },
    {
      id: 'project-three',
      image: mediaImage,
      title: 'Project Three', 
      category: 'Brand Design',
      description: 'Brand identity design creating meaningful visual connections',
      alt: 'Brand design project featuring brand identity, logo design, and visual brand elements',
      keywords: ['brand design', 'brand identity', 'logo design', 'visual identity', 'brand strategy']
    }
  ];

  // Personal images metadata
  const personalImages = [
    {
      src: littleMe2Image,
      alt: 'Emily Rianna Smith as a child, showing early creative curiosity and artistic exploration',
      title: 'Early Creative Years',
      description: 'Childhood photo showing the beginning of a creative journey'
    },
    {
      src: littleMeImage,
      alt: 'Young Emily Rianna Smith engaged in creative activities, demonstrating lifelong passion for art and design',
      title: 'Creative Childhood',
      description: 'Young artist discovering the joy of creative expression'
    },
    {
      src: travelImage,
      alt: 'Emily Rianna Smith traveling and exploring different cultures, which influences her empathetic design approach',
      title: 'World Explorer',
      description: 'Travel experiences that shaped design philosophy and cultural understanding'
    }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (svgRef.current) {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const maxScroll = windowHeight * 0.8;
            const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
            
            const clipHeight = progress * 100;
            svgRef.current.style.clipPath = `inset(0 0 ${100 - clipHeight}% 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial state
    if (svgRef.current) {
      svgRef.current.style.clipPath = `inset(0 0 85% 0)`;
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current?.play();
            } else {
              videoRef.current?.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const navigateToProjects = () => {
    window.location.href = '/projects';
  };

  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>Emily Rianna Smith - Creative Designer | UX/UI, Media & Graphic Design</title>
        <meta name="description" content="Emily Rianna Smith is a creative designer specializing in UX/UI design, media production, and graphic design. Creating emotional connections through empathetic, human-centered design." />
        <meta name="keywords" content="Emily Rianna Smith, creative designer, UX UI designer, graphic designer, media producer, video editor, brand designer, human-centered design, empathetic design" />
        <meta name="author" content="Emily Rianna Smith" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Emily Rianna Smith - Creative Designer" />
        <meta property="og:description" content="Creative designer bringing emotions to life through art. Specializing in UX/UI, media production, and graphic design with empathy and authenticity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/assets/images/emily-portfolio-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Emily Rianna Smith Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emily Rianna Smith - Creative Designer" />
        <meta name="twitter:description" content="Creative designer bringing emotions to life through empathetic, human-centered design." />
        <meta name="twitter:image" content="/assets/images/emily-portfolio-preview.jpg" />
        <meta name="twitter:creator" content="@emilyrianna" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <div className="home-container">
        {/* Animated SVG */}
        <div ref={svgRef} className="svg-scroll">
          <img 
            src={imageSvg} 
            alt="Animated decorative path element that reveals on scroll, representing the creative journey"
            className="svg-image"
            role="presentation"
            aria-hidden="true"
          />
        </div>

        {/* Background effects */}
        <div className="background-effects" aria-hidden="true">
          <div className="gradient-orb orb-1" role="presentation"></div>
          <div className="gradient-orb orb-2" role="presentation"></div>
          <div className="gradient-orb orb-3" role="presentation"></div>
        </div>

        {/* Social Icons */}
        <div className="social-icons" role="navigation" aria-label="Social media links">
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
              <div className="hero-text">
                <h1 id="hero-heading">hi!</h1>
                <p>i'm emily rianna</p>
                <h2>i am a creative designer who enjoys bringing emotions to life through art</h2>
                <p>scroll to explore!</p>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section className="section work-section" aria-labelledby="intro-heading">
            <div className="section-content">
              <div className="section-header">
                <h2 id="intro-heading">nice to meet you!</h2>
              </div>

              <div className="video-container">
                <video
                  ref={videoRef}
                  src={homeVideo}
                  muted
                  loop
                  controls
                  className="home-video"
                  preload="metadata"
                  title="Emily Rianna Smith - Creative Designer Introduction Video"
                  aria-label="Introduction video showcasing Emily's creative work and design philosophy"
                  data-title="Creative Designer Introduction"
                  data-description="Personal introduction video showcasing creative journey and design philosophy"
                  data-creator="Emily Rianna Smith"
                  data-type="Introduction Video"
                  data-duration="2:30"
                  itemProp="video"
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <track 
                    kind="captions" 
                    src="/assets/videos/home-captions.vtt" 
                    srcLang="en" 
                    label="English Captions"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section features-section" aria-labelledby="features-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="features-heading">features</h1>
                <h2>showcasing my latest projects</h2>
              </div>
              
              <div className="section-body">
                <div className="projects-grid" role="grid" aria-label="Featured projects grid">
                  {featuredProjects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className="project-card" 
                      onClick={navigateToProjects}
                      role="gridcell"
                      tabIndex="0"
                      aria-label={`View ${project.title} - ${project.category}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          navigateToProjects();
                        }
                      }}
                      itemScope
                      itemType="https://schema.org/CreativeWork"
                    >
                      <div className="project-image-container">
                        <img 
                          src={project.image} 
                          alt={project.alt}
                          title={project.title}
                          className="project-image"
                          loading={index === 0 ? "eager" : "lazy"}
                          itemProp="image"
                          data-category={project.category}
                          data-description={project.description}
                          data-keywords={project.keywords.join(', ')}
                        />
                        <div className="project-overlay">
                          <span className="project-category" itemProp="genre">{project.category}</span>
                          <h1 itemProp="name">{project.title}</h1>
                          <p>View Project →</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section about-section" aria-labelledby="about-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="about-heading">a bit about me</h1>
                <h2>exploring the world taught me how to design with heart</h2>
              </div>
              
              <div className="section-body">
                <div className="about-grid">
                  <div className="about-text">
                    <p>
                     leading with empathy, authenticity and collaboration are reasons why i love doing what i do. 
                    </p>
                  </div>
                  <div className="about-images" role="img" aria-label="Personal photos showing Emily's creative journey">
                    {personalImages.map((image, index) => (
                      <div key={index} className="image-container">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          title={image.title}
                          className="about-image"
                          loading="lazy"
                          data-description={image.description}
                          itemProp="image"
                          itemScope
                          itemType="https://schema.org/Photograph"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Personal Brand Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Emily Rianna Smith",
            "jobTitle": "Creative Designer",
            "description": "Creative designer specializing in UX/UI design, media production, and graphic design. Bringing emotions to life through empathetic, human-centered design.",
            "url": "/",
            "image": "/assets/images/emily-portfolio-preview.jpg",
            "email": "emily.smiiith@gmail.com",
            "sameAs": [
              "https://www.linkedin.com/in/your-linkedin-username"
            ],
            "knowsAbout": [
              "UX/UI Design",
              "Graphic Design", 
              "Media Production",
              "Video Editing",
              "Brand Design",
              "Human-Centered Design",
              "Visual Storytelling",
              "Documentary Filmmaking"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Creative Designer",
              "description": "Multi-disciplinary designer creating emotional connections through art and design",
              "skills": [
                "User Experience Design",
                "User Interface Design",
                "Graphic Design",
                "Video Production",
                "Brand Identity",
                "Adobe Creative Suite",
                "Figma",
                "Human-Centered Design"
              ]
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "/"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "Design Institution"
            }
          })}
        </script>

        {/* Website Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Emily Rianna Smith Portfolio",
            "description": "Creative design portfolio showcasing UX/UI design, media production, and graphic design projects with a focus on empathetic, human-centered solutions.",
            "url": "/",
            "creator": {
              "@type": "Person",
              "name": "Emily Rianna Smith"
            },
            "mainEntity": {
              "@type": "Person",
              "name": "Emily Rianna Smith"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "/projects?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Introduction Video Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Emily Rianna Smith - Creative Designer Introduction",
            "description": "Personal introduction video showcasing Emily's creative journey, design philosophy, and approach to empathetic design.",
            "thumbnailUrl": "/assets/images/home-video-thumbnail.jpg",
            "uploadDate": "2025-01-01",
            "duration": "PT2M30S",
            "contentUrl": homeVideo,
            "embedUrl": homeVideo,
            "creator": {
              "@type": "Person",
              "name": "Emily Rianna Smith"
            },
            "about": {
              "@type": "Person",
              "name": "Emily Rianna Smith"
            },
            "genre": ["Introduction", "Portfolio", "Creative"],
            "keywords": ["creative designer", "introduction", "design philosophy", "empathetic design"],
            "inLanguage": "en",
            "accessibilityFeature": ["captions"]
          })}
        </script>

        {/* Featured Projects Collection */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Creative Projects",
            "description": "Showcase of latest creative design projects spanning video design, UI/UX, and brand design",
            "numberOfItems": featuredProjects.length,
            "itemListElement": featuredProjects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "genre": project.category,
                "keywords": project.keywords,
                "creator": {
                  "@type": "Person",
                  "name": "Emily Rianna Smith"
                }
              }
            }))
          })}
        </script>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;