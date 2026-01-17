// src/Pages/Contactpage.jsx
import React from 'react';

// Aapke structure ke mutabiq Contact Hero import
import ContactHero from '../Componets/Contactusform/Contact-Hero/Contact-Hero'; 
import Contactform from '../Componets/Contactusform/Contactform/Contactform.jsx';
import ContactCTA from '../Componets/Home/ContactCTA/ContactCTA.jsx';

const ContactPage = () => {
  return (
    <main>
      {/* Contact Form Wala Hero Section */}
      <ContactHero />
      <Contactform />
      <ContactCTA />
    </main>
  );
};

export default ContactPage;