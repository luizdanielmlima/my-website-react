import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import { websiteTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
