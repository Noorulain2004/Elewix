import React from 'react';
import './Serviceslist.css';

const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description: "Modern, fast, and responsive websites (React, Next.js) built to convert visitors into customers.",
    tags: ["Frontend", "Backend", "MERN Stack"]
  },
  {
    id: "02",
    title: "App Development",
    description: "Scalable mobile applications for iOS and Android using Flutter and React Native technology.",
    tags: ["iOS", "Android", "Cross-Platform"]
  },
  {
    id: "03",
    title: "Social Media Marketing",
    description: "Strategic content creation and consistent growth management across Instagram, LinkedIn & Twitter.",
    tags: ["Strategy", "Ads", "Content"]
  },
  {
    id: "04",
    title: "UI/UX Design",
    description: "Aesthetic and minimal user interfaces that provide seamless user experiences and brand identity.",
    tags: ["Figma", "Prototyping", "Wireframe"]
  },
  {
    id: "05",
    title: "SEO Optimization",
    description: "Rank higher on Google, get discovered, and drive organic traffic that actually converts.",
    tags: ["On-Page", "Off-Page", "Audit"]
  },
  {
    id: "06",
    title: "DevOps & Cloud",
    description: "Cloud infrastructure setup (AWS/Azure), CI/CD pipelines, and server automation for scaling.",
    tags: ["Docker", "Kubernetes", "AWS"]
  },
  // --- NEW ADDITIONS ---
  {
    id: "07",
    title: "E-Commerce Solutions",
    description: "Custom online stores with secure payment gateways and inventory management to boost your sales.",
    tags: ["Shopify", "WooCommerce", "Stripe"]
  },
  {
    id: "08",
    title: "Brand Identity",
    description: "Crafting unique visual identities including logos, color palettes, and guidelines that resonate with your audience.",
    tags: ["Logo Design", "Typography", "Strategy"]
  },
  {
    id: "09",
    title: "Motion Graphics",
    description: "Engaging video content, animations, and visual effects to elevate your brand's storytelling on digital platforms.",
    tags: ["After Effects", "Premiere Pro", "3D"]
  }
];

const ServicesList = () => {
  return (
    <section className="services-list-container">
      
      {/* Optional: Section Heading */}
      <div className="services-header">
        <span className="green-square"></span>
        <span className="header-label">OUR DOMAIN</span>
        <h2>Everything we <span className="highlight">Offer</span></h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            
            {/* Top: Number & Arrow */}
            <div className="card-top">
              <span className="service-num">{service.id}</span>
              <span className="arrow-icon">↗</span>
            </div>

            {/* Middle: Title & Desc */}
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            {/* Bottom: Tags */}
            <div className="card-tags">
              {service.tags.map((tag, index) => (
                 <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            {/* Hover Glow Effect */}
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;