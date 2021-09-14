import React, { useState } from 'react';
import { loginAction } from '../../actions/authAction';
import { useDispatch } from 'react-redux';

import './index.css';

const Auth = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginAction(email, password));
  };

  return (
    <div className="main-div">
      <div className="auth-wrapper">
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={handleClick}
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
