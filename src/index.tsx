import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.styles';
import AppContextProvider from './context/appContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
