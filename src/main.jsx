// src/index.jsx
import 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import diagramReducer from './redux/diagramSlice';
import './App.css';

const store = configureStore({
  reducer: {
    diagram: diagramReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
