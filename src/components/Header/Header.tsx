import React from 'react';
import styled from 'styled-components';
import MyLogo from '../MyLogo';
import NavBar from '../NavBar';

const HeaderWrapper = styled.header`
  height: ${({ theme }) => theme.menuHeight};
  margin: 0;
  padding: 0 28px;
  background: ${({ theme }) => theme.colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <MyLogo />
      <NavBar />
    </HeaderWrapper>
  );
};

export default Header;
