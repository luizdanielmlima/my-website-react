import React from 'react';

import ReactGA from 'react-ga';

import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import MainBanner from '../../components/MainBanner';
import Portfolio from '../../components/Portfolio';
import WhatIDo from '../../components/WhatIDo';

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});

const Home = () => {
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
