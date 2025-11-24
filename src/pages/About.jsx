import React, { useEffect } from 'react';
import './About.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/global.css';

import meImage from '../assets/images/me.png';
import littleMeImage from '../assets/images/littleme.png';
import travelImage from '../assets/images/travel.png';
import repeatingBackgroundImage from '../assets/images/background.png';

const About = () => {

  /* -----------------------------------------
      🔥 PAGE-SPECIFIC METADATA
     ----------------------------------------- */
  useEffect(() => {
    const title = "About – Emily Rianna Smith | Creative Designer & Storyteller";
    const desc =
      "Learn more about Emily Rianna Smith — a creative designer focused on emotional storytelling, UX/UI, media, and graphic design. From island beginnings to a passion-driven career.";
    const image = "https://www.yourwebsite.com/og/og-about.jpg";

    document.title = title;
    document.querySelector("meta[name='description']")?.setAttribute("content", desc);
    document.querySelector("meta[property='og:title']")?.setAttribute("content", title);
    document.querySelector("meta[property='og:description']")?.setAttribute("content", desc);
    document.querySelector("meta[property='og:image']")?.setAttribute("content", image);
  }, []);
  /* ----------------------------------------- */

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

  return (
    <>
      <div className="about-container">
        <Navbar />

        {/* Top Banner */}
        <div className="about-banner-wrapper" aria-hidden="true">
          <div className="about-banner-image-container"></div>
        </div>

        {/* Background Effects */}
        <div className="background-effects" aria-hidden="true">
          <div
            className="repeating-background-layer"
            style={{ backgroundImage: `url(${repeatingBackgroundImage})` }}
          ></div>
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
                    <h1 id="hero-heading">about me</h1>
                    <h2>creative designer & storyteller</h2>
                    <p>
                      I’m Emily — a designer driven by empathy, emotion, and connection.
                      I believe design is more than visuals; it’s an opportunity to make
                      people feel seen, understood, and inspired.
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
                <h1 id="story-heading">my story</h1>
                <h2>from a small island to a creative journey</h2>
              </div>

              <div
                className="about-collage"
                role="group"
                aria-label="Images from Emily's journey"
              >
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

              <div className="story-text">
                <p>
                  I grew up on a small island off the coast of Vancouver, where creativity
                  was part of everyday life — painting driftwood, recording videos, and
                  exploring how stories could connect people.
                </p>
                <p>
                  Moving to the mainland for design school at BCIT gave me the technical
                  foundation to bring those stories to life — blending empathy,
                  storytelling, and visual expression into my craft.
                </p>
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
                Empathy, authenticity, and curiosity — these three guide my design process.
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
                I’m inspired by human stories and emotional design — always striving to
                create something that resonates deeply with others. Let’s make something
                meaningful together.
              </p>

              <div className="cta-buttons">
                <a
                  href="/files/Emily-Rianna-Smith-Resume.pdf"
                  download
                  className="cta-button primary"
                  aria-label="Download Emily Rianna Smith's resume PDF"
                >
                  download resume
                </a>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
