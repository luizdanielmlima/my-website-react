import React, { FC } from 'react';
import styled from 'styled-components';

export const ResponsiveVideo = styled.div`
  overflow: hidden;
  aspect-ratio: 16 / 9;
  /* padding-bottom: 56.25%; */
  /* position: relative;
  height: 0; */

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const YoutubeEmbed: FC<{ embedId: string }> = ({ embedId }) => (
  <ResponsiveVideo>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </ResponsiveVideo>
);

export default YoutubeEmbed;
