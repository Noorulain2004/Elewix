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

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax + hover scale for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.02)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0) rotateX(0) scale(1)";
      });
    });
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
      </div>
    </section>
  );
};

export default Services;