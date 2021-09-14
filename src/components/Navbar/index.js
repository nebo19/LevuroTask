import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../actions/authAction';
import './index.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction);
  };

  return (
    <div className="navbar-wrapper">
      <button type="button" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Navbar;
