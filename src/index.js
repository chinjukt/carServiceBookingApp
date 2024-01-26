import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css'
import ShareContext from './contextapi/ShareContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShareContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ShareContext>
    
  </React.StrictMode>
);

