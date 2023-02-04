import React from 'react';

import {
  PortfolioContent,
  PortfolioSection,
  PortfolioTitle,
} from './Portfolio.styled';
import PortfolioCard from './PortfolioCard';
import { portfolioCardsData } from './portfolioData';

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioContent>
        {portfolioCardsData.map((portfItem) => {
          return (
            <PortfolioCard
              title={portfItem.title}
              type={portfItem.type}
              description={portfItem.description}
              thumbUrl={portfItem.thumbUrl}
              gitHubUrl={portfItem.gitHubUrl}
              previewUrl={portfItem.previewUrl}
              previewType={portfItem.previewType}
            />
          );
        })}
      </PortfolioContent>
    </PortfolioSection>
  );
};

export default Portfolio;
