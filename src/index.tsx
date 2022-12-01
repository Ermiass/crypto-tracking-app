import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import 'react-alice-carousel/lib/alice-carousel.css';
import CryptoContext from './app/CryptoContext';
import ErrorBoundary from './ErrorBoundary';
import store from './app/store';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <CryptoContext>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </CryptoContext>
    </Provider>
  </React.StrictMode>
);

