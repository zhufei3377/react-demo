import 'babel-polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './modules';
import middleware from './middleware';
import App from './containers/App';

// create store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

// define render function
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

// subscribe render function
store.subscribe(render);

// execution render function
render();
