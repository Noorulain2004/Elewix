import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  /* 🔥 Intersection + Counter Animation */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate numbers
          const nums = el.querySelectorAll(".stat-number");
          nums.forEach((num) => {
            const target = parseInt(num.innerText);
            let count = 0;

            const update = () => {
              count += target / 40;
              if (count < target) {
                num.innerText = Math.floor(count) + "+";
                requestAnimationFrame(update);
              } else {
                num.innerText = target + "+";
              }
            };
            update();
          });
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* 🧲 Magnetic Button */
  useEffect(() => {
    const btn = document.querySelector(".about-btn");
    if (!btn) return;

    const move = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const leave = () => {
      btn.style.transform = "translate(0,0)";
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);

  

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${isVisible ? "active" : ""}`}
    >
      <div className="about-container">
        <div className="about-top-label">
          <span className="square"></span> OUR VISION
        </div>

        <div className="about-grid">
          {/* LEFT */}
          <div className="about-left">
            <h2 className="about-heading">
              <div className="line-wrapper">
                <span className="reveal-text">
                  We are a <span className="highlight">Creative</span>
                </span>
              </div>
              <div className="line-wrapper">
                <span className="reveal-text delay-1">
                  Digital Agency
                </span>
              </div>
              <div className="line-wrapper">
                <span className="reveal-text delay-2">
                  Based in UK.
                </span>
              </div>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <p className="about-text fade-up">
              At Elewix, we blend aesthetic minimalism with high-performance
              digital solutions. Our mission is to transform brands through
              innovative design and strategic thinking.
            </p>

            <div className="about-stats">
              <div className="stat-item fade-up delay-3">
                <span className="stat-number">5</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item fade-up delay-4">
                <span className="stat-number">120</span>
                <span className="stat-label">Projects Done</span>
              </div>
            </div>

            <a href="#portfolio" className="about-btn-link">
              <button className="about-btn">
                Learn More <span className="btn-arrow">→</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;