import React, { useEffect } from 'react';
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
// Import the repeating background image (same as Home page)
import repeatingBackgroundImage from '../assets/images/background1.png';

const Projects = () => {
  const base = import.meta.env.BASE_URL;

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
      buttonText: 'check out more of my projects →'
    },
    {
      id: 'uxui',
      title: 'ux/ui',
      description: 'I love designing experiences that feel natural, clear, and welcoming…',
      image: uxuiImage,
      link: '/ux-ui-design',
      buttonText: 'check out more →'
    },
    {
      id: 'graphic',
      title: 'graphic design',
      description: 'Graphic design is where I really get to play and express creativity…',
      image: graphicImage,
      link: '/graphic-design',
      buttonText: 'check out more →'
    }
  ];

  const processSteps = [
    { 
      title: 'listen', 
      description: 'Every project starts with understanding. I take time to hear your goals, your vision, and what success looks like for you. The best work comes from truly listening.' 
    },
    { 
      title: 'pre-plan', 
      description: 'With your vision in mind, I map out the direction — gathering inspiration, exploring ideas, and building a roadmap that keeps your goals at the center.' 
    },
    { 
      title: 'review', 
      description: 'Collaboration is key. I share progress early and often, welcoming your feedback to make sure we\'re aligned and the work feels right to you.' 
    },
    { 
      title: 'execute', 
      description: 'With a clear plan and your input guiding the way, I bring everything together — crafting a final result that reflects your vision and resonates with your audience.' 
    }
  ];

  return (
    <>
      <ProjectNavbar />

      <div className="projects-container">

        {/* 🎨 Background Effects - Line decorations */}
        <div className="projects-background-effects" aria-hidden="true">
          <img src={line2Image} alt="" className="projects-line1-decoration" />
          <img src={line2Image} alt="" className="projects-line2-decoration" />
        </div>

        <div className="projects-content">

          {/* Section Header Above - Just the h1 */}
          <section className="section intro-header-section">
            <div className="section-content">
              <div className="section-header">
                <h1>creative focus</h1>
              </div>
            </div>
          </section>

          {/* Disciplines Grid - All in One */}
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

          {/* Why These Disciplines Section - After the grid */}
          <section className="section why-disciplines-section">
            <div className="section-content">
              <div className="section-header">
                <h2>why these disciplines?</h2>
              </div>
            </div>
          </section>

          {/* Paragraph Below */}
          <section className="section intro-text-section">
            <div className="section-content">
              <div className="section-body">
                <p>
                  Graphic design, UX/UI, and media all share a common relation to me which allows me to dive deeply into a clients goals and create something meaningful.
                </p>
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
                  With the world turning toward AI-powered tools, I believe the role of a designer becomes even more important. AI can speed up workflows and spark ideas, but it can't replace the empathy, intuition, and intention that a human brings to creative work. I use AI as a collaborator — not a replacement — always ensuring that every project is guided by real understanding, thoughtful decisions, and a personal connection to your vision.
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
                  Having the opportunity to get to know so many people from different backgrounds with totally different design styles and aspirations has taught me so much and inspired me in so many ways. Collaboration and community have been some of the most memorable parts of my journey at BCIT, shaping not just my work but how I see design itself.
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

      <ProjectFooter />
    </>
  );
};

export default Projects;