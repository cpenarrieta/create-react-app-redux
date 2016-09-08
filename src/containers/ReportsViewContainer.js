import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReportsView from '../components/ReportsView';

function ReportsViewContainer() {
  return (
    <ReportsView />
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

ReportsViewContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsViewContainer);
