import React from 'react';

import styled from 'styled-components';

const MyLogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
  user-select: none;

  p {
    margin: 0;
    padding: 0 5px;
    font-size: 2em;
    text-transform: uppercase;
  }

  p:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  p:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  p:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MyLogo = () => {
  return (
    <MyLogoContainer>
      <p>L</p>
      <p>D</p>
      <p>LIMA</p>
    </MyLogoContainer>
  );
};

export default MyLogo;
