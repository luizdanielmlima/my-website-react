import styled from 'styled-components';

export const BannerArea = styled.main`
  min-height: 90vh;
  background-color: var(--bg-color);
  /* padding: 25px 80px 45px 80px; */
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
  /* border: solid 1px red; */
  transform: rotate(-15deg);
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
`;

export const Name = styled.h2`
  font-size: 4em;
`;

export const Box1 = styled.div`
  width: 150px;
  margin: 20px;
  justify-self: end;
  background-color: ${({ theme }) => theme.colors.primary};
  -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
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
