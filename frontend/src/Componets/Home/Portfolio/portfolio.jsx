import React from 'react';
import './portfolio.css';

// Import your images
import webImg from '../../../assets/portfolio/web.png';
import appImg from '../../../assets/portfolio/app.png';
import brandingImg from '../../../assets/portfolio/branding.png';
import officeImg from '../../../assets/portfolio/ui.png'; 
import socialImg from '../../../assets/portfolio/social.png';
import branding2Img from '../../../assets/portfolio/branding2.png';
import motionVideo from '../../../assets/portfolio/motion.mp4';

const portfolioData = [
  { 
    id: '01', 
    title: 'Mathew Company Branding', 
    category: 'Art Direction', 
    year: '2023 - by Elewix Studio', 
    img: brandingImg 
  },
  { 
    id: '02', 
    title: 'NexaFlow Analytics', 
    category: 'Web Design', 
    year: '2024 - by Elewix Studio', 
    img: webImg 
  },
  { 
    id: '03', 
    title: 'Krea Klock Branding', 
    category: 'Branding', 
    year: '2023 - by Elewix Studio', 
    img: appImg 
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header-simple">
        <div className="portfolio-label">
           <span className="square"></span> PROJECTS
        </div>
        <h2 className="portfolio-title-simple">
          View Our <span className="neon">Works</span>
        </h2>
      </div>

      <div className="portfolio-list">
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-img-wrapper">
              <img src={item.img} alt={item.title} className="portfolio-img" />
              
              {/* Center Content Overlay */}
              <div className="portfolio-overlay-content">
                <p className="category-text">{item.category}</p>
                <h3 className="project-title-center">{item.title}</h3>
                <p className="year-text">{item.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thoughtfully-bg-text">Thoughtfully</div>
      <div className="portfolio-info-grid">
        
        {/* Card 1: Office/Studio Shot */}
        <div className="info-card image-card">
          <img src={officeImg} alt="Studio" />
          <div className="card-inner-label">Vivenda</div>
        </div>

        {/* Card 2: Location/Map Card */}
        <div className="info-card map-card">
          <div className="map-label"><span className="square"></span> OUR PLACE</div>
          <div className="map-marker">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="#ccff00"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
          </div>
          <div className="map-details">
            <p>based in Uk</p>
            <h4>2/1420 Logan Rd, Brisbane </h4>
          </div>
        </div>

        {/* Card 3: Abstract/Motion (Video Card) */}
        <div className="info-card video-card">
          <video autoPlay loop muted src={motionVideo}></video>
          <div className="video-overlay"></div>
        </div>

        {/* Card 4: Team/Bio Card */}
        <div className="info-card profile-card">
          <img src={socialImg} alt="Profile" />
          <div className="profile-overlay">
            <div className="profile-info">
               <h3>Noor Ul Ain</h3>
            </div>
          </div>
        </div>

      </div>
      
     
    </section>
  );
};

export default Portfolio;