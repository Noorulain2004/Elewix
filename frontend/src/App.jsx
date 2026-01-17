// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Componets/Navbar/Navbar.jsx';
import Footer from './Componets/Footer/Footer.jsx';
import ScrollToTop from './Componets/ScrollToTop/ScrollToTop.jsx';
// Pages
import Home from './Pages/homepage.jsx';
import Contactpage from './Pages/Contactpage.jsx';
import Services from './Pages/Servicespage.jsx';
function App() {
  return (
    <div className="app-main">
      <ScrollToTop />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
