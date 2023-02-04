import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: var(--bg-color);
  text-align: center;
  padding: 48px;

  p {
    display: block;
    font-size: 0.8rem;

    &:not(:last-child) {
      margin-bottom: 8px;
      font-size: 1.2rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Luiz Daniel Lima, 2023</p>
      <p>Thank you for visiting my website!</p>
    </FooterContainer>
  );
};

export default Footer;
