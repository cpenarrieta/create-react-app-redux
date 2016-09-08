import React, { PropTypes } from 'react';

function ReportsView() {
  return (
    <div className="reports">
      Reports
    </div>
  );
}

ReportsView.propTypes = {
  onSubmit: PropTypes.func,
};

export default ReportsView;
