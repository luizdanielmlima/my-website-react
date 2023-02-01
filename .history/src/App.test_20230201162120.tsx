import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main nav links', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/home/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/what i do/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText(/about me/i);
  expect(linkElement3).toBeInTheDocument();
  const linkElement4 = screen.getByText(/portfolio/i);
  expect(linkElement4).toBeInTheDocument();
});
