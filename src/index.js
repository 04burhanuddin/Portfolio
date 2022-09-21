import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import Index from './pages/Index'
import Aos from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

Aos.init();