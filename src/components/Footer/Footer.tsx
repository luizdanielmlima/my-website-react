import React from 'react';

import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.bg};
  text-align: center;
  padding: 48px;

  p {
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;

    &:last-child() {
      font-size: 0.6rem;
    }
  }
`;

const LinkToTop = styled.p`
  cursor: pointer !important;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <p>Luiz Daniel Lima, 2023</p>
      <p>Thank you for visiting my website!</p>
      <LinkToTop onClick={scrollToTop}>Back to top</LinkToTop>
    </FooterContainer>
  );
};

export default Footer;
