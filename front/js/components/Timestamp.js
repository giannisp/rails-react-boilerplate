/**
 * @file Timestamp component.
 */

import React from 'react';

import { TimestampContext } from './TimestampProvider';

export default class Timestamp extends React.Component {
  static contextType = TimestampContext;

  componentDidMount() {
    this.fetchTimestamp();
  }

  fetchTimestamp = () => {
    const { fetchTimestamp } = this.context;

    fetchTimestamp();
  };

  render() {
    const { timestamp } = this.context;

    return (
      <>
        <p>Timestamp: {timestamp}</p>
        <button type="submit" onClick={this.fetchTimestamp}>
          Reload Timestamp
        </button>
      </>
    );
  }
}
