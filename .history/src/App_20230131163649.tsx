import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Home from './containers/Home/Home';
import { websiteTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
