/**
 * @file Server Timestamp related actions.
 */

import axios from 'axios';

import getLogger from '../util/logger';

const log = getLogger('ServerTimestampAction');

export const SERVER_TIMESTAMP_UPDATE = 'server-timestamp/UPDATE';

const serverTimestampUpdate = timestamp => {
  return { type: SERVER_TIMESTAMP_UPDATE, timestamp };
};

export const fetchServerTimestamp = () => async dispatch => {
  try {
    const res = await axios.get('/home/timestamp');

    dispatch(serverTimestampUpdate(res.data.timestamp));
  } catch (error) {
    log.error(error);
  }
};
