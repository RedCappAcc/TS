import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

