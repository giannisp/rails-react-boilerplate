/**
 * @fileOverview The app main entry point.
 */

// Include the main scss file for webpack processing.
import '../css/app.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/root-reducer.redux';
import HelloWorld from './containers/hello-world.cont';

const init = () => {
  console.log('init() :: App starts booting...');

  // Check for devToolsExtension
  const create = window.devToolsExtension ?
    window.devToolsExtension()(createStore) : createStore;

  // Apply thunk and additional middleware if applicable
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create);

  // Init store
  const store = createStoreWithMiddleware(rootReducer);

  ReactDom.render(
    <Provider store={ store }>
      <HelloWorld />
    </Provider>,
    document.getElementById('app')
  );
};

// init app
init();
