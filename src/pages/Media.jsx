import React, { useEffect } from 'react';
import './Media.css';
import ProjectNavbar from '../components/ProjectNavbar';
import Footer from '../components/ProjectFooter';
import imageSvg from '../assets/image.svg';

const Media = () => {
  // ============================
// PAGE-SPECIFIC META TAGS
// ============================
useEffect(() => {
  const title = "Media & Film – Emily Rianna Smith | Creative Designer";

  const desc =
    "Media production portfolio of Emily Rianna Smith featuring cinematic short films, editing work, and adventure photography.";

  const image = "https://www.yourwebsite.com/og/og-media.jpg";

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

}, []);

  // FIXED PATHS FOR GITHUB PAGES + HOSTPAPA
  const base = import.meta.env.BASE_URL;

  const climbingPhotos = [
    { id: 1, src: `${base}assets/images/squamish/photo-1.jpg`, alt: "Rock climber ascending granite wall", title: "Granite Ascent" },
    { id: 2, src: `${base}assets/images/squamish/photo-2.jpg`, alt: "Panoramic view of Squamish climbing area", title: "Squamish Vista" },
    { id: 3, src: `${base}assets/images/squamish/photo-3.jpg`, alt: "Climber's hands gripping rock holds", title: "Precision Grip" },
    { id: 4, src: `${base}assets/images/squamish/photo-4.jpg`, alt: "Silhouette of climber against sky", title: "Golden Hour Ascent" },
    { id: 5, src: `${base}assets/images/squamish/photo-5.jpg`, alt: "Climbing route with rope systems", title: "Safety Systems" },
    { id: 6, src: `${base}assets/images/squamish/photo-6.jpg`, alt: "Climber celebrating at summit", title: "Summit Success" }
  ];

  return (
    <>
      {/* Navbar */}
      <ProjectNavbar />

      <div className="media-container">

        {/* Background SVG */}
        <div className="svg-static" aria-hidden="true">
          <img src={imageSvg} alt="" className="svg-image-static" />
        </div>

        <div className="media-content">

          {/* Hero */}
          <section className="section hero-section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                visual storytelling
              </h2>
              <h1 className="section-title">media & film</h1>
              <p className="journey-text">
                Media production is where I combine technical skills with meaningful storytelling.
                Every story begins with empathy and curiosity.
              </p>
            </div>
          </section>

          {/* Project #1 */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase featured">
                <div className="project-header">
                  <div className="project-number">#1</div>
                  <div className="project-meta">
                    <h2 className="project-title">Dementia Care Short Film</h2>
                    <p className="project-subtitle">PSA • First-Person Perspective Experience</p>
                  </div>
                </div>

                <div className="video-showcase">
                  <video
                    className="featured-video"
                    controls
                    playsInline
                    muted
                    title="Dementia Care Short Film by Emily Rianna Smith"
                  >
                    <source src={`${base}videos/Smith_ProjectB.mp4`} type="video/mp4" />
                  </video>
                </div>

                <div className="project-overview">
                  <h3 className="overview-title">Project Overview</h3>
                  <p>
                    Created in collaboration with Denise Devlin — this PSA raises awareness about empathy in dementia care
                    through a first-person narrative.
                  </p>
                  <div className="overview-timeline">
                    <div><strong>Type:</strong> Short Film / PSA</div>
                    <div><strong>Year:</strong> 2024</div>
                    <div><strong>Role:</strong> Director, Editor, Producer</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project #2 */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase featured">
                <div className="project-header">
                  <div className="project-number">#2</div>
                  <div className="project-meta">
                    <h2 className="project-title">Beyond Rides</h2>
                    <p className="project-subtitle">Short Film • Featuring Lily Taylor &amp; Kaveen</p>
                  </div>
                </div>

                <div className="video-showcase">
                  <video
                    className="featured-video"
                    controls
                    playsInline
                    muted
                    title="Beyond Rides — Short Film by Emily Rianna Smith"
                  >
                    <source src={`${base}videos/beyondrides.mp4`} type="video/mp4" />
                  </video>
                </div>

                <div className="project-overview">
                  <h3 className="overview-title">Project Overview</h3>
                  <p>
                    Music-driven narrative featuring Lily Taylor and Kaveen. Edited in Premiere Pro with
                    custom audio work and original music.
                  </p>
                  <div className="overview-timeline">
                    <div><strong>Type:</strong> Short Film</div>
                    <div><strong>Year:</strong> 2024</div>
                    <div><strong>Tools:</strong> Premiere Pro, Audition</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project #3 */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase photography">
                <div className="project-header">
                  <div className="project-number">#3</div>
                  <div className="project-meta">
                    <h2 className="project-title">Squamish Climbing Photography</h2>
                    <p className="project-subtitle">Adventure Photography • Personal Project</p>
                  </div>
                </div>

                <div className="photo-grid">
                  {climbingPhotos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                      <img src={photo.src} alt={photo.alt} title={photo.title} />
                      <div className="photo-caption">{photo.title}</div>
                    </div>
                  ))}
                </div>

                <div className="photography-description">
                  <p>
                    Capturing the beauty and adrenaline of climbing in Squamish, BC — documenting the
                    connection between perseverance and nature.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Creative Philosophy */}
          <section className="section">
            <div className="section-content">
              <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                creative philosophy
              </h2>
              <p className="journey-text">
                Whether I’m directing, designing, or editing, my work starts with empathy and curiosity.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Media;
