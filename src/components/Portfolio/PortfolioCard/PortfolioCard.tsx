import React, { FC } from 'react';
import {
  PortfolioCardBody,
  PortfolioCardContainer,
  PortfolioCardImgContainer,
  PortfolioIconsArea,
  PortfolioTitleWrapper,
} from './PortfolioCard.styled';

interface PortfolioCardProps {
  title: string;
  type: 'commercial' | 'side project';
  description?: string;
  thumbUrl: string;
  gitHubUrl?: string;
  previewUrl?: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  title,
  type,
  description,
  thumbUrl,
  gitHubUrl,
  previewUrl,
}) => {
  return (
    <PortfolioCardContainer>
      <PortfolioCardImgContainer>
        <figure className="clickable-img">
          {/* <i className="fab fa-youtube fa-2x clickable-img-icon"></i>
              <!-- <i className="fa fa-play fa-2x clickable-img-icon"></i> --> */}
          <div className="clickable-img-icon-bg"></div>
          <img
            className="clickable-img-raster"
            src={`./assets/${thumbUrl}`}
            alt="portfolio thumbnail"
          />
        </figure>
      </PortfolioCardImgContainer>

      <PortfolioCardBody>
        <PortfolioIconsArea>
          <PortfolioTitleWrapper>
            <h3>{title}</h3>
            <p>|</p>
            <p>{type}</p>
          </PortfolioTitleWrapper>
          <div className="icons">
            <a data-toggle="modal" data-target="#videoModal">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </PortfolioIconsArea>
        <p>
          A CMS built in Angular 8 that uses Components, Services,
          Routing, etc. For the back-end I used Google Firebase. It is
          a commercial project, no Github avaiable.
        </p>
      </PortfolioCardBody>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
