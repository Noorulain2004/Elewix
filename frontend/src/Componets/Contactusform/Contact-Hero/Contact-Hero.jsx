// src/components/ContactHero.jsx
import React from 'react';
import './Contact-Hero.css';
import heroRingImg from '../../../assets/Herosection.png'; 

const Hero = () => {
  return (
    <section className="hero-container">

      {/* === BACKGROUND AMBIANCE === */}
      <div className="bottom-moon-glow"></div>
      <div className="line-top"></div>
      <div className="line-bottom"></div>

      {/* === CENTER CONTENT (Ring + Text Composition) === */}
      <div className="ring-container">

        {/* Top Left Text */}
        <h1 className="text-creative text-upper-left">
          Built With
        </h1>

        {/* Ring + Glow */}
        <div className="ring-wrapper">
          <div className="ring-glow-effect"></div>
          <img
            src={heroRingImg}
            alt="Abstract Ring"
            className="floating-ring"
          />
        </div>

        {/* Bottom Right Text */}
        <h1 className="text-digital-wrapper text-lower-right">
          <span className="text-green">Elewix </span>
          <span className="text-white">Agency</span>
        </h1>

      </div>

      {/* === LABEL === */}
      <div className="hero-label">
        <span className="green-square"></span> CREATIVE AGENCY
      </div>

      {/* === META INFO === */}
      <div className="hero-meta">
        <span className="copyright">© 2026</span>
        <p className="meta-text">
          Elewix is a Simple team uses aesthetic <br /> and minimal
        </p>
      </div>

      {/* === SCROLL INDICATOR === */}
      <div className="scroll-wrapper">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>

    </section>
  );
};

export default Hero;
