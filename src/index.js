import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/reset_default_styles.scss';
import './fonts/Design.woff2';
import './fonts/Design.woff';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

