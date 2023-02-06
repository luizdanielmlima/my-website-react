import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';

import Home from './containers/Home';
import { websiteTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
