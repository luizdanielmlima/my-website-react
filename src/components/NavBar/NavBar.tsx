import React from 'react';
import styled from 'styled-components';
import MyLogo from '../MyLogo/MyLogo';
import NavBarLinks from '../NavBarLinks';

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

const NavBar = () => {
  return (
    <Header>
      <NavBarContainer>
        <MyLogo />
        <NavBarLinks />
      </NavBarContainer>
    </Header>
  );
};

export default NavBar;
