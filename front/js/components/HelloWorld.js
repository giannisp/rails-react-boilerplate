/**
 * @file Hello World component.
 */

import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  static propTypes = {
    timestamp: PropTypes.number,
    fetchServerTimestamp: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchServerTimestamp } = this.props;

    fetchServerTimestamp();
  }

  render() {
    const { timestamp } = this.props;

    return (
      <div>
        <h1>Hello World!</h1>
        <p>Timestamp: {timestamp}</p>
      </div>
    );
  }
}

export default HelloWorld;
