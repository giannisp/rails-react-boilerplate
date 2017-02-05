/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestamp from './server-timestamp.redux';

export default combineReducers({
  serverTimestamp,
});
