import React from 'react';
import AboutMe from '../../components/AboutMe';
import MainBanner from '../../components/MainBanner';
import NavBar from '../../components/NavBar';
import WhatIDo from '../../components/WhatIDo';

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <MainBanner />
      <WhatIDo />
      <AboutMe />
    </>
  );
};

export default Home;
