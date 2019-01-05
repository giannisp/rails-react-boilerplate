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
    // eslint-disable-next-line react/no-unused-state
    timestamp: null,
    // eslint-disable-next-line react/no-unused-state
    fetchTimestamp: () => this.fetchTimestamp(),
  };

  fetchTimestamp = async () => {
    try {
      const res = await axios.get('/home/timestamp');

      this.setState(() => ({
        // eslint-disable-next-line react/no-unused-state
        timestamp: res.data.timestamp,
      }));
    } catch (error) {
      log.error(error);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <TimestampContext.Provider value={this.state}>
        {children}
      </TimestampContext.Provider>
    );
  }
}
