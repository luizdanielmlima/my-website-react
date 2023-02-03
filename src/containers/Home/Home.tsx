import React from 'react';
import MainBanner from '../../components/MainBanner';
import NavBar from '../../components/NavBar';
import WhatIDo from '../../components/WhatIDo';

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <MainBanner />
      <WhatIDo />
    </>
  );
};

export default Home;
