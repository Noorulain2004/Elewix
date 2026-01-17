// src/Pages/homepage.jsx
import React from 'react';

// Paths check kar lein (Componets spelling jaisa aapne likha hai)
import Hero from '../Componets/Home/Herosection/Herosection.jsx';
import Services from '../Componets/Home/Services/Services.jsx';
import Testimonials from '../Componets/Home/Testimonials/Testimonials.jsx';
import ContactCTA from '../Componets/Home/ContactCTA/ContactCTA.jsx';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};

export default Home;