import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth';
import ListUsers from './components/ListUsers';
import { requireAuth } from './actions/authAction';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(requireAuth);
  }, [dispatch]);

  return isAuthenticated ? <ListUsers /> : <Auth />;
};

export default App;
