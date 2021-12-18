import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  render(<App />);
  const titleEle = screen.getByText(/More than just shorter links/i);
  expect(titleEle).toBeInTheDocument();
});
