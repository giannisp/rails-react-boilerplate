/**
 * @file TimestampProvider component.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('TimestampProvider');

const TimestampProvider = ({ children }) => {
  const [timestamp, setTimestamp] = useState(null);

  const fetchTimestamp = async () => {
    try {
      const res = await axios.get('/home/timestamp');

      setTimestamp(res.data.timestamp);
    } catch (error) {
      log.error(error);
    }
  };

  return <>{children({ timestamp, fetchTimestamp })}</>;
};

TimestampProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TimestampProvider;
