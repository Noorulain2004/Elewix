// src/Componets/Contactusform/Contact-Hero/ContactHero.jsx
import React from 'react';
import './Contactform.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-container">
      <div className="contact-wrapper">
        
        {/* --- Header Section --- */}
        <div className="contact-header">
           <div className="section-label">
              <span className="green-square"></span> 
              <span>CONTACT FORM</span>
           </div>
           
           <h1 className="contact-title">
             Get in Touch <br />
             <span className="highlight-text">With Elewix</span>
           </h1>
        </div>

        {/* --- The Form --- */}
        <form className="main-contact-form">
            
            {/* 1. Email */}
            <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter the Email" required />
            </div>

            {/* 2. Phone */}
            <div className="form-group">
                <label>Your Phone</label>
                <input type="tel" placeholder="Enter your phone number" />
            </div>

            {/* 3. Interest (Dropdown) */}
            <div className="form-group">
                <label>I’m interested in...</label>
                <div className="select-wrapper">
                    <select defaultValue="" required>
                        <option value="" disabled>Select</option>
                        <option value="web">Web Development</option>
                        <option value="ui">UI/UX Design</option>
                        <option value="marketing">Digital Marketing</option>
                    </select>
                    {/* Custom Arrow Icon */}
                    <span className="arrow-icon">▼</span>
                </div>
            </div>

            {/* 4. Project Details */}
            <div className="form-group">
                <label>More About The Project</label>
                <textarea rows="1" placeholder="Type Here..."></textarea>
            </div>

            {/* 5. Submit Button */}
            <button type="submit" className="submit-btn">
                Submit
            </button>

        </form>

      </div>
    </section>
  );
};

export default ContactHero;