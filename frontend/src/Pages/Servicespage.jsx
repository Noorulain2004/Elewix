// src/Pages/homepage.jsx
import React from 'react';
import Serviceshero from '../Componets/Services/ServicesHero/ServicesHero.jsx'; 
import ServicesList from '../Componets/Services/Serviceslist/Serviceslist.jsx';

const Ourservices = () => {
  return (
    <main>
        <Serviceshero />  
        <ServicesList />
      
    </main>
  );
};

export default Ourservices;