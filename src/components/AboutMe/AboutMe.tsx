import React from 'react';

import {
  AboutItemDoubleInfo,
  AboutMeContent,
  AboutMeSection,
  AboutMeSectionTitle,
  AboutItem,
  SkillsIcons,
} from './AboutMe.styled';
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNpm,
  FaGithub,
  FaSass,
} from 'react-icons/fa';
import { SiIonic } from 'react-icons/si';
import { IconContext } from 'react-icons';

const AboutMe = () => {
  return (
    <AboutMeSection id="about">
      <AboutMeSectionTitle data-obs="about">
        About Me
      </AboutMeSectionTitle>
      <AboutMeContent>
        <AboutItem>
          <h3>Who I am</h3>
          <p>
            I'm an engineer who switched carreers many years ago. I
            consider myself a "life long learner", who loves
            programming and design. I enjoy solving problems and
            building things with thoughtful planning, hard work and
            creativity.
          </p>
        </AboutItem>
        <AboutItem>
          <h3>Some More Info</h3>
          <ul>
            <li>Happily married, father of a daughter</li>
            <a
              className="linked-item"
              href="https://luizdanielmlima.github.io/tennisballmachine/"
              target="_blank"
              rel="noreferrer"
            >
              <li>Built my own tennis ball machine!</li>
            </a>
            <li>Founded a start-up 10 years ago</li>
            <a
              className="linked-item"
              href="https://luizdanielmlima.github.io/trip-patagonia/"
              target="_blank"
              rel="noreferrer"
            >
              <li>Trekked in Patagonia, Argentina</li>
            </a>
            <li>Fluent English, learning French</li>
          </ul>
        </AboutItem>
        <AboutItem>
          <h3>Skills</h3>
          <AboutItemDoubleInfo>
            <ul>
              <li>JS/TS, HTML, CSS/SaSS</li>
              <li>Angular, Ionic</li>
              <li>React, Redux</li>
              <li>Material UI</li>
              <li>Responsive Design</li>
            </ul>
            <SkillsIcons>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaJs />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaHtml5 />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaCss3Alt />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaReact />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaAngular />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '2.4rem' }}>
                <div>
                  <SiIonic />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaSass />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <FaNpm />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '2.6rem' }}>
                <div>
                  <FaGithub />
                </div>
              </IconContext.Provider>
            </SkillsIcons>
          </AboutItemDoubleInfo>
        </AboutItem>
      </AboutMeContent>
    </AboutMeSection>
  );
};

export default AboutMe;
