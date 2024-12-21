"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import CustumerSupport from './CustomerSupport/CustumerSupport';
import Price from './Price/Price';
import SupportTeam from './SupportTeam/SupportTeam';
import Company from './Company/Company';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {

  useEffect(()=> {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
    
    // Refresh AOS to detect newly added or updated elements
    AOS.refresh();
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <CustumerSupport />
      <Price />
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;