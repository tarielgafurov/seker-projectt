import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { testStore } from './api/fetchApi';
import store from './store/store';

testStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

