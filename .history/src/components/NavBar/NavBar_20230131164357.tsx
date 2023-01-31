import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
`;

const MyLogo = styled.section`
  display: flex;
  align-items: center;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <MyLogo>
        <p>L</p>
        <p>D</p>
        <p>LIMA</p>
      </MyLogo>
    </NavBarContainer>
  );
};

export default NavBar;
