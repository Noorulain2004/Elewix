import React from 'react';
import './Services.css';

// Import images from assets
import webImg from '../../../assets/Services/web-development.png';
import appImg from '../../../assets/Services/mobileappdevelopment.png';
import socialImg from '../../../assets/Services/socialmedia.png';
import uiuxImg from '../../../assets/Services/uiux.png';
import seoImg from '../../../assets/Services/seo.png';
import devopsImg from '../../../assets/Services/devops.png';
import ecomImg from '../../../assets/Services/e-commerce.png';
import brandImg from '../../../assets/Services/brand.png';
import motionImg from '../../../assets/Services/motion.png';

const servicesData = [
  { id: '01', title: 'Web Development', img: webImg, tags: ['Frontend', 'Backend', 'MERN Stack'] },
  { id: '02', title: 'App Development', img: appImg, tags: ['iOS', 'Android', 'Flutter'] },
  { id: '03', title: 'Social Media Marketing', img: socialImg, tags: ['Strategy', 'Ads', 'Content'] },
  { id: '04', title: 'UI/UX', img: uiuxImg, tags: ['Figma', 'Prototyping', 'Wireframe'] },
  { id: '05', title: 'SEO Optimization', img: seoImg, tags: ['On-Page', 'Off-Page', 'Audit'] },
  { id: '06', title: 'DevOps & Cloud', img: devopsImg, tags: ['Docker', 'Kubernetes', 'AWS'] },
  { id: '07', title: 'E-Commerce ', img: ecomImg, tags: ['Shopify', 'WooCommerce', 'Stripe'] },
  { id: '08', title: 'Brand Identity', img: brandImg, tags: ['Logo', 'Typography', 'Strategy'] },
  { id: '09', title: 'Motion Graphics', img: motionImg, tags: ['Video', 'Animation', 'VFX'] },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-top-line"></div>
      
      <div className="services-container">
        <div className="services-header">
          <div className="header-left">
            <div className="services-label">
              <span className="square"></span> OUR SERVICES
            </div>
          </div>
          <div className="header-divider"></div>
          <div className="header-right">
            <h2 className="services-title">
              What are <br /> <span className="neon">our Services</span>
            </h2>
          </div>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
             
             <div key={service.id} className="service-card">
  <div className="card-top">
    <span className="service-id">Service #{service.id}</span>
    <span className="service-icon">↗</span>
  </div>
  
  {/* Image is now in the center of the card */}
  <div className="service-img-wrapper">
    <img src={service.img} alt={service.title} className="service-main-img" />
  </div>
  
  <h3 className="service-name">{service.title}</h3>
  
  <div className="service-tags">
    {service.tags.map((tag, index) => (
      <span key={index}>{tag}{index < service.tags.length - 1 ? ', ' : ''}</span>
    ))}
  </div>

  <div className="hover-glow"></div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;