import styled from 'styled-components';
import { Section, SectionTitle } from '../../App.styled';

export const WhatIDoSection = styled(Section)`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const WhatIDoTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.dark};
`;

export const Abilities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 24px;
`;

export const Ability = styled.div`
  position: relative;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  padding: 32px;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 8px 8px 0 black;

  display: flex;
  align-items: center;
`;
