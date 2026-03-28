import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'active' : ''}`} ref={sectionRef}>
      <div className="about-container">
        <div className="about-top-label">
          <span className="square"></span> OUR VISION
        </div>

        <div className="about-grid">
          {/* LEFT SIDE */}
          <div className="about-left">
            <h2 className="about-heading">
              <div className="line-wrapper">
                <span className="reveal-text">We are a <span className="highlight">Creative</span></span>
              </div>
              <div className="line-wrapper">
                <span className="reveal-text delay-1">Digital Agency</span>
              </div>
              <div className="line-wrapper">
                <span className="reveal-text delay-2">Based in UK.</span>
              </div>
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-right">
            <p className="about-text fade-up">
              At Elewix, we blend aesthetic minimalism with high-performance 
              digital solutions. Our mission is to transform brands through 
              innovative design and strategic thinking.
            </p>
            <div className="about-stats">
              <div className="stat-item fade-up delay-3">
                <span className="stat-number">05+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item fade-up delay-4">
                <span className="stat-number">120+</span>
                <span className="stat-label">Projects Done</span>
              </div>
            </div>
            
            {/* PORTFOLIO LINK ADDED HERE */}
            <a href="#portfolio" className="about-btn-link">
              <button className="about-btn">
                Learn More <span className="btn-arrow">→</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;