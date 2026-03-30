import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar-container">
      {/* Mobile Hamburger */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Branding */}
      <div className="nav-left-box">
        <a href="#home" className="logo-link">
          <span className="logo-text">Elewix</span>
        </a>
      </div>

      {/* Center Links */}
      <div className={`nav-center-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <a href="/" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#services" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#portfolio" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
        <div className="menu-footer">
          <p>EST. 2022</p>
          <div className="menu-socials">
            <span>IG</span>
            <span>LI</span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <a href="#contact" className="nav-right-box">
        <div className="contact-label">Contact Us</div>
        <div className="arrow-box">&rarr;</div>
      </a>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;