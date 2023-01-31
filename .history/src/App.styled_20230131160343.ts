import styled from 'styled-components';

export const StepCheckMark = styled.div`
  display: ${(props: any) => (props.isFinished ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.neutral[400]};

  &:hover > ${StepLabel} {
    color: ${({ theme }) => theme.colors.neutral[900]};
  }
`;
