import React, { useEffect, useRef } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import '../styles/global.css';
import homeVideo from '../assets/videos/home.mp4';
import boxImage from '../assets/images/box.png';
import graphicImage from '../assets/images/graphic.png';
import mediaImage from '../assets/images/media.png';
import littleMe2Image from '../assets/images/littleme2.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';

// 1. ADD NEW IMAGE IMPORTS HERE
import topBannerImage from '../assets/images/line_pages-01.png'; 
import repeatingBackgroundImage from '../assets/images/background.png'; // <-- NEW IMAGE IMPORT

// Import the new Navbar component (Ensure path is correct)
import Navbar from '../components/Navbar'; 

const Home = () => {
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
    }
    ,
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
        <meta property="twitter:description" content="Creative designer bringing emotions to life through empathetic, human-centered design." />
        <meta property="twitter:image" content="/assets/images/emily-portfolio-preview.jpg" />
        <meta property="twitter:creator" content="@emilyrianna" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <div className="home-container">
        
        {/* --- NAVBAR INSERTION --- */}
        <Navbar /> 
        
      {/* 2. RESPONSIVE LINE BANNER IMAGE (Aligned with Content Width) */}
<div className="top-banner-wrapper" aria-hidden="true">
  <div className="top-banner-image-container"></div>
</div>


        
        {/* Background effects */}
        <div className="background-effects" aria-hidden="true">
          
          {/* --- NEW REPEATING BACKGROUND LAYER (ABOVE ORBS) --- */}
          <div 
            className="repeating-background-layer"
            style={{ backgroundImage: `url(${repeatingBackgroundImage})` }} // Apply image URL
            role="presentation"
          ></div>
          {/* --------------------------------------------------- */}
          
          <div className="gradient-orb orb-1" role="presentation"></div>
          <div className="gradient-orb orb-3" role="presentation"></div>
        </div>

        {/* Main content */}
        <main className="main-content">
          {/* Hero Section */}
          <div class="background-effects">
  <div class="gradient-orb orb-1"></div>
  <div class="gradient-orb orb-2"></div>
  <div class="gradient-orb orb-3"></div>
</div>


     <section className="section hero-section" aria-labelledby="hero-heading">
            <div className="section-content"> 
              
              <div className="hero-content-wrapper"> 

                {/* Text Side (Center) */}
                <div className="hero-left-column">
                  
                  <div className="hero-heading-and-prompt-wrapper">
                      
                      {/* 1. SCROLL PROMPT (Left/Top Position) */}
                      <div className="hero-scroll-prompt">
                        {/* The stacked text content */}
                        <p>Swipe</p>
                        <p>to</p>
                        <p>explore</p>
                      </div>

                      {/* 2. MAIN HEADING (Right/Bottom Position) */}
                      <div className="hero-text">
                        <h1 id="hero-heading" style={{display: 'none'}}>Emily Rianna Smith Creative Designer</h1> 
                        <h2>Hi, my name is Emily Rianna Smith</h2>
                      </div>
                      
                  </div>
                  
                </div> {/* End hero-left-column */}
                
                
              </div> {/* End hero-content-wrapper */}
            </div>
          </section>



          {/* Work Section */}
          <section className="section work-section" aria-labelledby="intro-heading">
            <div className="section-content">
              <div className="section-header">
                <h2 id="intro-heading">I am a creative designer who is looking for resonance to provoke curiosity.</h2>
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
 {/* Features Section (Artistic Collage Layout) */}
<section className="section features-section" aria-labelledby="features-heading">
  <div className="section-content">
    <div className="section-header">
      <h1 id="features-heading">features</h1>
      <h2>check out my latest</h2>
    </div>

    <div className="features-collage" role="group" aria-label="Artistic project collage">
      {featuredProjects.map((project, index) => (
        <div
          key={project.id}
          className={`feature-image feature-${index + 1}`}
          onClick={navigateToProjects}
          role="button"
          tabIndex="0"
          aria-label={`View ${project.title} - ${project.category}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigateToProjects();
          }}
        >
          <img
            src={project.image}
            alt={project.alt}
            title={project.title}
            className="collage-img"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  </div>
</section>


       {/* About Section (Artistic Collage Layout) */}
<section className="section about-section" aria-labelledby="about-heading">
  <div className="section-content">
    <div className="section-header">
      <h1 id="about-heading" className="about-title">A bit about me</h1>
      <h2 className="about-subtitle">from a small island to a big city</h2>
    </div>

    <div className="about-collage" role="group" aria-label="Personal photos showing Emily's creative journey">
      {personalImages.map((image, index) => (
        <div key={index} className={`about-image-wrapper about-${index + 1}`}>
          <img 
            src={image.src}
            alt={image.alt}
            title={image.title}
            className="about-image"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

          {/* ===== RESUME DOWNLOAD SECTION ===== */}
<section className="section resume-section" aria-labelledby="resume-heading">
  <div className="section-content">
    <div className="resume-card">
      <div className="resume-text">
        <h1 id="resume-heading">download my resume</h1>
        <h2>take a closer look at my creative journey</h2>
        <p>
          Explore my experience, design philosophy, and creative approach — all in one beautifully crafted document.
        </p>
      </div>

      <div className="resume-download">
        <a 
          href="/assets/files/Emily-Rianna-Smith-Resume.pdf" 
          download 
          className="resume-button"
          aria-label="Download Emily Rianna Smith's resume in PDF format"
        >
          <p>download pdf</p>
        </a>
      </div>
    </div>
  </div>
</section>

        </main>

        {/* JSON-LD Scripts remain the same */}
        <script type="application/ld+json">
          {/* ... (JSON-LD scripts remain here) ... */}
        </script>
        <script type="application/ld+json">
          {/* ... (JSON-LD scripts remain here) ... */}
        </script>
        <script type="application/ld+json">
          {/* ... (JSON-LD scripts remain here) ... */}
        </script>
        <script type="application/ld+json">
          {/* ... (JSON-LD scripts remain here) ... */}
        </script>
      </div>
      
      <Footer />
    </>
  );
};

// The script tag below won't execute in a React component file, 
// but the CSS global style `html { scroll-behavior: smooth; }` handles this.

export default Home; 