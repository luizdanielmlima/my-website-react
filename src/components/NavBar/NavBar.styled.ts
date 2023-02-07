import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { down } from 'styled-breakpoints';

export const LinksWrapper = styled.div`
  margin-left: auto;

  .active {
    color: ${({ theme }) => theme.colors.bg};
  }

  ${down('md')} {
    padding: 0;
    margin: 0;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 80px;
    transform: translate(-50%, 0);
    list-style: none;
    display: flex;
    flex-direction: row;
    z-index: 9999;
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  ${down('md')} {
    display: block;
    padding: 16px 24px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const LinksItem = styled.li`
  display: inline-block;
  margin: 30px;
  position: relative;
  text-decoration: none;

  ${down('md')} {
    padding: 10px 0px;
    margin: 0;
    display: block;
  }
`;

export const LinkLabelCSS = css`
  cursor: pointer;
  letter-spacing: 0.15rem;
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: 1.5em;
  width: max-content;

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

    ${down('md')} {
      top: -2px;
    }
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
