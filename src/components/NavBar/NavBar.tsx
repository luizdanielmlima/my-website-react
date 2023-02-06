import React from 'react';

import { FaGithub, FaFilePdf } from 'react-icons/fa';
import {
  ExternalLinkLabel,
  LinkLabel,
  Links,
  LinksItem,
  LinksWrapper,
} from './NavBar.styled';

const NavBar = () => {
  return (
    <LinksWrapper>
      <Links>
        <LinksItem>
          <LinkLabel
            activeClass="active"
            to="banner"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Home
          </LinkLabel>
        </LinksItem>
        <LinksItem>
          <LinkLabel
            activeClass="active"
            to="whatido"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            What I Do
          </LinkLabel>
        </LinksItem>
        <LinksItem>
          <LinkLabel
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            About Me
          </LinkLabel>
        </LinksItem>
        <LinksItem>
          <LinkLabel
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Portfolio
          </LinkLabel>
        </LinksItem>
        <LinksItem>
          <ExternalLinkLabel
            href="./assets/LuizDanielLima_FrontEndDev_CV-V04_eng.pdf"
            target="_blank"
            aria-label="link to pdf file, CV"
          >
            <FaFilePdf />
            <p>CV</p>
          </ExternalLinkLabel>
        </LinksItem>
        <LinksItem>
          <ExternalLinkLabel
            href="https://github.com/luizdanielmlima"
            target="_blank"
            aria-label="link to Github"
          >
            <FaGithub />
          </ExternalLinkLabel>
        </LinksItem>
      </Links>
    </LinksWrapper>
  );
};

export default NavBar;
