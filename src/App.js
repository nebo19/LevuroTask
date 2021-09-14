import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth';
import ListUsers from './components/ListUsers';
import { requireAuth } from './actions/authAction';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(requireAuth);
  }, [dispatch]);

  return isAuthenticated ? (
    <div className="app-wrapper">
      <Navbar />
      <ListUsers />
    </div>
  ) : (
    <Auth />
  );
};

export default App;
