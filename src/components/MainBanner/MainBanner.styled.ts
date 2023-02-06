import { Link } from 'react-scroll';

import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const BannerArea = styled.main`
  min-height: 90vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled.div`
  height: auto;
  width: 500px;
  margin: 0 auto;
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 20px 1fr;
  grid-template-rows: auto auto;
  transform: rotate(-15deg);

  ${down('md')} {
    width: 350px;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: auto auto;
    /* border: solid 1px red; */
    transform: rotate(0deg);
  }
`;

export const AreaFullName = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: end;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.dark};
  border-left: 5px solid ${({ theme }) => theme.colors.dark};
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark};
  justify-self: end;

  ${down('md')} {
    justify-content: center;
  }
`;

export const Name = styled.h2`
  font-size: 4rem;

  ${down('md')} {
    font-size: 2rem;
  }
`;

export const Box1 = styled.div`
  width: 150px;
  margin: 20px;
  justify-self: end;
  background-color: ${({ theme }) => theme.colors.primary};
  -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
  clip-path: polygon(100% 0, 0 0, 100% 100%);

  ${down('md')} {
    width: 100px;
    margin: 20px;
    justify-self: end;
    background-color: var(--primary-color);
    -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
`;

export const VLine = styled.div`
  width: 1em;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const AreaIAm = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 20px;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-self: start;
`;

export const AreaJob = styled.div`
  padding: 15px 25px;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.dark};

  ${down('md')} {
    padding: 5px 15px;
    font-size: 1em;
    color: var(--dark-color);
  }
`;

export const AreaIKnow = styled.div`
  font-size: 1.2em;
  padding: 24px 10px;
  align-self: end;
  border-bottom: 5px dotted ${({ theme }) => theme.colors.dark};
`;

export const Abilities = styled.ul`
  color: ${({ theme }) => theme.colors.dark};
  list-style: none;
  padding: 20px;
  align-self: end;
`;

export const LinkToMore = styled(Link)`
  cursor: pointer !important;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
