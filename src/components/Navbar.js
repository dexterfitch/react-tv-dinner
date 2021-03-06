import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from '../containers/auth/Logout.js';
import { checkAuth } from '../actions/actionCreators/auth';

class Navbar extends React.Component {
  componentDidMount() {
    this.props.dispatchCheckAuth();
  }

  renderAuthLinks() {
    const { authChecked, loggedIn } = this.props;
    if (authChecked) {
      return loggedIn ? (
        <>
          <NavLink 
            className='py-4 block sm:inline-block' 
            activeClassName='text-pink-600' 
            exact 
            to='/create'
          >
            <span className="bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 ml-2 rounded-full">Create</span>
          </NavLink>
          <NavLink 
            className='py-4 block sm:inline-block' 
            activeClassName='text-pink-600' 
            exact 
            to='/mytvdinners'
          >
            <span className="bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 ml-2 rounded-full">My TV Dinners</span>
          </NavLink>
          <NavLink 
            className='py-4 block sm:inline-block' 
            activeClassName='text-pink-600' 
            exact 
            to='/tvdinners'
          >
            <span className="bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 ml-2 rounded-full">Browse All</span>
          </NavLink>
          <Logout />
        </>
      ) : (
        <>
          <NavLink 
            className='py-4 block sm:inline-block' 
            activeClassName='text-pink-600' 
            exact 
            to='/signup' 
          >
            <span className="bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 ml-2 rounded-full">Sign Up</span>
          </NavLink>
          <NavLink 
            className='py-4 block sm:inline-block' 
            activeClassName='text-pink-600' 
            exact 
            to='/login'
          >
            <span className="bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 ml-2 rounded-full">Log In</span>
          </NavLink>
        </>
      );
    } else {
      return null
    }
  }

  render() {
    return (
      <nav className='text-indigo-600 mb-10'>
        <div className='container mx-auto grid sm:grid-cols-8'>
          <div className='sm:col-start-1 sm:col-end-2'>
            <NavLink 
              className='py-4 block sm:inline-block' 
              activeClassName='text-pink-600' 
              exact
              to='/'
            >
              <span className="bg-white hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 py-2 px-3 mr-2 rounded-full">Home</span>
            </NavLink>
          </div>
          <div className='sm:col-span-7 sm:col-end-9 sm:text-right'>
            { this.renderAuthLinks() }
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCheckAuth: () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);