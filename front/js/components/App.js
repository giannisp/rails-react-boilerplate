/**
 * @file App component.
 */

import React from 'react';

import TimestampProvider, { TimestampContext } from './TimestampProvider';
import Timestamp from './Timestamp';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>

      <TimestampProvider>
        <TimestampContext.Consumer>
          {context => <Timestamp {...context} />}
        </TimestampContext.Consumer>
      </TimestampProvider>
    </div>
  );
};

export default App;
