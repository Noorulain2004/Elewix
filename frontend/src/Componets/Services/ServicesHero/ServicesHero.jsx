import React from 'react';
import './ServicesHero.css';
import heroRingImg from '../../../assets/Herosection.png'; // Ensure path is correct

const ServicesHero = () => {
  return (
    // Same container class as Home/Contact for consistency
    <section className="hero-container services-mode">

      {/* === BACKGROUND AMBIANCE === */}
      <div className="bg-glow-bottom"></div>
      <div className="line-overlay top"></div>
      <div className="line-overlay bottom"></div>

      {/* === HERO COMPOSITION === */}
      <div className="composition-layer">
        
    {/* 1. Top Left Text */}
    <h1 className="hero-text upper-left">
      Our 
      {/* New Word Added Here */}
      <span className="hollow-text"> Digital</span>
    </h1>

    {/* 2. Center Ring */}
    <div className="ring-center-piece">
        <div className="ring-backdrop-glow"></div>
        <img src={heroRingImg} alt="Abstract Ring" className="the-ring" />
    </div>

    {/* 3. Bottom Right Text */}
    <h1 className="hero-text lower-right">
      <span className="neon-pop">Expertise</span>
      <span className="dot-accent">.</span>
    </h1>

</div>

      {/* === LABEL === */}
      <div className="hero-label position-relative">
        <span className="green-square"></span> 
        <span>WHAT WE DO</span>
      </div>

      {/* === META INFO === */}
      <div className="hero-meta">
        <span className="copyright">© 2026</span>
        <p className="meta-text">
          Scalable solutions designed <br /> specifically for your business.
        </p>
      </div>

      {/* === SCROLL INDICATOR === */}
      <div className="scroll-wrapper">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
        <span className="scroll-text">View Services</span>
      </div>

    </section>
  );
};

export default ServicesHero;