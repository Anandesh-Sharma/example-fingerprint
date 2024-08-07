// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
  FpjsProvider,
  FingerprintJSPro,
} from '@fingerprintjs/fingerprintjs-pro-react';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: '9AjM3hYsyrATeG8aSeEa',
        endpoint: [
          // "https://metrics.yourwebsite.com",
          FingerprintJSPro.defaultEndpoint,
        ],
        scriptUrlPattern: [
          // "https://metrics.yourwebsite.com/web/v<version>/<apiKey>/loader_v<loaderVersion>.js",
          FingerprintJSPro.defaultScriptUrlPattern,
        ],
        // region: "eu"
      }}
    >
      <App />
    </FpjsProvider>
  </React.StrictMode>
);
