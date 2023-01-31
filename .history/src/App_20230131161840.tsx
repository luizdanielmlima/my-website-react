import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Title, Wrapper } from './App.styled';

const websiteTheme = {
  colors: {
    primary: '#e6cfcf',
  },
};

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
