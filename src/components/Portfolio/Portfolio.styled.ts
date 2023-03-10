import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { Section, SectionTitle } from '../../App.styled';

export const PortfolioSection = styled(Section)`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const PortfolioTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.dark};
`;

export const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 80px;

  ${down('sm')} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
