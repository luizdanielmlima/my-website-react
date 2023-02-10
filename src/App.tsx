import React from 'react';

import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import { websiteTheme } from './theme/theme';

ReactGA.initialize('G-JFNN62XGMC');
ReactGA.pageview(window.location.pathname);

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
