import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import CryptoContext from './CryptoContext';
import ErrorBoundary from './ErrorBoundary';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CryptoContext>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </CryptoContext>
  </React.StrictMode>
);

