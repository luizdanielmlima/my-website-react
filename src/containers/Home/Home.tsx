import React, { useEffect } from 'react';

import ReactGA from 'react-ga4';

import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import MainBanner from '../../components/MainBanner';
import Portfolio from '../../components/Portfolio';
import WhatIDo from '../../components/WhatIDo';

const Home = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/home' });
  }, []);

  return (
    <>
      <MainBanner />
      <WhatIDo />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
