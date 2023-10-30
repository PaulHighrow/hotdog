import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './fonts/gilroy/gilroy.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/hotdog">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
