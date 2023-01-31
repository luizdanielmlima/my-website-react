import React from 'react';

const NavBarLinks = () => {
  return (
    <div className="menu-links">
      <ul className="menu-links-ul">
        <li>
          <a href="#home" id="nav-home">
            Home
          </a>
        </li>
        <li>
          <a href="#whatido" id="nav-whatido">
            What I Do
          </a>
        </li>
        <li>
          <a href="#about" id="nav-about">
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" id="nav-portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="./assets/LuizDanielLima_FrontEndDev_CV-V04_eng.pdf"
            target="_blank"
            aria-label="link to CV, version 4"
          >
            <i className="far fa-file-pdf mr-2"></i>CV
          </a>
        </li>
        <li>
          <a
            href="https://github.com/luizdanielmlima"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarLinks;
