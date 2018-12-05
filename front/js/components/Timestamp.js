/**
 * @file Timestamp component.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Timestamp extends React.Component {
  static propTypes = {
    timestamp: PropTypes.number,
    fetchTimestamp: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetchTimestamp();
  }

  fetchTimestamp = () => {
    const { fetchTimestamp } = this.props;

    fetchTimestamp();
  };

  render() {
    const { timestamp } = this.props;

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
