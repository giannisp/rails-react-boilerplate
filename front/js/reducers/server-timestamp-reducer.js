/**
 * @file The Server Timestamp reducer.
 */

import { SERVER_TIMESTAMP_UPDATE } from '../actions/server-timestamp';

const initialState = {
  timestamp: null,
};

const serverTimestampReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SERVER_TIMESTAMP_UPDATE:
      return {
        ...state,
        timestamp: action.timestamp,
      };

    default:
      return state;
  }
};

export default serverTimestampReducer;
