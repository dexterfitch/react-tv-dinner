import React from 'react';
import { connect } from 'react-redux';

class ProtectedRoute extends React.Component {
  render() {
    return (
      <div className='w-11/12 max-w-6x1 mx-auto mt-8 text-2x1'>
        This is a protected route, only visible to a logged in user.
      </div>
    );
  }
}

export default connect()(ProtectedRoute);