import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* --- Main Navbar --- */}
      <nav className="navbar-container">
        
        {/* Left: Hamburger (Opens Menu) */}
        <div className="nav-left" onClick={toggleMenu}>
          <div className="hamburger-lines">
              <span className="line"></span>
              <span className="line"></span>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <span className="logo-text">
              <span>Elewix</span>
          </span>
          <span className="divider">|</span>
          <span className="tagline">based in UK</span>
        </div>

        {/* Right: Contact Button */}
        <Link to="/contact" style={{ textDecoration: 'none' }}>
            <div className="nav-right">
              <div className="contact-text">Contact Us</div>
              <div className="contact-icon">
                  <span>&rarr;</span> 
              </div>
            </div>
        </Link>
      </nav>

      {/* --- BACKDROP (Clicking this closes menu) --- */}
      <div 
        className={`menu-backdrop ${isOpen ? "open" : ""}`} 
        onClick={closeMenu}
      ></div>

      {/* --- SIDEBAR MENU (Slides from Left) --- */}
      <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
        
        {/* Header inside sidebar to hold Close Button */}
        <div className="sidebar-header">
            <div className="close-btn" onClick={closeMenu}>
                &times;
            </div>
        </div>

        {/* Links */}
        <ul className="sidebar-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

      </div>
    </>
  );
};

export default Navbar;