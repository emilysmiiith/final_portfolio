import React, { useEffect, useRef } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import '../styles/global.css';
import boxImage from '../assets/images/box.png';
import graphicImage from '../assets/images/graphic.png';
import mediaImage from '../assets/images/media.png';
import littleMe2Image from '../assets/images/littleme2.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';

// 1. ADD NEW IMAGE IMPORTS HERE
import topBannerImage from '../assets/images/line_pages-01.png'; 
import repeatingBackgroundImage from '../assets/images/background.png';

// Import the new Navbar component
import Navbar from '../components/Navbar'; 

const Home = () => {
  const videoRef = useRef();

  // Featured projects metadata
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

  // Video autoplay observer
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

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
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

        {/* Open Graph */}
        <meta property="og:title" content="Emily Rianna Smith - Creative Designer" />
        <meta property="og:description" content="Creative designer bringing emotions to life through art. Specializing in UX/UI, media production, and graphic design with empathy and authenticity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/assets/images/emily-portfolio-preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emily Rianna Smith - Creative Designer" />
        <meta property="twitter:description" content="Creative designer bringing emotions to life through empathetic, human-centered design." />
      </head>

      <div className="home-container">

        {/* Navbar */}
        <Navbar /> 

        {/* Top line banner */}
        <div className="top-banner-wrapper" aria-hidden="true">
          <div className="top-banner-image-container"></div>
        </div>

        {/* Background effects */}
        <div className="background-effects" aria-hidden="true">
          <div 
            className="repeating-background-layer"
            style={{ backgroundImage: `url(${repeatingBackgroundImage})` }}
            role="presentation"
          ></div>
          
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="gradient-orb orb-4"></div>
        </div>

        {/* Main content */}
        <main className="main-content">

          {/* Hero Section */}
          <section className="section hero-section" aria-labelledby="hero-heading">
            <div className="section-content">
              <div className="hero-content-wrapper">
                <div className="hero-left-column">
                  <div className="hero-heading-and-prompt-wrapper">
                    <div className="hero-scroll-prompt">
                      <p>Swipe</p>
                      <p>to</p>
                      <p>explore</p>
                    </div>
                    <div className="hero-text">
                      <h1 id="hero-heading" style={{display: 'none'}}>Emily Rianna Smith Creative Designer</h1>
                      <h2>Hi, my name is Emily Rianna Smith</h2>
                    </div>
                  </div>
                </div>
              </div>
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
                  src="/videos/home.mp4"
                  muted
                  loop
                  controls
                  className="home-video"
                  preload="metadata"
                >
                  <track 
                    kind="captions" 
                    src="/assets/videos/home-captions.vtt" 
                    srcLang="en" 
                    label="English Captions"
                  />
                </video>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section features-section" aria-labelledby="features-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="features-heading">features</h1>
                <h2>check out my latest</h2>
              </div>

              <div className="features-collage">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`feature-image feature-${index + 1}`}
                    onClick={navigateToProjects}
                    role="button"
                    tabIndex="0"
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      title={project.title}
                      className="collage-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section about-section" aria-labelledby="about-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="about-heading" className="about-title">A bit about me</h1>
                <h2 className="about-subtitle">from a small island to a big city</h2>
              </div>

              <div className="about-collage">
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

          {/* ✅ FIXED Resume Section */}
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
                    href="/files/Emily-Rianna-Smith-Resume.pdf"
                    download
                    className="resume-button"
                  >
                    <p>download pdf</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
