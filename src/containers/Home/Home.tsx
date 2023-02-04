import React from 'react';
import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import MainBanner from '../../components/MainBanner';
import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import WhatIDo from '../../components/WhatIDo';

const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <WhatIDo />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
