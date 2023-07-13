import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WebgateProvider as _WebgateProvider } from '@xvia/webgate-connect';
import App from './App';

const WebgateProvider = _WebgateProvider as any;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <WebgateProvider portalUrl={process.env.PORTAL_URL as string}>
        <App />
      </WebgateProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
