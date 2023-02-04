import styled from 'styled-components';
import { Section, SectionTitle } from '../../App.styled';

export const AboutMeSection = styled(Section)`
  position: relative;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const AboutMeSectionTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const AboutMeContent = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1.5fr);
  grid-gap: 50px;
  justify-items: center;
  line-height: 2.5;

  ul li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export const AboutItem = styled.div`
  padding: 16px 8px;

  h3 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SkillsIcons = styled.div`
  height: 200px;
  margin: 10px 0px 0px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const AboutItemDoubleInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
`;
