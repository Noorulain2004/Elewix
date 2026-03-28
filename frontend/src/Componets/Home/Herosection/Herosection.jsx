import React from 'react';
import './Herosection.css';
import herobg from '../../../assets/herobg.png'; // Import the new background

const Hero = () => {
  return (
    <section 
      className="hero-container" 
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Background Overlay for better text readability */}
      <div className="bg-overlay"></div>

      {/* Decorative Lines */}
      <div className="line-top"></div>
      <div className="line-bottom"></div>

      {/* Centered Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="white-text">Creative </span>
          <span className="green-text">Digital</span>
        </h1>
        <h1 className="hero-title">
          <span className="white-text">Agency</span>
        </h1>
      </div>

      {/* Label and Meta Info */}
      <div className="hero-label">
        <span className="green-square"></span> CREATIVE AGENCY
      </div>

      <div className="hero-meta">
        <span className="copyright">© 2026</span>
        <p className="meta-text">
          Elewix is a Simple team uses aesthetic <br /> and minimal
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-wrapper">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;