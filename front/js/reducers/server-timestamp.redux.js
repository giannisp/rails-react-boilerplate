/**
 * @fileOverview The Server Timestamp reducer.
 */

import { handleActions } from 'redux-actions';

import {
  SERVER_TIMESTAMP_UPDATE,
} from '../constants/reducer-actions.const';

const initialState = null;

export default handleActions({
  [SERVER_TIMESTAMP_UPDATE]: (state, action) => {
    return action.timestamp;
  },
}, initialState);
