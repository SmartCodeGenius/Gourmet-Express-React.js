import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Routes';
import { AuthProvider } from './Context/Auth';
import { GetNomeProvider } from './Context/Nome';
import { JWTProvider } from './Context/JWT';
import { EstabelecimentoProvider } from './Context/EstabelecimentoMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <JWTProvider>
        <GetNomeProvider>
          <EstabelecimentoProvider>
            <AppRoutes />
          </EstabelecimentoProvider>
        </GetNomeProvider>
      </JWTProvider>
    </AuthProvider>
  </React.StrictMode>
);