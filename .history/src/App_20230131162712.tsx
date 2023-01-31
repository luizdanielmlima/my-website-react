import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Home from './containers/Home/Home';

const websiteTheme = {
  colors: {
    primary: '#ed9a4a',
    secondary: '#bc252c',
    tertiary: '#e6af2e',
    bg: '#f4e1b7',
    bgDark: '#302d2a',
    dark: '#1d1c1b',
    menuHeight: '80px',
  },
};

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
