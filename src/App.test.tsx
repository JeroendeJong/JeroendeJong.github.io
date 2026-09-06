import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { expect, test, vi } from 'vitest';
import App from './App';

vi.mock('react-pdf', () => ({
  Document: 'div',
  Page: 'div',
  pdfjs: { GlobalWorkerOptions: {} },
}));

test('renders the home page', () => {
  render(
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </HashRouter>,
  );
  const linkElement = screen.getByText(/Jeroen de Jong/i);
  expect(linkElement).toBeInTheDocument();
});
