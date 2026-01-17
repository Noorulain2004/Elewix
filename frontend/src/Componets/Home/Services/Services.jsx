// src/components/Services.jsx
import React from 'react';
import './Services.css';
import webdeveoplement from '../../../assets/Services/WebDevelopment.jpg';
import seo from '../../../assets/Services/SEO.jpg';
import softImg from '../../../assets/Services/Software.jpg';

const servicesData = [
  {
    id: "01",
    titleStart: "Web",
    titleEnd: "Development",
    desc: "Modern, fast, and responsive websites built to convert visitors into customers.",
    img: webdeveoplement // Laptop/Code
  },
  {
    id: "02",
    titleStart: "Social Media",
    titleEnd: "Management",
    desc: "Strategic content and consistent growth across all major platforms.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" // Mobile/Social
  },
  {
    id: "03",
    titleStart: "SEO",
    titleEnd: "Optimization",
    desc: "Rank higher, get discovered, and drive organic traffic that actually converts.",
    img: seo // Graphs/Data
  },
  {
    id: "04",
    titleStart: "Custom",
    titleEnd: "Software",
    desc: "Scalable software solutions designed specifically for your business needs.",
   img: softImg
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        
        {/* Section Heading (Optional) */}
        <h3 className="section-label">OUR EXPERTISE</h3>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className={`service-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}>
              
              {/* Text Column */}
              <div className="service-info">
                
                {/* Step Indicator (Square + Number) */}
                <div className="step-indicator">
                    <span className="neon-square"></span>
                    <span className="step-text">Step {service.id}</span>
                </div>

                {/* Main Title (With Neon Highlight) */}
                <h2 className="service-title">
                  {service.titleStart} <span className="text-highlight">{service.titleEnd}</span>
                </h2>

                {/* Description */}
                <p className="service-desc">{service.desc}</p>
              </div>

              {/* Image Column */}
              <div className="service-image-wrapper">
                <img src={service.img} alt={service.titleEnd} className="service-img" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;