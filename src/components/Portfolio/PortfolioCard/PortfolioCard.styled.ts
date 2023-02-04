import styled from 'styled-components';

export const PortfolioCardContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 360px;
  color: var(--bg-color);
  background-color: var(--dark-color);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const PortfolioCardBody = styled.div`
  padding: 20px;
`;

export const PortfolioCardImgContainer = styled.a`
  .clickable-img {
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: inline-block;
    width: 100%;
    opacity: 1;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.4s;
    /* background-color: greenyellow; */
  }

  .clickable-img-raster {
    height: 30vh;
    width: 100%;
    object-fit: cover;
  }

  .clickable-img-icon {
    z-index: 100;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .clickable-img-icon-bg {
    z-index: 50;
    position: absolute;
    background-color: white;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid grey;
    border-radius: 50%;
    opacity: 0;
  }

  .clickable-img:hover {
    opacity: 0.7;
  }

  .clickable-img:hover .clickable-img-icon-bg {
    opacity: 0.3;
  }

  .clickable-img:hover .clickable-img-icon {
    opacity: 0.7;
  }
`;

export const PortfolioIconsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h3 {
    margin: 0;
    margin-right: 4px;
  }
`;

export const PortfolioTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 4px;
    color: var(--primary-color);
    padding: 0;
  }

  h3 {
    margin: 0;
    margin-right: 4px;
  }
`;
