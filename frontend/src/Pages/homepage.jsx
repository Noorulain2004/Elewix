
import React from 'react';
import Hero from '../Componets/Home/Herosection/Herosection.jsx';
import About from '../Componets/Home/About/About.jsx';
import Services from '../Componets/Home/Services/Services.jsx';
import Portfolio from '../Componets/Home/Portfolio/portfolio.jsx';
import Stats from '../Componets/Home/Stats/Stats.jsx';
import Testimonials from '../Componets/Home/Testimonials/Testimonials.jsx';
import Contactform from '../Componets/Home/Contactform/Contactform.jsx';
import ContactCTA from '../Componets/Home/ContactCTA/ContactCTA.jsx';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
        <Contactform /> 
      <ContactCTA />
    </main>
  );
};

export default Home;