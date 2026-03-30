import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

import webImg from "../../../assets/Services/web-development.png";
import appImg from "../../../assets/Services/mobileappdevelopment.png";
import socialImg from "../../../assets/Services/socialmedia.png";
import uiuxImg from "../../../assets/Services/uiux.png";
import seoImg from "../../../assets/Services/seo.png";
import devopsImg from "../../../assets/Services/devops.png";
import ecomImg from "../../../assets/Services/e-commerce.png";
import brandImg from "../../../assets/Services/brand.png";
import motionImg from "../../../assets/Services/motion.png";

const servicesData = [
  { id: "01", title: "Web Development", img: webImg, tags: ["Frontend", "Backend", "MERN Stack"] },
  { id: "02", title: "App Development", img: appImg, tags: ["iOS", "Android", "Flutter"] },
  { id: "03", title: "Social Media Marketing", img: socialImg, tags: ["Strategy", "Ads", "Content"] },
  { id: "04", title: "UI/UX", img: uiuxImg, tags: ["Figma", "Prototyping", "Wireframe"] },
  { id: "05", title: "SEO Optimization", img: seoImg, tags: ["On-Page", "Off-Page", "Audit"] },
  { id: "06", title: "DevOps & Cloud", img: devopsImg, tags: ["Docker", "Kubernetes", "AWS"] },
  { id: "07", title: "E-Commerce ", img: ecomImg, tags: ["Shopify", "WooCommerce", "Stripe"] },
  { id: "08", title: "Brand Identity", img: brandImg, tags: ["Logo", "Typography", "Strategy"] },
  { id: "09", title: "Motion Graphics", img: motionImg, tags: ["Video", "Animation", "VFX"] },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 1. Optimized Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to save resources
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } // Lower threshold for faster mobile trigger
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Desktop-Only Parallax (Disabled on Mobile for performance)
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // If it's a phone/tablet, don't even attach the listeners
    if (isTouchDevice) return;

    const cards = document.querySelectorAll(".service-card");
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.02)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = "rotateY(0) rotateX(0) scale(1)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
      card.addEventListener("mouseleave", () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`services-section ${isVisible ? "active" : ""}`}
    >
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
            <div key={service.id} className="service-card fade-up">
              <div className="card-top">
                <span className="service-id">Service #{service.id}</span>
                <span className="service-icon">↗</span>
              </div>

              <div className="service-img-wrapper">
                <img src={service.img} alt={service.title} className="service-main-img" />
              </div>

              <h3 className="service-name">{service.title}</h3>

              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i}>
                    {tag}
                    {i < service.tags.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              <div className="hover-glow"></div>
            </div>
          ))}
        </div>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card fade-up">
              <div className="card-top">
                <span className="service-id">Service #{service.id}</span>
                <span className="service-icon">↗</span>
              </div>

              <div className="service-img-wrapper">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="service-main-img" 
                  loading="lazy" // Improves initial load speed
                  decoding="async" // Prevents decoding from blocking the UI thread
                />
              </div>

              <h3 className="service-name">{service.title}</h3>

              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i}>
                    {tag}
                    {i < service.tags.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
              <div className="hover-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;