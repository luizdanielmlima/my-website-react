import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Title, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <Title>Hello World!</Title>
    </Wrapper>
  );
};

export default Home;
