import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar-container">
      {/* Mobile Menu / Back button */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="back-btn">&larr; Back</div>
        ) : (
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      {/* Branding */}
      <div className="nav-left-box">
        <a href="#home" className="logo-link">
          <span className="logo-text">Elewix</span>
        </a>
      </div>

      <div className={`nav-center-links ${isMenuOpen ? 'mobile-open' : ''}`}>
  <div className="nav-links-wrapper">
    <a href="/" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Home</a>
    <a href="#about" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>About</a>
    <a href="#services" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Services</a>
    <a href="#portfolio" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
  </div>

  <div className="menu-footer">
    <p>EST. 2022</p>
    <div className="menu-socials">
      <span>IG</span>
      <span>LI</span>
    </div>
  </div>
</div>
      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;