import React from 'react';

import {
  PortfolioContent,
  PortfolioSection,
  PortfolioTitle,
} from './Portfolio.styled';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <PortfolioSection>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioContent>
        <PortfolioCard
          title="Moztra"
          type="commercial"
          description="An Angular 9 app that shows historical climate and carbon emissions data through an interactive map in an educational way. Built as Nth freelancer, no github available."
          thumbUrl="portfolio_moztra_crop.png"
        />
      </PortfolioContent>
    </PortfolioSection>
  );
};

export default Portfolio;
