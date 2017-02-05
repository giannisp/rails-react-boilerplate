/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import HelloWorld from '../components/hello-world.comp';
import { fetchServerTimestamp } from '../actions/server-timestamp.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    serverTimestamp: state.serverTimestamp,
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    onFetchServerTimestamp: () => {
      dispatch(fetchServerTimestamp());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
