import React from 'react';
import './Stats.css';
// Ensure this path matches your folder structure
import statsBg from '../../../assets/Stats/forest.jpg'; 

const Stats = () => {
  return (
    <section className="stats-section">
      {/* 1. Background Layer with Parallax */}
      <div 
        className="stats-bg" 
        style={{ backgroundImage: `url(${statsBg})` }}
      ></div>
      
      {/* 2. Dark Gradient Overlay */}
      <div className="stats-overlay"></div>

      {/* 3. Top Label (Above the numbers) */}
      <div className="stats-top-label">
        <span className="square"></span> MORE ABOUT US
      </div>

      {/* 4. Main Stats Container */}
      <div className="stats-container">
        
        <div className="stats-box">
          <div className="stats-label">
            <span className="square"></span> HAPPY CLIENTS
          </div>
          <h2 className="stats-number">98+</h2>
        </div>

        <div className="stats-box">
          <div className="stats-label">
            <span className="square"></span> OUR REVENUE
          </div>
          <h2 className="stats-number">200M</h2>
        </div>

        <div className="stats-box">
          <div className="stats-label">
            <span className="square"></span> PROJECTS DONE
          </div>
          <h2 className="stats-number">99%</h2>
        </div>

      </div>
    </section>
  );
};

export default Stats;