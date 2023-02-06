import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter as App } from './App';
import Demo from './components/Demo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Demo />
    </div>
  </React.StrictMode>
);
