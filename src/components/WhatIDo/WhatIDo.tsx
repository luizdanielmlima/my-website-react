import React from 'react';
import { Section, SectionTitle } from '../../App.styled';
import {
  Abilities,
  Ability,
  WhatIDoSection,
  WhatIDoTitle,
} from './WhatIDo.styled';

const WhatIDo = () => {
  return (
    <WhatIDoSection id="whatido">
      <WhatIDoTitle>What I Do</WhatIDoTitle>
      <Abilities>
        <Ability>
          <p>
            Build web and mobile applications using frameworks such as
            React, Angular, Next.js and Ionic
          </p>
        </Ability>
        <Ability>
          <p>
            Build performant, modern and clean Javascript or
            preferably (strongly typed) Typescript code
          </p>
        </Ability>
        <Ability>
          <p>
            Implement responsive layouts using CSS, Sass or CSS-in-JS
            solutions such as Styled Components or Emotion
          </p>
        </Ability>
        <Ability>
          <p>
            Translate UI designs built on Figma, Adobe XD and others
            into fully working prototypes or web/mobile applications
          </p>
        </Ability>
        <Ability>
          <p>
            Implement and configure unit tests using JEST and/or React
            Testing Library and E2E tests with Playwright
          </p>
        </Ability>
        <Ability>
          <p>
            Build and customize UI elements with libraries such as
            Material Design, Kendo and Storybook.
          </p>
        </Ability>
      </Abilities>
    </WhatIDoSection>
  );
};

export default WhatIDo;
