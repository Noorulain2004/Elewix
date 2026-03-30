import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Services", link: "#services" },
    { label: "Portfolio", link: "#portfolio" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className="navbar-container">
      {/* Hamburger */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Left Branding */}
      <div className="nav-left-box">
        <a href="#home" className="logo-link" onClick={closeMenu}>
          <span className="logo-text">Elewix</span>
        </a>
        <span className="divider">|</span>
        <span className="tagline">based in UK</span>
      </div>

      {/* Side Menu Drawer */}
      <div className={`nav-center-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="menu-list">
          {menuItems.map((item, idx) => (
            <li key={idx} className="menu-item" onClick={closeMenu}>
              <a href={item.link}>{item.label}</a>
              <span className="menu-line"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Contact Box */}
      <a href="#contact" className="nav-right-box">
        <div className="contact-label">Contact Us</div>
        <div className="arrow-box">&rarr;</div>
      </a>
    </nav>
  );
};

export default Navbar;