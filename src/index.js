import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovieProvider } from './MovieContext';

ReactDOM.render(
  <MovieProvider>
  <React.StrictMode> 
    <App />
  </React.StrictMode>
  </MovieProvider>,
  document.getElementById('root')
);

