/**
 * @file TimestampProvider component.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import getLogger from '../utils/logger';

const log = getLogger('TimestampContext');

export const TimestampContext = React.createContext({
  timestamp: null,
  fetchTimestamp: () => {},
});

export default class TimestampProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    timestamp: null,
  };

  fetchTimestamp = async () => {
    try {
      const res = await axios.get('/home/timestamp');

      this.setState(() => ({
        timestamp: res.data.timestamp,
      }));
    } catch (error) {
      log.error(error);
    }
  };

  render() {
    const { children } = this.props;
    const { timestamp } = this.state;

    return (
      <TimestampContext.Provider
        value={{ timestamp, fetchTimestamp: this.fetchTimestamp }}
      >
        {children}
      </TimestampContext.Provider>
    );
  }
}
