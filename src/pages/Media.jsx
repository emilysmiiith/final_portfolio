import React from 'react';
import './Media.css';
import Footer from '../components/Footer';
import imageSvg from '../assets/image.svg';

const Media = () => {
  // Image metadata for your climbing photos
  const climbingPhotos = [
    {
      id: 1,
      src: "/public/assets/images/squamish/photo-1.jpg",
      alt: "Rock climber ascending granite wall in Squamish, British Columbia",
      title: "Granite Ascent",
      description: "A climber navigating the challenging granite faces of Squamish's world-renowned climbing routes",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Adventure Photography",
      equipment: "Canon T7, 50mm lens"
    },
    {
      id: 2,
      src: "/public/assets/images/squamish/photo-2.jpg",
      alt: "Panoramic view of Squamish climbing area with mountain backdrop",
      title: "Squamish Vista",
      description: "Breathtaking panoramic view showcasing the natural grandeur of Squamish's climbing landscape",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Landscape Photography",
      equipment: "Canon T7, wide-angle lens"
    },
    {
      id: 3,
      src: "/public/assets/images/squamish/photo-3.jpg",
      alt: "Close-up detail of climber's hands gripping rock holds",
      title: "Precision Grip",
      description: "Detailed capture of the technical precision required in rock climbing, focusing on grip technique",
      location: "Squamish, British Columbia", 
      date: "2024",
      technique: "Macro Photography",
      equipment: "Canon T7, 85mm lens"
    },
    {
      id: 4,
      src: "/public/assets/images/squamish/photo-4.jpg",
      alt: "Silhouette of climber against dramatic sky during golden hour",
      title: "Golden Hour Ascent",
      description: "Dramatic silhouette photography capturing the intersection of human determination and natural beauty",
      location: "Squamish, British Columbia",
      date: "2024", 
      technique: "Silhouette Photography",
      equipment: "Canon T7, 35mm lens"
    },
    {
      id: 5,
      src: "/public/assets/images/squamish/photo-5.jpg",
      alt: "Wide shot of climbing route with safety equipment and rope systems",
      title: "Safety Systems",
      description: "Documentation of climbing safety equipment and rope systems used in multi-pitch climbing",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Documentary Photography", 
      equipment: "Canon T7, 24-70mm lens"
    },
    {
      id: 6,
      src: "/public/assets/images/squamish/photo-6.jpg",
      alt: "Climber celebrating successful completion of challenging route",
      title: "Summit Success",
      description: "Capturing the joy and accomplishment of completing a challenging climbing route in Squamish",
      location: "Squamish, British Columbia",
      date: "2024",
      technique: "Portrait Photography",
      equipment: "Canon T7, 50mm lens"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % climbingPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + climbingPhotos.length) % climbingPhotos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>Media & Film - Visual Storytelling Portfolio</title>
        <meta name="description" content="Media production portfolio featuring documentary filmmaking, adventure photography, and visual storytelling projects including dementia care awareness film and Squamish climbing photography." />
        <meta name="keywords" content="media production, documentary film, adventure photography, visual storytelling, dementia care, Squamish climbing, film director, photographer" />
        <meta property="og:title" content="Media & Film Portfolio - Visual Storytelling" />
        <meta property="og:description" content="Combining technical skills with meaningful storytelling through documentary films and adventure photography." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/assets/images/squamish/photo-1.jpg" />
      </head>

      <div className="media-container">
        {/* Static SVG Background */}
        <div className="svg-static">
          <img 
            src={imageSvg}
            alt="Static decorative path"
            className="svg-image-static"
          />
        </div>

        <div className="media-content">
          {/* Hero Section */}
          <section className="section hero-section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  visual storytelling
                </h2>
                <h1 className="section-title">media & film</h1>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Media production is where I combine technical skills with meaningful storytelling. I believe in 
                  creating content that doesn't just look good, but genuinely connects with people and drives change. 
                  Whether it's a documentary-style piece or branded content, every project starts with understanding 
                  the human story we're trying to tell.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Video Project */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase featured">
                <div className="project-header">
                  <div className="project-number">#1</div>
                  <div className="project-meta">
                    <h2 className="project-title">Dementia Care Short Film</h2>
                    <p className="project-subtitle">PSA • First-Person Perspective Experience</p>
                    <div className="project-stats">
                      <span className="stat-item">Short Film</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Client Collaboration</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Emily Rianna Smith</span>
                    </div>
                  </div>
                </div>

                <div className="video-showcase">
                  <div className="video-container">
                    <video 
                      className="featured-video"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      title="Dementia Care PSA - First-Person Perspective Experience"
                      aria-label="Short film showing first-person perspective of dementia patient experience to promote empathetic care approaches"
                      data-title="Dementia Care Short Film"
                      data-description="PSA film creating empathy for dementia patients through first-person perspective storytelling"
                      data-director="Emily Rianna Smith"
                      data-client="Denise Devlin"
                      data-year="2024"
                      data-genre="Documentary PSA"
                      data-duration="3:45"
                      data-equipment="Canon T7, body mic, soft lighting"
                      data-software="Adobe After Effects, Adobe Audition"
                      data-location="Various care home settings"
                      data-theme="Healthcare, Empathy, Dementia Care"
                      itemProp="video"
                      itemScope
                      itemType="https://schema.org/VideoObject"
                    >
                      <source 
                        src="/assets/videos/final_1_1.mp4" 
                        type="video/mp4"
                        data-quality="HD"
                        data-codec="H.264"
                      />
                      <source 
                        src="/assets/videos/final_1_1.webm" 
                        type="video/webm"
                        data-quality="HD"
                        data-codec="VP9"
                      />
                      {/* Subtitle tracks for accessibility */}
                      <track 
                        kind="captions" 
                        src="/assets/videos/final_1_1_captions.vtt" 
                        srcLang="en" 
                        label="English Captions"
                        default
                      />
                      <track 
                        kind="descriptions" 
                        src="/assets/videos/final_1_1_descriptions.vtt" 
                        srcLang="en" 
                        label="Audio Descriptions"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay">
                      <div className="video-info">
                        <span className="video-label">Dementia Care PSA</span>
                        <span className="video-description">First-person perspective experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Structured Data for SEO */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": "Dementia Care Short Film",
                    "description": "PSA film creating empathy for dementia patients through first-person perspective storytelling, promoting positive approaches to dementia care",
                    "thumbnailUrl": "/assets/images/video-thumbnail-dementia-care.jpg",
                    "uploadDate": "2024-01-01",
                    "duration": "PT3M45S",
                    "contentUrl": "/assets/videos/final_1_1.mp4",
                    "embedUrl": "/assets/videos/final_1_1.mp4",
                    "creator": {
                      "@type": "Person",
                      "name": "Emily Rianna Smith",
                      "jobTitle": "Director, Editor, Producer"
                    },
                    "genre": ["Documentary", "PSA", "Healthcare"],
                    "keywords": ["dementia care", "healthcare", "empathy", "PSA", "documentary", "first-person perspective", "care homes"],
                    "inLanguage": "en",
                    "accessibilityFeature": ["captions", "audioDescription"],
                    "educationalUse": "Healthcare training and awareness",
                    "audience": {
                      "@type": "Audience",
                      "audienceType": "Healthcare professionals, caregivers, families"
                    },
                    "producer": {
                      "@type": "Person", 
                      "name": "Emily Rianna Smith"
                    },
                    "director": {
                      "@type": "Person",
                      "name": "Emily Rianna Smith"
                    },
                    "about": {
                      "@type": "Thing",
                      "name": "Dementia Care",
                      "description": "Promoting empathetic and positive approaches to dementia patient care"
                    }
                  })}
                </script>

                {/* ... rest of video project content remains the same ... */}
                <div className="project-overview">
                  <div className="overview-content">
                    <h3 className="overview-title">Project Overview</h3>
                    <p className="overview-description">
                      This project was created in collaboration with my client, Denise Devlin, a nurse passionate about 
                      changing the way dementia patients are treated in care homes. Denise is also my mom, which made this 
                      project especially meaningful. The goal was to create a short film that raises awareness about the 
                      importance of empathy in dementia care through a first-person perspective experience.
                    </p>
                    
                    <div className="overview-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Type</span>
                        <span className="timeline-value">Short Film / PSA</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Year</span>
                        <span className="timeline-value">2024</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Client</span>
                        <span className="timeline-value">Denise Devlin</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Role</span>
                        <span className="timeline-value">Director, Editor, Producer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ... project details section remains the same ... */}
              </div>
            </div>
          </section>

          {/* Enhanced Photography Section with Rich Metadata */}
          <section className="section">
            <div className="section-content">
              <div className="project-showcase photography">
                <div className="project-header">
                  <div className="project-number">#2</div>
                  <div className="project-meta">
                    <h2 className="project-title">Squamish Climbing Photography</h2>
                    <p className="project-subtitle">Adventure Photography • Personal Project</p>
                    <div className="project-stats">
                      <span className="stat-item">Photography</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">2024</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Squamish, BC</span>
                      <span className="stat-divider">•</span>
                      <span className="stat-item">Personal Project</span>
                    </div>
                  </div>
                </div>

                <div className="photography-showcase">
                  <div className="photography-intro">
                    <h3 className="photography-title">Adventure Through the Lens</h3>
                    <p className="photography-description">
                      Capturing the raw beauty and adrenaline of rock climbing in Squamish, British Columbia. 
                      This collection showcases the intersection of human determination and natural grandeur, 
                      documenting both the technical precision of climbing and the breathtaking landscapes 
                      that make Squamish a world-renowned climbing destination.
                    </p>
                  </div>

                  <div className="carousel-container">
                    <div className="carousel-track" id="carousel-track">
                      {climbingPhotos.map((photo, index) => (
                        <div key={photo.id} className="carousel-slide">
                          <img 
                            src={photo.src}
                            alt={photo.alt}
                            title={photo.title}
                            className="carousel-image"
                            loading={index === 0 ? "eager" : "lazy"}
                            data-location={photo.location}
                            data-date={photo.date}
                            data-technique={photo.technique}
                            data-equipment={photo.equipment}
                            itemProp="image"
                            itemScope
                            itemType="https://schema.org/Photograph"
                          />
                          <div className="image-overlay">
                            <div className="image-info">
                              <span className="image-number">{photo.id}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="carousel-controls">
                      <button 
                        className="carousel-btn prev-btn" 
                        aria-label="Previous image"
                        onClick={prevSlide}
                      >
                        ‹
                      </button>
                      <div className="carousel-indicators">
                        {climbingPhotos.map((_, index) => (
                          <span 
                            key={index} 
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to image ${index + 1}`}
                          ></span>
                        ))}
                      </div>
                      <button 
                        className="carousel-btn next-btn" 
                        aria-label="Next image"
                        onClick={nextSlide}
                      >
                        ›
                      </button>
                    </div>
                  </div>


                </div>

                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ImageGallery",
                    "name": "Squamish Climbing Photography",
                    "description": "Adventure photography collection capturing rock climbing in Squamish, British Columbia",
                    "creator": {
                      "@type": "Person",
                      "name": "Emily Rianna Smith"
                    },
                    "contentLocation": {
                      "@type": "Place",
                      "name": "Squamish, British Columbia, Canada"
                    },
                    "image": climbingPhotos.map(photo => ({
                      "@type": "Photograph",
                      "name": photo.title,
                      "description": photo.description,
                      "contentUrl": photo.src,
                      "dateCreated": photo.date,
                      "contentLocation": photo.location,
                      "keywords": ["climbing", "adventure", "Squamish", "photography", "outdoor", "rock climbing"]
                    }))
                  })}
                </script>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="section">
            <div className="section-content">
              <div className="section-header">
                <h2 className="section-subtitle" style={{ fontFamily: "'Liu Jian Mao Cao', cursive" }}>
                  creative philosophy
                </h2>
              </div>
              <div className="section-body">
                <p className="journey-text">
                  Whether I'm working in media, UX/UI, or graphic design, I bring the same values to the table: 
                  collaboration, empathy, and a commitment to creating work that connects with people. Every project 
                  starts with listening carefully to understand goals, researching deeply to create authentic results, 
                  and designing thoughtfully with purpose and meaning.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Media;