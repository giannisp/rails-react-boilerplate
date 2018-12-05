/**
 * @file App main entry point.
 */

import '@babel/polyfill';

import React from 'react';
import ReactDom from 'react-dom';

// Include the main scss file for webpack processing.
import '../css/app.scss';

import App from './components/App';
import getLogger from './utils/logger';

const log = getLogger('App');

const init = () => {
  log.info('init() :: App starts booting...');

  ReactDom.render(<App />, document.getElementById('app'));
};

// init app
init();
