// src/Componets/Contactusform/Contact-Hero/ContactHero.jsx
import React from 'react';
import './Contactform.css';

const ContactHero = () => {
  return (
    <section id="contact" className="contact-hero-containers">
      <div className="contact-wrapper">
        
        
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

        <form className="main-contact-form">
            
            
            <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter the Email" required />
            </div>

           
            <div className="form-group">
                <label>Your Phone</label>
                <input type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
                <label>I’m interested in...</label>
                <div className="select-wrapper">
                    <select defaultValue="" required>
                        <option value="" disabled>Select Service</option>
                        <option value="web-dev">Web Development</option>
                        <option value="app-dev">App Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="devops">DevOps & Cloud</option>
                        <option value="ecommerce">E-Commerce Solutions</option>
                        <option value="branding">Brand Identity</option>
                        <option value="motion-graphics">Motion Graphics</option>
                    </select>
                   
                    <span className="arrow-icon">▼</span>
                </div>
            </div>

            
            <div className="form-group">
                <label>More About The Project</label>
                <textarea rows="1" placeholder="Type Here..."></textarea>
            </div>

            
            <button type="submit" className="submit-btn">
                Submit
            </button>

        </form>

      </div>
    </section>
  );
};

export default ContactHero;