import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark}; ;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: ${({ theme }) => theme.colors.primary};
`;
