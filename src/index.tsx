import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CoreStyles = createGlobalStyle`
  body {
    margin: 20px;
  }

  * {
    font-family: "Noto Sans KR",sans-serif;
    margin: 0;
    padding: 0;
    word-break: keep-all;
    font-feature-settings: normal;
    text-rendering: optimizeLegibility;
    font-display: swap;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`

root.render(
  <React.StrictMode>
    <CoreStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);