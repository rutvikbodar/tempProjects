import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={createStore(reducers,composeEnhancer(applyMiddleware(reduxThunk)))}>
      <App />
    </Provider>
);
