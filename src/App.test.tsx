import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import App from './App';

test('renders the home page', () => {
  render(<HashRouter><App /></HashRouter>);
  const linkElement = screen.getByText(/Jeroen de Jong/i);
  expect(linkElement).toBeInTheDocument();
});
