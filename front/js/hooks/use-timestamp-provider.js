/**
 * @file TimestampProvider hook.
 */

import { useState } from 'react';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('TimestampProvider');

const useTimestampProvider = () => {
  const [timestamp, setTimestamp] = useState(null);

  const fetchTimestamp = async () => {
    try {
      const res = await axios.get('/home/timestamp');

      setTimestamp(res.data.timestamp);
    } catch (error) {
      log.error(error);
    }
  };

  return [timestamp, fetchTimestamp];
};

export default useTimestampProvider;
