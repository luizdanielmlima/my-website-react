import React, { FC } from 'react';

import { IconContext } from 'react-icons';
import YoutubeEmbed from '../../YoutubeEmbed/YoutubeEmbed';
import Modal from 'react-modal';
import ReactGA from 'react-ga4';

import { FaYoutube, FaEye, FaGithub } from 'react-icons/fa';
import { PortfolioCardModel } from '../portfolioData';

import {
  PortfolioCardBody,
  PortfolioCardContainer,
  PortfolioCardImgContainer,
  PortfolioCardHeader,
  PortfolioTitleWrapper,
  PortfolioCardHeaderIcons,
  PortfolioCardDescription,
} from './PortfolioCard.styled';

const previewIconConfig = {
  size: '2rem',
  className: 'clickable-img-icon',
};

const headerIconsConfig = {
  size: '1.5rem',
  className: 'clickable-img-icon',
};

const customStyles = {
  content: {
    top: '20%',
    bottom: '20%',
    right: '20%',
    left: '20%',
  },
};

const PortfolioCard: FC<PortfolioCardModel> = ({
  title,
  type,
  description,
  thumbUrl,
  gitHubUrl,
  previewUrl,
  previewType,
  youtubeVideoId,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleClickCard = () => {
    ReactGA.event({
      category: 'portfolio',
      action: 'view portfolio item',
      label: `${title}`,
    });
    if (youtubeVideoId) {
      openModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <PortfolioCardContainer>
        <PortfolioCardImgContainer
          hasLink={
            (previewUrl !== null && previewUrl !== undefined) ||
            (youtubeVideoId !== null && youtubeVideoId !== undefined)
          }
        >
          <a
            href={previewUrl && previewUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleClickCard}
          >
            <figure className="clickable-img">
              {previewType === 'externalUrl' && (
                <IconContext.Provider value={previewIconConfig}>
                  <FaEye />
                </IconContext.Provider>
              )}
              {previewType === 'youtubeModal' && (
                <IconContext.Provider value={previewIconConfig}>
                  <FaYoutube />
                </IconContext.Provider>
              )}

              {previewUrl && (
                <div className="clickable-img-icon-bg"></div>
              )}

              <img
                className="clickable-img-raster"
                src={`./assets/${thumbUrl}`}
                alt="portfolio thumbnail"
              />
            </figure>
          </a>
        </PortfolioCardImgContainer>

        <PortfolioCardBody>
          <PortfolioCardHeader>
            <PortfolioTitleWrapper>
              <h3>{title}</h3>
              <p>|</p>
              <p>{type}</p>
            </PortfolioTitleWrapper>
            <PortfolioCardHeaderIcons>
              {previewType === 'externalUrl' && (
                <a href={previewUrl} target="_blank" rel="noreferrer">
                  <IconContext.Provider value={headerIconsConfig}>
                    <FaEye />
                  </IconContext.Provider>
                </a>
              )}
              {previewType === 'youtubeModal' && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleClickCard}
                >
                  <IconContext.Provider value={headerIconsConfig}>
                    <FaYoutube />
                  </IconContext.Provider>
                </a>
              )}
              {gitHubUrl && (
                <a href={gitHubUrl} target="_blank" rel="noreferrer">
                  <IconContext.Provider value={headerIconsConfig}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              )}
            </PortfolioCardHeaderIcons>
          </PortfolioCardHeader>
          <PortfolioCardDescription>
            {description}
          </PortfolioCardDescription>
        </PortfolioCardBody>
      </PortfolioCardContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Youtube Video Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <YoutubeEmbed embedId={'VSWYHQtCzmI'} />
      </Modal>
    </>
  );
};

export default PortfolioCard;
