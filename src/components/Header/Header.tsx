import React, { useState, useCallback, useEffect } from 'react';

import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import MyLogo from '../MyLogo';
import NavBar from '../NavBar';
import { defaultBreakpoints } from '../../theme/theme';
import useMediaQuery from '../../hooks/useMediaQuery';

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

const Toggle = styled.div`
  display: inline-block;
  position: absolute;
  cursor: pointer;
  right: 24px;
  top: 50%;
  transform: translate(-5%, -50%);
  z-index: 2;
  color: var(--primary-color);

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
  }
`;

const Header = () => {
  const isMobile = useMediaQuery(
    `(max-width: ${defaultBreakpoints['md']})`,
  );
  console.log('isMobile: ', isMobile);

  const [navBarIsVisible, setNavBarIsVisible] = useState<boolean>();

  const toggleNavBar = useCallback(() => {
    setNavBarIsVisible((prevState) => !prevState);
  }, [setNavBarIsVisible]);

  const handleLinkClicked = () => {
    if (isMobile) {
      setNavBarIsVisible(false);
    }
  };

  useEffect(() => {
    setNavBarIsVisible(!isMobile);
  }, [isMobile]);

  return (
    <HeaderWrapper>
      <MyLogo />
      {navBarIsVisible && (
        <NavBar onLinkClicked={() => handleLinkClicked()} />
      )}
      {isMobile && (
        <Toggle>
          <IconContext.Provider value={{ size: '1.6rem' }}>
            <FaBars onClick={toggleNavBar} />
          </IconContext.Provider>
        </Toggle>
      )}
    </HeaderWrapper>
  );
};

export default Header;
