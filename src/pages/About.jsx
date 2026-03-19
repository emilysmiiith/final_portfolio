import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/global.css';

import meImage from '../assets/images/me.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';
import repeatingBackgroundImage from '../assets/images/background1.png';
import line1Image from '../assets/images/line1.png';
import line2Image from '../assets/images/line2.png';
import me1 from '../assets/images/me1.png';
import me2 from '../assets/images/me2.png';
import me3 from '../assets/images/me3.png';
import me4 from '../assets/images/me4.png';
import me5 from '../assets/images/me5.png';
import me6 from '../assets/images/me6.png';

const About = () => {
  const base = import.meta.env.BASE_URL;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const title = "About – Emily Rianna Smith | Creative Designer & Storyteller";
    const desc = "Learn more about Emily Rianna Smith — a creative designer focused on emotional storytelling, UX/UI, media, and graphic design. From island beginnings to a passion-driven career.";
    const image = "https://www.yourwebsite.com/og/og-about.jpg";

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

  const aboutImages = [
    {
      src: littleMeImage,
      alt: 'Young Emily exploring creativity',
      title: 'Creative Beginnings',
    },
    {
      src: travelImage,
      alt: 'Emily traveling and discovering new perspectives',
      title: 'Exploration & Growth',
    },
  ];

  const personalMedia = [
    { type: 'image', src: me1, alt: 'Emily photo 1' },
    { type: 'image', src: me2, alt: 'Emily photo 2' },
    { type: 'image', src: me6, alt: 'Emily photo 6' },
    { type: 'image', src: me4, alt: 'Emily photo 4' },
    { type: 'image', src: me5, alt: 'Emily photo 5' },
    { type: 'video', src: '/videos/pov.mp4', alt: 'POV video' },
  ];

  const prevSlide = () => setCurrentSlide(i => (i === 0 ? personalMedia.length - 1 : i - 1));
  const nextSlide = () => setCurrentSlide(i => (i === personalMedia.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <div className="about-container">
        <Navbar />

        <div className="about-banner-wrapper" aria-hidden="true">
          <div className="about-banner-image-container"></div>
        </div>

        <div className="background-effects" aria-hidden="true">
          <div
            className="repeating-background-layer"
            style={{ backgroundImage: `url(${repeatingBackgroundImage})` }}
          ></div>
          <img src={line1Image} alt="" className="about-line1-decoration" />
          <img src={line2Image} alt="" className="about-line2-decoration" />
          <img src={line1Image} alt="" className="about-line3-decoration" />
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <main className="main-content">

          {/* HERO SECTION */}
          <section className="section hero-section" aria-labelledby="hero-heading">
            <div className="section-content">
              <div className="hero-content-wrapper">
                <div className="hero-left-column">
                  <div className="hero-text">
                    <h2>creative designer & storyteller</h2>
                    <p>
                      I'm a creator who loves turning visions into something real.
                      I lead with empathy, and I deliver work infused with care and authenticity.
                    </p>
                  </div>
                </div>
                <div className="hero-right-column">
                  <div className="hero-image-container">
                    <img
                      src={meImage}
                      alt="Portrait of Emily Rianna Smith"
                      className="metop-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STORY SECTION */}
          <section className="section story-section" aria-labelledby="story-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="story-heading">My story</h1>
                <h2>from a small island to the big city</h2>
              </div>
              <div className="story-text">
                <p>
                  I grew up on a small island off the coast of Vancouver, where creativity
                  was part of everyday life. I have always been drawn to creating things that resonate with people.
                  It means a lot to me when I can make something that tells a story or sparks an emotion.
                </p>
                <div className="about-collage" role="group" aria-label="Images from Emily's journey">
                  {aboutImages.map((image, index) => (
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
                <p>
                  I moved to the mainland for design school at BCIT, where I am currently studying New Media Design and Web Development, which gave me the technical
                  foundation to bring those stories to life - blending empathy,
                  storytelling, and visual expression into my crafts.
                </p>
                <p>
                  During my gap years, I traveled solo to 14 countries, immersing myself in new cultures
                  and perspectives. These experiences taught me to see the world through different lenses
                  and deepened my appreciation for authentic human connection, something that continues
                  to influence my design work today.
                </p>
              </div>
            </div>
          </section>

          {/* PERSONAL LIFE SECTION */}
          <section className="section personal-section" aria-labelledby="personal-heading">
            <div className="section-content section-content-wide">
              <div className="section-header">
                <h1 id="personal-heading">beyond design</h1>
                <h2>life outside the screen</h2>
              </div>

              {/* DESKTOP: scattered gallery */}
              {!isMobile && (
                <div className="scattered-gallery">
                  {personalMedia.map((item, index) => (
                    <div key={index} className={`scattered-photo photo-${index + 1}`}>
                      <div className="photo-frame">
                        {item.type === 'video' ? (
                          <video autoPlay muted loop playsInline>
                            <source src={item.src} type="video/mp4" />
                          </video>
                        ) : (
                          <img src={item.src} alt={item.alt} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* MOBILE: carousel */}
              {isMobile && (
                <div
                  className="mobile-carousel"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onClick={nextSlide}
                >
                  <div className="carousel-stack">
                    {personalMedia.map((item, i) => {
                      const total = personalMedia.length;
                      // position relative to current: 0=current, 1=next, -1=prev, etc.
                      const offset = ((i - currentSlide) % total + total) % total;
                      const isCurrent = offset === 0;
                      const isNext = offset === 1;
                      const isPrev = offset === total - 1;
                      const isVisible = isCurrent || isNext || isPrev;

                      if (!isVisible) return null;

                      let className = 'carousel-card';
                      if (isCurrent) className += ' card-current';
                      else if (isNext) className += ' card-next';
                      else if (isPrev) className += ' card-prev';

                      return (
                        <div key={i} className={className}>
                          {item.type === 'video' ? (
                            <video autoPlay muted loop playsInline>
                              <source src={item.src} type="video/mp4" />
                            </video>
                          ) : (
                            <img src={item.src} alt={item.alt} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="carousel-dots">
                    {personalMedia.map((_, i) => (
                      <button
                        key={i}
                        className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="personal-text">
                <p>
                  I love to express myself with singing, spending time with people closest to me, and exploring
                  the world with just me and my backpack.
                </p>
                <div className="audio-link">
                  <a
                    href="https://www.youtube.com/watch?v=UhAZkQsE914&t=1186s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="audio-button"
                  >
                    <span className="audio-icon">♪</span>
                    <span className="audio-text">listen to me sing</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* VALUES SECTION */}
          <section className="section values-section" aria-labelledby="values-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="values-heading">values</h1>
                <h2>what drives my creative work</h2>
              </div>
              <p>
                Empathy, authenticity, and curiosity, these three guide my design process.
                They remind me to listen deeply, to create with intention, and to approach
                design as a conversation, not just a visual.
              </p>
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section className="section skills-section" aria-labelledby="skills-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="skills-heading">skills</h1>
                <h2>tools that bring stories to life</h2>
              </div>
              <div className="skills-grid">
                <div className="skills-column">
                  <h1>creative tools</h1>
                  <p>Adobe After Effects</p>
                  <p>Adobe Photoshop</p>
                  <p>Adobe Illustrator</p>
                  <p>Adobe Premiere Pro</p>
                  <p>Figma</p>
                </div>
                <div className="skills-column">
                  <h1>core strengths</h1>
                  <p>Creative problem-solving</p>
                  <p>Collaboration</p>
                  <p>Emotional storytelling</p>
                  <p>Empathetic design thinking</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="section forward-section" aria-labelledby="forward-heading">
            <div className="section-content">
              <div className="section-header">
                <h1 id="forward-heading">looking ahead</h1>
                <h2>continuing the journey</h2>
              </div>
              <p>
                I'm inspired by human stories and emotional design, always striving to
                create something that resonates deeply with others. Let's make something
                meaningful together.
              </p>
              <div className="cta-buttons"></div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;