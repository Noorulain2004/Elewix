// src/components/ContactCTA.jsx
import React from 'react';
import './ContactCTA.css';
// Reusing the same ring image for consistency
import ringImg from '../../../assets/Herosection.png'; 

const ContactCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        
        {/* --- Left Content --- */}
        <div className="cta-content">
            <span className="section-label">
                <span className="green-square"></span> CONTACT US
            </span>

            <h1 className="cta-title">
                Let's Discuss Your <br />
                <span className="highlight-text">Next Project</span>
            </h1>

            <p className="cta-desc">
                Subtly align sites with sustainable values like eco-friendliness 
                and long-term thinking. Let's build something impactful together.
            </p>

            <button className="cta-button">
                <span className="btn-text">Contact Us</span>
                <span className="btn-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </span>
            </button>
        </div>

        {/* --- Right Visual (Zoomed Ring) --- */}
        <div className="cta-visual">
            <div className="visual-crop">
                <img src={ringImg} alt="Abstract Ring" className="cta-ring-img" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;