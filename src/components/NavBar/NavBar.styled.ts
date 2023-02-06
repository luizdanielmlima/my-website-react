import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

export const LinksWrapper = styled.div`
  margin-left: auto;

  .active {
    color: ${({ theme }) => theme.colors.bg};
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LinksItem = styled.li`
  display: inline-block;
  margin-left: 70px;
  position: relative;
  text-decoration: none;
`;

export const LinkLabelCSS = css`
  cursor: pointer;
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: 1.5em;

  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
  }

  &::before {
    content: '';
    display: block;
    height: 5px;
    background-color: var(--bg-color);

    position: absolute;
    top: -8px;
    width: 0%;

    transition: all ease-in-out 250ms;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const LinkLabel = styled(Link)`
  ${LinkLabelCSS}
`;

export const ExternalLinkLabel = styled.a`
  ${LinkLabelCSS}
`;
