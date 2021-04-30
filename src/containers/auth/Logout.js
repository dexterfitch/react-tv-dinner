import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actionCreators/auth';
import { useHistory } from 'react-router-dom';

const Logout = ({ dispatchLogoutUser }) => {
  const history = useHistory();

  const handleClick = () => {
    dispatchLogoutUser().then(() => history.push('/'));
  };

  return (
    <div className='py-4 block sm:inline-block' onClick={handleClick}>
      <span className="cursor-pointer bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 ml-2 rounded-full">Log Out</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout);