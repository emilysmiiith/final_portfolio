import React from 'react';
import './UxUiDesign.css';
import Footer from '../components/Footer';
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
  const uxuiProjects = [
    {
      id: 'insight-timer',
      title: 'Insight Timer Redesign',
      subtitle: 'Meditation App UX/UI Enhancement',
      description:
        'Redesigned the Insight Timer meditation app to simplify navigation, improve search flow, and enhance personalized content delivery.',
      duration: '51 hours',
      timeline: 'May 20 - May 29, 2025',
      tools: ['Figma', 'Illustrator'],
      type: 'Independent Project',
      category: 'Mobile App Redesign',
      slideCount: 31,
      slidePath: './slides/insight/',
      pdfPath: '../assets/slides/insight.pdf',
    },
    {
      id: 'pinpal',
      title: 'Pinpal Travel App',
      subtitle: 'Social Travel Connection Platform',
      description:
        'Created an app concept that helps travelers find local events and connect with like-minded people before attending.',
      duration: '23 hours',
      timeline: 'Feb 14 - Apr 15, 2025',
      tools: ['Figma', 'Illustrator'],
      type: 'UX/UI Strategy Course',
      category: 'Mobile App Concept',
      slideCount: 18,
      slidePath: './slides/pinpal/',
      pdfPath: '../assets/slides/pinpal.pdf',
    },
  ];

  return (
    <>
      <div className="uxui-container">
        <div className="svg-static">
          <img src={imageSvg} alt="" className="svg-image-static" aria-hidden="true" />
        </div>

        <div className="uxui-content">
          <section className="section hero-section">
            <div className="section-content">
              <h2 className="section-subtitle">human-centered design</h2>
              <h1 className="section-title">ux/ui design</h1>
              <p className="journey-text">
                UX/UI design lets me solve real problems for real people — turning complex user journeys into effortless experiences through research and empathy.
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
                      <div className="pdf-controls">
                        <a href={p.pdfPath} target="_blank" rel="noopener noreferrer" className="pdf-download">
                          Download PDF ↗
                        </a>
                      </div>
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
                Great UX design is invisible — it just works. I design with empathy, research, and iteration, turning complex problems into intuitive, delightful experiences.
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
