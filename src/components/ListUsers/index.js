import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../actions/getUsersAction';
import User from './User';

import './index.css';

const ListUsers = () => {
  const [search, setSearch] = useState('');
  const { users } = useSelector((state) => state.users);
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users) {
      setUserList(users);
    }
  }, [users]);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  const handleClick = () => {
    const newUserList = users?.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;

      return (
        fullName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
      );
    });

    setUserList(newUserList);
  };

  return (
    <div className="list-users-main">
      <div className="list-users-add-search-wrapper">
        <button className="list-users-add-new-user-button">ADD NEW USER</button>
        <div className="list-users-search-wrapper">
          <input
            type="text"
            placeholder="Search for a user"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <div className="list-users-wrapper">
        {userList?.map((user, index) => (
          <User userInfo={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
