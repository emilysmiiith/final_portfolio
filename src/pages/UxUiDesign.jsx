import React, { useEffect } from 'react';
import './UxUiDesign.css';
import Footer from '../components/ProjectFooter';
import ProjectNavbar from '../components/ProjectNavbar';
import imageSvg from '../assets/image.svg';

const SlideImage = React.memo(({ index, total, path, projectName }) => (
  <div className="slide-container">
    <img
      src={`${path}slide-${index}.png`}
      alt={`${projectName} slide ${index}`}
      className="slide-image"
      loading={index <= 2 ? "eager" : "lazy"}
    />
    <div className="slide-number">{index} / {total}</div>
  </div>
));

const UxUiDesign = () => {
// ⭐⭐⭐ PAGE-SPECIFIC METADATA
useEffect(() => {
  const title = "UX/UI Design – Emily Rianna Smith | Human-Centered Digital Design";

  const desc =
    "Explore UX/UI case studies by Emily Rianna Smith — including app redesigns, research-led workflows, and human-centered interface design.";

  const image = "https://www.yourwebsite.com/og/og-uxui.jpg";

  document.title = title;

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
  ogTitle.setAttribute("content", title);

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
  ogImage.setAttribute("content", image);

  // Twitter Title
  let twTitle = document.querySelector("meta[name='twitter:title']");
  if (!twTitle) {
    twTitle = document.createElement("meta");
    twTitle.setAttribute("name", "twitter:title");
    document.head.appendChild(twTitle);
  }
  twTitle.setAttribute("content", title);

  // Twitter Description
  let twDesc = document.querySelector("meta[name='twitter:description']");
  if (!twDesc) {
    twDesc = document.createElement("meta");
    twDesc.setAttribute("name", "twitter:description");
    document.head.appendChild(twDesc);
  }
  twDesc.setAttribute("content", desc);

  // Twitter Image
  let twImage = document.querySelector("meta[name='twitter:image']");
  if (!twImage) {
    twImage = document.createElement("meta");
    twImage.setAttribute("name", "twitter:image");
    document.head.appendChild(twImage);
  }
  twImage.setAttribute("content", image);

}, []);
// ⭐⭐⭐ END METADATA
  return (
    <>
      <ProjectNavbar />

      <div className="uxui-container">

        <div className="svg-static" aria-hidden="true">
          <img src={imageSvg} alt="" className="svg-image-static" aria-hidden="true" />
        </div>

        <div className="uxui-content">

          <section className="section hero-section">
            <div className="section-content">
              <h2 className="section-subtitle">human-centered design</h2>
              <h1 className="section-title">ux/ui design</h1>
              <p className="journey-text">
                UX/UI design lets me solve real problems for real people — turning complex user journeys
                into effortless experiences through research and empathy.
              </p>
            </div>
          </section>

          {uxuiProjects.map((p, idx) => (
            <section key={p.id} className="section">
              <div className="section-content">
                <div className="project-showcase">
                  <div className="project-header">
                    <div className="project-number">#{idx + 1}</div>
                    <div className="project-meta">
                      <h2 className="project-title">{p.title}</h2>
                      <p className="project-subtitle">{p.subtitle}</p>
                      <div className="project-stats">
                        <span>{p.duration}</span> • <span>{p.timeline}</span> • <span>{p.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-overview">
                    <h3 className="overview-title">Project Goal</h3>
                    <p className="overview-description">{p.description}</p>

                    <div className="overview-timeline">
                      <div><strong>Tools:</strong> {p.tools.join(', ')}</div>
                      <div><strong>Category:</strong> {p.category}</div>
                    </div>

                    <h4 className="presentation-title">📄 Case Study Slides</h4>

                    <div className="slides-gallery">
                      {Array.from({ length: p.slideCount }, (_, i) => (
                        <SlideImage
                          key={i}
                          index={i + 1}
                          total={p.slideCount}
                          path={p.slidePath}
                          projectName={p.title}
                        />
                      ))}
                    </div>

                    <div className="pdf-controls">
                      <a
                        href={p.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pdf-download"
                      >
                        Download PDF ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className="section">
            <div className="section-content">
              <h2 className="section-subtitle">design philosophy</h2>
              <p className="journey-text">
                Great UX design is invisible — it just works. I design with empathy, research, and iteration,
                turning complex problems into intuitive, delightful experiences.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default UxUiDesign;
