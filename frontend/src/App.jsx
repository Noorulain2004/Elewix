
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar.jsx';
import Footer from './Componets/Footer/Footer.jsx';
import ScrollToTop from './Componets/ScrollToTop/ScrollToTop.jsx';
import Home from './Pages/homepage.jsx';

function App() {
  return (
    <div className="app-main">
      <ScrollToTop />  
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
