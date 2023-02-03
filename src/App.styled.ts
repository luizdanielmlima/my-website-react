import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 40px;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.bg};
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: 0.25rem;
`;
