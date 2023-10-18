import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Routes';
import { AuthProvider } from './Context/Auth';
import { GetNomeProvider } from './Context/Nome';
import { JWTProvider } from './Context/JWT';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <JWTProvider>
        <GetNomeProvider>
          <AppRoutes />
        </GetNomeProvider>
      </JWTProvider>
    </AuthProvider>
  </React.StrictMode>
);