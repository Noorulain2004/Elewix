// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    headline: "Impressive Showcase!",
    quote: "A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really stood out.",
    name: "Conor Bradley",
    role: "Senior Marketing, Spotify",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    headline: "Excellent Work!",
    quote: "The team truly amplified our messaging through their expert use of visuals and motion design.",
    name: "Adam Lewis",
    role: "Manager, OKG",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    headline: "Amazing Team!",
    quote: "They listened to our pain points and delivered a solution that exceeded our expectations in record time.",
    name: "Adrian Lee",
    role: "President, Cesz",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    headline: "Best Decision!",
    quote: "From the initial research to the final implementation, the process was smooth and professional.",
    name: "Zlatan Amberland",
    role: "PM at Dumar Inc",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      
      {/* Section Label */}
      <div className="container">
          <div className="section-header">
             <span className="green-square"></span>
             <span className="section-title">TESTIMONIALS</span>
          </div>
      </div>

      {/* Moving Track (Marquee) */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          
          {/* Loop 1: Original List */}
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
               <div className="card-top">
                   <span className="card-headline">{item.headline}</span>
               </div>
               
               <p className="card-quote">"{item.quote}"</p>
               
               <div className="card-footer">
                   <img src={item.img} alt={item.name} className="avatar" />
                   <div className="user-info">
                       <h4 className="user-name">{item.name}</h4>
                       <span className="user-role">{item.role}</span>
                   </div>
               </div>
            </div>
          ))}

          {/* Loop 2: Duplicate List (For Seamless Effect) */}
          {testimonialsData.map((item) => (
            <div key={`dup-${item.id}`} className="testimonial-card">
               <div className="card-top">
                   <span className="card-headline">{item.headline}</span>
               </div>
               
               <p className="card-quote">"{item.quote}"</p>
               
               <div className="card-footer">
                   <img src={item.img} alt={item.name} className="avatar" />
                   <div className="user-info">
                       <h4 className="user-name">{item.name}</h4>
                       <span className="user-role">{item.role}</span>
                   </div>
               </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Testimonials;