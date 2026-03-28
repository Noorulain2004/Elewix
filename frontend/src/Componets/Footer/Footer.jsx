import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* TOP SECTION: Information Grid */}
        <div className="footer-info-grid">
          <div className="footer-info-item">
            <span className="info-label">Email Us</span>
            <a href="mailto:hello@elewix.com" className="info-link">hello@elewix.com</a>
          </div>

          <div className="footer-info-item">
            <span className="info-label">Call Us</span>
            <a href="tel:+440000000000" className="info-link">+44 (0) 000 000 000</a>
          </div>

          <div className="footer-info-item">
            <span className="info-label">Visit Us</span>
            <p className="info-text">2/1420 Logan Rd, Brisbane City</p>
          </div>

          <div className="footer-info-item">
            <span className="info-label">Socials</span>
            <div className="footer-social-links">
               <a href="#instagram">Instagram</a>
               <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Navigation */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="copyright-text">
              Est. 2021 — &copy; {new Date().getFullYear()} <span className="brand-name">Elewix</span>. All Rights Reserved.
            </p>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-nav">
              <a href="/" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#services" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#portfolio" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            </div>
            
            <div className="back-to-top" onClick={scrollToTop}>
              <span>Back to top</span>
              <span className="arrow-up">↑</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;