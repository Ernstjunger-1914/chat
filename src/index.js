import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(legacy_createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
