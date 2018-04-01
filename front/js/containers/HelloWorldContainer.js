/**
 * @file Hello World container.
 */

import { connect } from 'react-redux';

import HelloWorld from '../components/HelloWorld';
import { fetchServerTimestamp } from '../actions/server-timestamp';

const mapStateToProps = ({ serverTimestamp }) => ({
  timestamp: serverTimestamp.timestamp,
});

const mapDispatchToProps = {
  fetchServerTimestamp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloWorld);
