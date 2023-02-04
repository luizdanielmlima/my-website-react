import styled from 'styled-components';

export const PortfolioCardContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 380px;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const PortfolioCardBody = styled.div`
  padding: 20px;
`;

export const PortfolioCardImgContainer = styled.div<{
  hasLink: boolean;
}>`
  .clickable-img {
    position: relative;
    margin: 0;
    padding: 0;
    cursor: ${(props) => (props.hasLink ? 'pointer' : 'auto')};
    display: inline-block;
    width: 100%;
    opacity: 1;
    transition: opacity 0.4s;
  }

  .clickable-img-raster {
    height: 30vh;
    width: 100%;
    object-fit: cover;
  }

  .clickable-img-icon {
    z-index: 100;
    color: ${({ theme }) => theme.colors.dark};
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
    opacity: ${(props) => (props.hasLink ? 0.7 : 1)};
  }

  .clickable-img:hover .clickable-img-icon-bg {
    opacity: ${(props) => (props.hasLink ? 0.5 : 0)};
  }

  .clickable-img:hover .clickable-img-icon {
    opacity: ${(props) => (props.hasLink ? 0.7 : 0)};
  }
`;

export const PortfolioCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h3 {
    margin: 0;
    margin-right: 4px;
  }
`;

export const PortfolioCardHeaderIcons = styled.div`
  display: flex;
  justify-content: flex-end;

  a:not(:first-child) {
    margin-left: 8px;
  }
`;

export const PortfolioTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 4px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
  }

  h3 {
    margin: 0;
    margin-right: 4px;
  }
`;

export const PortfolioCardDescription = styled.div`
  line-height: 1.5rem;
`;
