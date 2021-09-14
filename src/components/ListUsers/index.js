import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../actions/getUsersAction';
import { logoutAction } from '../../actions/authAction';

const ListUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAction);
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>List Users</div>
      {users?.data?.map((user, index) => (
        <div key={index}>{user.email}</div>
      ))}
    </div>
  );
};

export default ListUsers;
