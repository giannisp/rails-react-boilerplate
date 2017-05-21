/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends React.Component {
  render() {
    const {
      serverTimestamp,
    } = this.props;

    return (
      <div>
        <h1>Hello World!</h1>
        <p>Timestamp: { serverTimestamp }</p>
      </div>
    );
  }

  componentDidMount() {
    this.props.onFetchServerTimestamp();
  }
}

/** @const {Object} propTypes definition */
HelloWorld.propTypes = {
  serverTimestamp: PropTypes.number,
  onFetchServerTimestamp: PropTypes.func.isRequired,
};
