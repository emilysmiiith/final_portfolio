import React, { useEffect, useState, useRef } from 'react';
import './GraphicDesign.css';
import '../styles/global.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/ProjectFooter';
import line2Image from '../assets/images/line2.png';

import logoboxImage from '../assets/images/logobox.png';
import boxImage from '../assets/images/box.png';
import flatImage from '../assets/images/flat.png';
import badImage from '../assets/images/bad.png';
import graphicImage from '../assets/images/graphic.png';
import reneighImage from '../assets/images/reneigh.png';

import hibiskiPDF from '/slides/StyleGuideHibiski.pdf';

import sketch1 from '../assets/images/Untitled-4-01.svg';
import sketch2 from '../assets/images/Untitled-4-02.svg';
import sketch3 from '../assets/images/Untitled-4-03.svg';
import sketch5 from '../assets/images/Untitled-4-05.svg';
import sketch6 from '../assets/images/Untitled-4-06.svg';
import sketch7 from '../assets/images/Untitled-4-07.svg';
import sketch8 from '../assets/images/Untitled-4-08.svg';
import sketch9 from '../assets/images/Untitled-4-09.svg';

const GraphicDesign = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIllustration, setActiveIllustration] = useState(null);
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
    const title = "Graphic Design – Emily Rianna Smith | Brand, Print & Packaging";
    const desc = "Explore the graphic design work of Emily Rianna Smith — packaging design, brand identity, print graphics, motion-enhanced visuals, and thoughtful visual storytelling.";
    const image = "https://www.yourwebsite.com/og/og-graphic-design.jpg";
    document.title = title;

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) { metaDescription = document.createElement("meta"); metaDescription.setAttribute("name", "description"); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute("content", desc);

    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) { ogTitle = document.createElement("meta"); ogTitle.setAttribute("property", "og:title"); document.head.appendChild(ogTitle); }
    ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) { ogDesc = document.createElement("meta"); ogDesc.setAttribute("property", "og:description"); document.head.appendChild(ogDesc); }
    ogDesc.setAttribute("content", desc);

    let ogImage = document.querySelector("meta[property='og:image']");
    if (!ogImage) { ogImage = document.createElement("meta"); ogImage.setAttribute("property", "og:image"); document.head.appendChild(ogImage); }
    ogImage.setAttribute("content", image);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') { setActiveProject(null); setActiveIllustration(null); }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (activeProject || activeIllustration) ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeProject, activeIllustration]);

  const illustrations = [
    { src: sketch1, alt: 'Floral sketch' },
    { src: sketch2, alt: 'Nature sketch' },
    { src: sketch3, alt: 'Portrait sketch' },
    { src: sketch5, alt: 'Figure sketch' },
    { src: sketch6, alt: 'Couple sketch' },
    { src: sketch7, alt: 'Botanical sketch' },
    { src: sketch8, alt: 'Character sketch' },
    { src: sketch9, alt: 'Line art' },
  ];

  const nextSlide = () => setCurrentSlide(i => (i === illustrations.length - 1 ? 0 : i + 1));
  const prevSlide = () => setCurrentSlide(i => (i === 0 ? illustrations.length - 1 : i - 1));
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const projects = [
    {
      id: 1, title: "Serene Sip", subtitle: "Box & Brand Design", thumbnail: boxImage,
      images: [{ src: logoboxImage, label: "Logo Design" }, { src: boxImage, label: "Box Design" }, { src: flatImage, label: "Flat Design" }],
      description: "For this project, I designed packaging for a fictional espresso machine brand called Serene Sip. Created in Adobe Photoshop with animation in After Effects, the goal was to bring the design to life while maintaining brand consistency and visual storytelling.",
      goal: "Create a packaged box design using Adobe Photoshop and Adobe After Effects, showcasing both graphic and motion design skills through cohesive branding and presentation.",
      details: { type: "Packaging & Motion", year: "2024", duration: "30 hours", timeline: "Nov 15 - Dec 15", role: "Designer", tools: "Photoshop, After Effects" },
      sections: [
        { title: "Objective", content: "Demonstrate packaging and motion design skills through a fictional brand concept that conveys calm, modern design and visual appeal." },
        { title: "Research & Concept", content: "I researched coffee packaging trends and built a cohesive identity system meant to feel modern, warm, and calm." },
        { title: "Design Approach", content: "I combined cohesive branding with clean layout, subtle color palettes, and minimal typography." },
        { title: "Takeaways", content: "This project strengthened my understanding of brand systems and how motion can elevate packaging design." }
      ]
    },
    {
      id: 2, title: "Redesign Poster", subtitle: "Event Poster Redesign", thumbnail: graphicImage,
      images: [{ src: badImage, label: "Original Design" }, { src: graphicImage, label: "Final Redesign" }],
      description: "I redesigned a BCIT poster for a 60s-themed pancake breakfast, transforming a flat design into one that felt warm, inviting, and nostalgic.",
      goal: "Redesign an existing poster to improve visual hierarchy, clarity, and theme alignment.",
      details: { type: "Print Design", year: "2024", duration: "11 hours", timeline: "Nov 4 - Nov 15", role: "Designer", tools: "Adobe Photoshop" },
      sections: [
        { title: "Objective", content: "Improve layout, color, and readability while creating stronger emotional engagement." },
        { title: "Design Approach", content: "Used warm tones and typographic contrast to strengthen focus and hierarchy." },
        { title: "Takeaways", content: "Showed me how color psychology and layout decisions significantly improve visual clarity." }
      ]
    },
    {
      id: 3, title: "Reneigh Logo", subtitle: "Brand Identity & Logo Design", thumbnail: reneighImage,
      images: [{ src: reneighImage, label: "Final Logo Design" }],
      description: "Created a distinctive logo for Reneigh, focusing on modern elegance and memorable brand identity.",
      goal: "Design a unique and versatile logo that effectively represents the Reneigh brand identity and works across multiple platforms and media.",
      details: { type: "Logo Design", year: "2024", duration: "15 hours", timeline: "Oct 2024", role: "Designer", tools: "Adobe Illustrator" },
      sections: [
        { title: "Objective", content: "Create a memorable logo that captures the brand's personality while maintaining simplicity and scalability." },
        { title: "Design Approach", content: "Explored multiple concepts, focusing on clean lines, balanced composition, and timeless appeal." },
        { title: "Takeaways", content: "This project reinforced the importance of iterative design and how subtle refinements can significantly impact a logo's effectiveness." }
      ]
    },
    {
      id: 4, title: "Hibiski Style Guide", subtitle: "Brand Identity & Guidelines", thumbnail: hibiskiPDF,
      isPDF: true, pdfSrc: hibiskiPDF, usePDFPreview: true,
      description: "A comprehensive brand style guide for Hibiski, featuring logo usage, color palette, typography, and brand guidelines.",
      goal: "Create a complete brand style guide that establishes clear visual standards and usage guidelines.",
      details: { type: "Brand Identity", year: "2024", duration: "20 hours", timeline: "Oct - Nov 2024", role: "Designer", tools: "Adobe Illustrator, InDesign" },
      sections: [
        { title: "Objective", content: "Develop a cohesive brand identity system with clear guidelines for logo usage, color, and typography." },
        { title: "Design Approach", content: "Created a structured style guide that balances flexibility with consistency." },
        { title: "Takeaways", content: "This project deepened my understanding of brand systems and the importance of clear documentation." }
      ]
    }
  ];

  return (
    <>
      <ProjectNavbar />
      <div className="graphic-container">

        <div className="graphic-background-effects" aria-hidden="true">
          <img src={line2Image} alt="" className="graphic-line1-decoration" />
          <img src={line2Image} alt="" className="graphic-line2-decoration" />
        </div>

        <div className="graphic-content">

          {/* Illustration Section */}
          <div className="illustration-collage-section">
            <div className="section-header">
              <h1>illustration style</h1>
              <h2>hand-drawn linework</h2>
            </div>

            {/* DESKTOP: original scattered collage */}
            {!isMobile && (
              <div className="sketch-collage">
                {illustrations.map((item, index) => (
                  <div key={index} className={`sketch-item sketch-${index + 1}`} onClick={() => setActiveIllustration(item.src)}>
                    <img src={item.src} alt={item.alt} />
                  </div>
                ))}
              </div>
            )}

            {/* MOBILE: stacked carousel, tap to advance, tap current to expand */}
            {isMobile && (
              <div
                className="mobile-carousel"
                onClick={nextSlide}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="carousel-stack">
                  {illustrations.map((item, i) => {
                    const total = illustrations.length;
                    const offset = ((i - currentSlide) % total + total) % total;
                    const isCurrent = offset === 0;
                    const isNext = offset === 1;
                    const isPrev = offset === total - 1;
                    if (!isCurrent && !isNext && !isPrev) return null;

                    let cardClass = 'carousel-card';
                    if (isCurrent) cardClass += ' card-current';
                    else if (isNext) cardClass += ' card-next';
                    else cardClass += ' card-prev';

                    return (
                      <div
                        key={i}
                        className={cardClass}
                      >
                        <img src={item.src} alt={item.alt} />
                      </div>
                    );
                  })}
                </div>

                <div className="carousel-dots" onClick={e => e.stopPropagation()}>
                  {illustrations.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                      aria-label={`Go to illustration ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Illustration Modal */}
          {activeIllustration && (
            <div className="illustration-modal-overlay" onClick={() => setActiveIllustration(null)}>
              <div className="illustration-modal" onClick={(e) => e.stopPropagation()}>
                <button className="illustration-modal-close" onClick={() => setActiveIllustration(null)}>×</button>
                <img src={activeIllustration} className="illustration-modal-image" alt="Illustration" />
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <section className="section intro-section">
            <div className="section-content">
              <div className="section-header">
                <h1>graphic design</h1>
                <h2>click to explore each project</h2>
              </div>
              <div className="section-body">
                <div className="projects-grid">
                  {projects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => setActiveProject(project)}>
                      <div className="project-card-image">
                        {project.usePDFPreview ? (
                          <iframe src={`${project.thumbnail}#page=1`} title={`${project.title} preview`} className="pdf-preview-thumbnail" />
                        ) : (
                          <img src={project.thumbnail} alt={project.title} />
                        )}
                        <div className="project-card-overlay">
                          <span className="project-card-icon">↗</span>
                        </div>
                      </div>
                      <div className="project-card-info">
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-content">
              <div className="section-header"><h1>visual storytelling</h1><h2>about my work</h2></div>
              <div className="section-body"><p>Graphic design is where I really get to play and express creativity. Whether it's working on brand identities, packaging, print, or digital graphics — I love the challenge of telling a story through visuals.</p></div>
            </div>
          </section>

          <section className="section">
            <div className="section-content">
              <div className="section-header"><h1>design philosophy</h1><h2>function meets beauty</h2></div>
              <div className="section-body"><p>Great design communicates instantly and emotionally. I balance function with beauty, ensuring every element holds meaning and purpose.</p></div>
            </div>
          </section>

        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close modal">×</button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{activeProject.title}</h2>
                <p className="modal-subtitle">{activeProject.subtitle}</p>
              </div>
              {activeProject.isPDF ? (
                <div className="modal-pdf-viewer">
                  <iframe src={activeProject.pdfSrc} title={activeProject.title} className="pdf-iframe" />
                </div>
              ) : (
                <div className="modal-images">
                  {activeProject.images.map((image, index) => (
                    <div key={index} className="modal-image-item">
                      <img src={image.src} alt={image.label} />
                      <span className="modal-image-label">{image.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="modal-body">
                <div className="modal-goal"><h3>Project Goal</h3><p>{activeProject.goal}</p></div>
                <p className="modal-description">{activeProject.description}</p>
                <div className="modal-details">
                  {Object.entries(activeProject.details).map(([key, value]) => (
                    <div key={key} className="modal-detail-item">
                      <span className="modal-detail-label">{key}</span>
                      <span className="modal-detail-value">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="modal-sections">
                  {activeProject.sections.map((section, index) => (
                    <div key={index} className="modal-section-item">
                      <h4>{section.title}</h4>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default GraphicDesign;