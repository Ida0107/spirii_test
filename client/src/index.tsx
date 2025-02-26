import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { defaultTheme } from './theme';
import { createStore } from './store';

const store = createStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
