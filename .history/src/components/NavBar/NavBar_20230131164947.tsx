import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: ${({ theme }) => theme.menuHeight};
  margin: 0;
  position: relative;
`;

const MyLogo = styled.div`
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
    background-color: var(--bg-color);
  }

  p:nth-child(2) {
    background-color: var(--primary-color);
  }

  p:nth-child(3) {
    background-color: var(--secondary-color);
  }
`;

const NavBar = () => {
  return (
    <Header>
      <NavBarContainer>
        <MyLogo>
          <p>L</p>
          <p>D</p>
          <p>LIMA</p>
        </MyLogo>
      </NavBarContainer>
    </Header>
  );
};

export default NavBar;
