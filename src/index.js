import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import MainRoutes from './routes';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
    <Toaster
      position="bottom-center"
      containerClassName="Font-Rubik .Font-Seven"
      toastOptions={{
      className: '',
      duration: 8000,
      style: {
        color: 'var(--white-color)',
      },
      icon: '👏',
      success: {
        duration: 6000,
        style: {
          background: 'var(--green-success-color)'
        },
        icon: '🔥',
      },
      error: {
        duration: 6000,
        style: {
          background: 'var(--orange-money-color)'
        },
        icon: '⛔',
      }
    }}
  />
  </React.StrictMode>,
);
