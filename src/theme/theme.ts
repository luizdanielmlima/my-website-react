export const websiteTheme = {
  colors: {
    primary: '#ed9a4a',
    secondary: '#bc252c',
    tertiary: '#e6af2e',
    bg: '#f4e1b7',
    bgDark: '#302d2a',
    dark: '#1d1c1b',
  },
  menuHeight: '80px',
};

// For reference only, styled-breakpoints sizes
// more on https://www.npmjs.com/package/styled-breakpoints

// import { up, down, between, only } from 'styled-breakpoints';

// ${only('md')} {
//   color: rebeccapurple;
// }

export const defaultBreakpoints: Record<string, string> = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};
