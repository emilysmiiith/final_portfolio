// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Footer from '../components/Footer';

import boxImage from '../assets/images/box.png';
import graphicImage from '../assets/images/graphic.png';
import mediaImage from '../assets/images/media.png';
import littleMe2Image from '../assets/images/littleme2.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';
import repeatingBackgroundImage from '../assets/images/background1.png';

const Home = () => {
  const videoRef = useRef();
  const [spinItems, setSpinItems] = useState([]);

  /* -----------------------------------------
     GENERATE SPINNING BACKGROUND ITEMS
  ----------------------------------------- */
  useEffect(() => {
    const generateItems = () => {
      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        5000
      );
      const pageWidth = window.innerWidth || 1400;
      
      const cellSize = 138; // 130px cell + 8px gap
      const cols = Math.ceil(pageWidth / cellSize) + 2;
      const rows = Math.ceil(pageHeight / cellSize) + 2;
      const total = cols * rows;
      
      const items = Array.from({ length: total }, (_, i) => ({ id: i }));
      setSpinItems(items);
    };

    generateItems();
    
    // Regenerate on resize
    window.addEventListener('resize', generateItems);
    return () => window.removeEventListener('resize', generateItems);
  }, []);

  /* -----------------------------------------
     PAGE META
  ----------------------------------------- */
  useEffect(() => {
    const desc =
      "Welcome to the portfolio of Emily Rianna Smith — a creative designer specializing in UX/UI design, media production, editing, and graphic design.";

    document.title = "Home – Emily Rianna Smith | Creative Designer";

    // Description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", desc);

    // OG Title
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", "Home – Emily Rianna Smith");

    // OG Description
    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", desc);

    // OG Image
    let ogImage = document.querySelector("meta[property='og:image']");
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", "https://www.yourwebsite.com/og/og-home.jpg");
  }, []);

  /* -----------------------------------------
     AUTOPLAY VIDEO LOGIC
  ----------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
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

  const featuredProjects = [
    {
      id: 'project-one',
      image: boxImage,
      title: 'Project One',
      alt: 'Video design collage image',
    },
    {
      id: 'project-two',
      image: graphicImage,
      title: 'Project Two',
      alt: 'UI/UX design collage image',
    },
    {
      id: 'project-three',
      image: mediaImage,
      title: 'Project Three',
      alt: 'Brand design collage image',
    }
  ];

  const personalImages = [
    { src: littleMe2Image, alt: 'Childhood photo of Emily Rianna Smith' },
    { src: littleMeImage, alt: 'Young Emily engaging in creative work' },
    { src: travelImage, alt: 'Emily traveling and exploring new cultures' }
  ];

  return (
    <>
      <div className="home-container">

        {/* 🎨 Background Effects */}
        <div className="home-background-effects" aria-hidden="true">
          <div className="repeating-background-layer">
            {spinItems.map((item) => (
              <div
                key={item.id}
                className="spin-image"
                style={{ backgroundImage: `url(${repeatingBackgroundImage})` }}
              />
            ))}
          </div>
          <div className="home-gradient-orb home-orb-1"></div>
          <div className="home-gradient-orb home-orb-2"></div>
          <div className="home-gradient-orb home-orb-3"></div>
          <div className="home-gradient-orb home-orb-4"></div>
        </div>

        <main className="home-main-content">

          {/* HERO SECTION */}
          <section className="home-section home-hero-section">
            <div className="home-section-content">
              <div className="home-hero-content-wrapper">
                <div className="home-hero-left-column">
                
                  <div className="home-hero-heading-and-prompt-wrapper">

                    <div className="home-hero-text">
                     <h2>
  Emily Rianna Smith
  <br />
  <span className="hero-subtitle">media ·graphics</span>
</h2>
                    </div>

                    <div className="home-hero-scroll-prompt">
                      <p>swipe</p>
                      <p>to</p>
                      <p>explore</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* INTRO / VIDEO */}
          <section className="home-section home-work-section">
            <div className="home-section-content">
              <div className="home-section-header">
                <h2>
                
                </h2>
              </div>

              <div className="home-video-container">
                <video
                  ref={videoRef}
                  src="/videos/home.mp4"
                  muted
                  loop
                  controls
                  preload="metadata"
                  className="home-video"
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

          {/* FEATURES SECTION */}
          <section className="home-section home-features-section">
            <div className="home-section-content">
              <div className="home-section-header">
                <h1>features</h1>
                <h2>check out my latest</h2>
              </div>

              <div className="home-features-collage">
                {featuredProjects.map((p, i) => (
                  <div
                    key={p.id}
                    className={`home-feature-image home-feature-${i + 1}`}
                    onClick={navigateToProjects}
                  >
                    <img src={p.image} alt={p.alt} className="home-collage-img" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="home-section home-about-section">
            <div className="home-section-content">
              <div className="home-section-header">
                <h1 className="home-about-title">A bit about me</h1>
                <h2 className="home-about-subtitle">from a small island to a big city</h2>
              </div>

              <div className="home-about-collage">
                {personalImages.map((img, index) => (
                  <div key={index} className={`home-about-image-wrapper home-about-${index + 1}`}>
                    <img src={img.src} alt={img.alt} className="home-about-image" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RESUME DOWNLOAD */}
          <section className="home-section home-resume-section">
            <div className="home-section-content">
              <div className="home-resume-card">
                <div className="home-resume-text">
                  <h1>download my resume</h1>
                  <h2>take a closer look at my creative journey</h2>
                  <p>
                    Explore my experience, design philosophy, and creative approach —
                    all in one beautifully crafted document.
                  </p>
                </div>

                <div className="home-resume-download">
                  <a
                    href="/files/Emily-Rianna-Smith-Resume.pdf"
                    download
                    className="home-resume-button"
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