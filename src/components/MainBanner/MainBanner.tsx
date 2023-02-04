import React from 'react';

import {
  Abilities,
  AreaFullName,
  AreaIAm,
  AreaIKnow,
  AreaJob,
  BannerArea,
  Box1,
  Name,
  Poster,
  VLine,
} from './MainBanner.styled';

const MainBanner = () => {
  return (
    <BannerArea id="banner">
      <Poster>
        <AreaFullName>
          <Name>Luiz</Name>
          <Name>Daniel</Name>
          <Name>Lima</Name>
        </AreaFullName>
        <VLine></VLine>
        <AreaIKnow>
          <Abilities>
            <li>javascript</li>
            <li>html / css</li>
            <li>react</li>
            <li>angular</li>
            <li>ionic 4</li>
            <li>
              <a href="#whatido">more...</a>
            </li>
          </Abilities>
        </AreaIKnow>
        <Box1></Box1>
        <VLine></VLine>
        <AreaIAm>
          <AreaJob>
            <h2>front</h2>
            <h2>end</h2>
            <h2>developer</h2>
          </AreaJob>
        </AreaIAm>
      </Poster>
    </BannerArea>
  );
};

export default MainBanner;
