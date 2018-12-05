/**
 * @file App component.
 */

import React from 'react';

import TimestampProvider from './TimestampProvider';
import Timestamp from './Timestamp';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>

      <TimestampProvider>
        <Timestamp />
      </TimestampProvider>
    </div>
  );
};

export default App;
