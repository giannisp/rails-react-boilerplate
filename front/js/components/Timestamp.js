/**
 * @file Timestamp component.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Timestamp = ({ timestamp, fetchTimestamp }) => {
  useEffect(() => {
    fetchTimestamp();
  }, []);

  return (
    <>
      <p>Timestamp: {timestamp}</p>
      <button type="submit" onClick={fetchTimestamp}>
        Reload Timestamp
      </button>
    </>
  );
};

Timestamp.propTypes = {
  timestamp: PropTypes.number,
  fetchTimestamp: PropTypes.func.isRequired,
};

export default Timestamp;
