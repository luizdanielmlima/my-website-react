import React from 'react';
import styled from 'styled-components';

import { FaGithub, FaFilePdf } from 'react-icons/fa';

const LinksWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
`;

const LinksItem = styled.li`
  display: inline-block;
  margin-left: 70px;
  padding-top: 8px;
  position: relative;
`;

const Link = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
  }

  &::before {
    content: '';
    display: block;
    height: 5px;
    background-color: var(--bg-color);

    position: absolute;
    top: 0;
    width: 0%;

    transition: all ease-in-out 250ms;
  }

  &:hover::before {
    width: 100%;
  }
`;

const NavBarLinks = () => {
  return (
    <LinksWrapper>
      <Links>
        <LinksItem>
          <Link href="#home" id="nav-home">
            Home
          </Link>
        </LinksItem>
        <LinksItem>
          <Link href="#whatido" id="nav-whatido">
            What I Do
          </Link>
        </LinksItem>
        <LinksItem>
          <Link href="#about" id="nav-about">
            About Me
          </Link>
        </LinksItem>
        <LinksItem>
          <Link href="#portfolio" id="nav-portfolio">
            Portfolio
          </Link>
        </LinksItem>
        <LinksItem>
          <Link
            href="./assets/LuizDanielLima_FrontEndDev_CV-V04_eng.pdf"
            target="_blank"
            aria-label="link to CV, version 4"
          >
            <FaFilePdf />
            CV
          </Link>
        </LinksItem>
        <LinksItem>
          <Link
            href="https://github.com/luizdanielmlima"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </LinksItem>
      </Links>
    </LinksWrapper>
  );
};

export default NavBarLinks;
