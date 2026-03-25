import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

import ProjectNavbar from '../components/ProjectNavbar';
import ProjectFooter from '../components/ProjectFooter';

import '../styles/global.css';

import mediaImage from '../assets/images/media.png';
import uxuiImage from '../assets/images/uxui.png';
import graphicImage from '../assets/images/graphic.png';
import line1Image from '../assets/images/line1.png';
import line2Image from '../assets/images/line2.png';
import class1Image from '../assets/images/class1.jpeg';
import class2Image from '../assets/images/class2.jpeg';
import repeatingBackgroundImage from '../assets/images/background1.png';

// Once you have a thumbnail, add it to assets/images and uncomment the line below:
import sealuxeImage from '../assets/images/sealuxe.jpg';

const Projects = () => {
  const base = import.meta.env.BASE_URL;

  const [sealuxeOpen, setSealuxeOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSealuxeOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = sealuxeOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sealuxeOpen]);

  // ============================
  // PAGE-SPECIFIC METADATA
  // ============================
  useEffect(() => {
    const title = "Projects – Emily Rianna Smith | UX/UI · Media · Graphic Design";
    const desc = "Explore the full creative portfolio of Emily Rianna Smith — featuring UX/UI design, media & editing, and graphic design projects focused on emotion-driven storytelling and human-centered design.";
    const image = "https://www.yourwebsite.com/og/og-projects.jpg";
    const canonical = "https://www.yourwebsite.com/projects";

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

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, []);

  // Apply projects-page body class
  useEffect(() => {
    document.body.classList.add('projects-page');
    return () => document.body.classList.remove('projects-page');
  }, []);

  const disciplines = [
    {
      id: 'media',
      title: 'media and editing',
      description: "I'm fascinated by how sound, motion, and visuals come together to tell a story…",
      image: mediaImage,
      link: '/media',
    },
    {
      id: 'uxui',
      title: 'ux/ui',
      description: 'I love designing experiences that feel natural, clear, and welcoming…',
      image: uxuiImage,
      link: '/ux-ui-design',
    },
    {
      id: 'graphic',
      title: 'graphic design',
      description: 'Graphic design is where I really get to play and express creativity…',
      image: graphicImage,
      link: '/graphic-design',
    },
  ];

  const processSteps = [
    {
      title: 'listen',
      description:
        'Every project starts with understanding. I take time to hear your goals, your vision, and what success looks like for you. The best work comes from truly listening.',
    },
    {
      title: 'pre-plan',
      description:
        'With your vision in mind, I map out the direction — gathering inspiration, exploring ideas, and building a roadmap that keeps your goals at the center.',
    },
    {
      title: 'review',
      description:
        "Collaboration is key. I share progress early and often, welcoming your feedback to make sure we're aligned and the work feels right to you.",
    },
    {
      title: 'execute',
      description:
        'With a clear plan and your input guiding the way, I bring everything together — crafting a final result that reflects your vision and resonates with your audience.',
    },
  ];

  const sealuxeSections = [
    {
      label: '01 — UX Research & Design',
      body: "Started with a full UX audit and user flow mapping to identify pain points on the existing site. Designed Figma mockups for a refreshed layout focused on clearer navigation, stronger conversion paths, and a look that matched the brand's natural, coastal identity.",
    },
    {
      label: '02 — Shopify Development',
      body: "Migrated and rebuilt 160+ products into a new Shopify theme, organizing collections with tags, fixing broken links and 404 errors using Ahrefs, and ensuring layout consistency across all pages. Also set up and debugged a Klaviyo email flow that wasn't triggering correctly.",
    },
    {
      label: '03 — Brand Photoshoot',
      body: 'Helped plan and execute a brand photoshoot at Crescent Beach in White Rock. Assisted with styling, prop staging, and content direction. Post-shoot, edited all images in Adobe Lightroom for web optimization and integrated them into the live site.',
    },
    {
      label: '04 — Key Takeaways',
      body: "This internship taught me how to work closely with a client through constant iteration. I learned that confidence in your design decisions matters — if you don't back your choices with reasoning, clients will override them. I left with real proof that I can run a full website project independently.",
    },
  ];

  return (
    <>
      <ProjectNavbar />

      <div className="projects-container">

        {/* Background line decorations */}
        <div className="projects-background-effects" aria-hidden="true">
          <img src={line2Image} alt="" className="projects-line1-decoration" />
          <img src={line2Image} alt="" className="projects-line2-decoration" />
        </div>

        <div className="projects-content">

          {/* Section Header */}
          <section className="section intro-header-section">
            <div className="section-content">
              <div className="section-header">
                <h1>creative focus</h1>
              </div>
            </div>
          </section>

          {/* Disciplines Grid */}
          <section className="section disciplines-section">
            <div className="section-content section-content-wide">
              <div className="disciplines-grid">
                {disciplines.map((discipline) => (
                  <Link key={discipline.id} to={discipline.link} className="discipline-card">
                    <div className="discipline-image">
                      <img src={discipline.image} alt={discipline.title} />
                      <div className="discipline-overlay">
                        <span className="discipline-arrow">→</span>
                      </div>
                    </div>
                    <div className="discipline-info">
                      <h3>{discipline.title}</h3>
                      <p>{discipline.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why These Disciplines */}
          <section className="section why-disciplines-section">
            <div className="section-content">
              <div className="section-header">
                <h2>why these disciplines?</h2>
              </div>
            </div>
          </section>

          {/* Intro paragraph */}
          <section className="section intro-text-section">
            <div className="section-content">
              <div className="section-body">
                <p>
                  Graphic design, UX/UI, and media all share a common relation to me which allows me to
                  dive deeply into a clients goals and create something meaningful.
                </p>
              </div>
            </div>
          </section>

          {/* ================================
              SEALUXE INTERNSHIP PROJECT
              ================================ */}
          <section className="section sealuxe-section">
            <div className="section-content">
              <div className="section-header">
                <h1>internship project</h1>
                <h2>sealuxe — ux &amp; web development</h2>
              </div>
              <div className="section-body">
                <p>
                  A real-world client project completed during my 9-week internship — redesigning and
                  rebuilding a live Shopify website from research to launch.
                </p>

                <div
                  className="sealuxe-card"
                  onClick={() => setSealuxeOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSealuxeOpen(true);
                  }}
                  aria-label="Open Sealuxe internship project"
                >
                  {/* Card thumbnail */}
                  <div className="sealuxe-card-thumb">
                    <img src={sealuxeImage} alt="Sealuxe website" />
                    {/*
                      Once you have a screenshot saved as src/assets/images/sealuxe.png,
                      replace the placeholder div with:
                      <img src={sealuxeImage} alt="Sealuxe website" />
                    */}
                    <div className="sealuxe-thumb-placeholder" />
                    <div className="sealuxe-card-overlay">
                      <span className="sealuxe-card-icon">↗</span>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="sealuxe-card-info">
                    <div className="sealuxe-tags">
                      <span>UX Research</span>
                      <span>Shopify</span>
                      <span>Content Creation</span>
                    </div>
                    <h3>sealuxe</h3>
                    <p>UX Design · Shopify Development · Brand Photoshoot · 9-Week Internship</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>my approach to every project</h1>
                <h2>values and steps that guide my work</h2>
              </div>
              <div className="section-body">
                <div className="process-content">
                  {processSteps.map((step, index) => (
                    <div key={index} className="process-step">
                      <h1>{step.title}</h1>
                      <p>{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AI Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h1>working with AI in design</h1>
                <h2>the human touch in an AI world</h2>
              </div>
              <div className="section-body">
                <p>
                  With the world turning toward AI-powered tools, I believe the role of a designer becomes
                  even more important. AI can speed up workflows and spark ideas, but it can't replace the
                  empathy, intuition, and intention that a human brings to creative work. I use AI as a
                  collaborator — not a replacement — always ensuring that every project is guided by real
                  understanding, thoughtful decisions, and a personal connection to your vision.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Collaboration Section */}
      <section className="section collaboration-section">
        <div className="section-content">
          <div className="section-header">
            <h1>collaboration and inspiration</h1>
            <h2>my time at BCIT</h2>
          </div>
          <div className="section-body">
            <p>
              Having the opportunity to get to know so many people from different backgrounds with totally
              different design styles and aspirations has taught me so much and inspired me in so many
              ways. Collaboration and community have been some of the most memorable parts of my journey
              at BCIT, shaping not just my work but how I see design itself.
            </p>
            <div className="collaboration-images">
              <div className="collaboration-image">
                <img src={class1Image} alt="BCIT classmates collaboration" />
              </div>
              <div className="collaboration-image">
                <img src={class2Image} alt="BCIT design community" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          SEALUXE MODAL
          ================================ */}
      {sealuxeOpen && (
        <div
          className="sl-overlay"
          onClick={() => setSealuxeOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Sealuxe project details"
        >
          <div className="sl-modal" onClick={(e) => e.stopPropagation()}>

            <button
              className="sl-close"
              onClick={() => setSealuxeOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="sl-inner">

              {/* Title */}
              <div className="sl-header">
                <h2>sealuxe</h2>
                <p className="sl-subtitle">
                  UX Design · Shopify Development · Content Creation · 9-Week Internship
                </p>
              </div>

              {/* Before / After videos */}
              <div className="sl-ba-row">
                <div className="sl-ba-block">
                  <span className="sl-ba-label">before</span>
                  <div className="sl-video-box">
                    {
                   <video src="/videos/sealuxe-before.mp4" controls playsInline />
                    }
                    <span className="sl-video-hint">add before video here</span>
                  </div>
                </div>
                <div className="sl-ba-block">
                  <span className="sl-ba-label">after</span>
                  <div className="sl-video-box">
                    {
                     <video src="/videos/sealuxe-after.mp4" controls playsInline />
                    }
                    <span className="sl-video-hint">add after video here</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="sl-desc">
                A 9-week internship with Sealuxe, a Canadian ocean-inspired skincare brand based in BC.
                I worked directly with the founder to redesign and rebuild their Shopify website —
                handling everything from UX research and Figma mockups to product migration, SEO fixes,
                and a brand photoshoot at Crescent Beach.
              </p>

              {/* Detail chips */}
              <div className="sl-details">
                {[
                  ['type', 'Internship Project'],
                  ['year', '2025'],
                  ['duration', '9 Weeks'],
                  ['role', 'UX/UI Designer & Web Assistant'],
                  ['tools', 'Figma · Shopify · Ahrefs · Lightroom · Klaviyo'],
                ].map(([key, val]) => (
                  <div key={key} className="sl-chip">
                    <span className="sl-chip-key">{key}</span>
                    <span className="sl-chip-val">{val}</span>
                  </div>
                ))}
              </div>

              {/* Project sections */}
              <div className="sl-sections">
                {sealuxeSections.map((s, i) => (
                  <div key={i} className="sl-section">
                    <h4>{s.label}</h4>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      <ProjectFooter />
    </>
  );
};

export default Projects;