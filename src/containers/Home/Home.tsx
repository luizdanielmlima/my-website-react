import React from 'react';
import AboutMe from '../../components/AboutMe';
import MainBanner from '../../components/MainBanner';
import NavBar from '../../components/NavBar';
import Portfolio from '../../components/Portfolio';
import WhatIDo from '../../components/WhatIDo';

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <MainBanner />
      <WhatIDo />
      <AboutMe />
      <Portfolio />
    </>
  );
};

export default Home;
