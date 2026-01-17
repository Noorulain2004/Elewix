// src/components/Hero.jsx
import React from 'react';
import './Herosection.css';
import heroRingImg from '../../../assets/Herosection.png';

const Hero = () => {
  return (
    <section className="hero-container">

      {/* === NEW: BOTTOM HALF-MOON GRADIENT === */}
      {/* Yeh sabse peeche rahega */}
      <div className="bottom-moon-glow"></div>

      {/* === BACKGROUND LINES === */}
      <div className="line-top"></div>
      <div className="line-bottom"></div>


      {/* === CENTER CONTENT (Ring + Glow) === */}
      <div className="ring-container">
         {/* === NEW: RING GLOW EFFECT === */}
         {/* Image ke peeche ek soft glow */}
         <div className="ring-glow-effect"></div>

         <img src={heroRingImg} alt="Abstract Ring" className="floating-ring" />
      </div>

      {/* ... Baaki Sara Text aur Content Waisa hi Rahega ... */}
      <h1 className="text-creative">Creative</h1>
      <h1 className="text-digital-wrapper">
        <span className="text-green">Digital </span>
        <span className="text-white">Agency</span>
      </h1>

      <div className="hero-label">
        <span className="green-square"></span> CREATIVE AGENCY
      </div>

      <div className="hero-meta">
        <span className="copyright">© 2026</span>
        <p className="meta-text">
          Elewix is a Simple team uses aesthetic <br /> and minimal
        </p>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>

    

    </section>
  );
};

export default Hero;