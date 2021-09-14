import React from 'react';

import './index.css';

const User = ({ userInfo }) => {
  return (
    <div className="user-wrapper">
      <div className="user-image-wrapper">
        <img src={userInfo.avatar} alt="avatar" />
      </div>
      <div className="user-info-wrapper">
        <h2>
          {userInfo.first_name} {userInfo.last_name}
        </h2>
        <h4>{userInfo.email}</h4>
      </div>
    </div>
  );
};

export default User;
