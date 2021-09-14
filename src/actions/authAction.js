import axios from 'axios';
import { LOGIN_ERROR, LOGIN, LOGOUT, REQUIRE_AUTH } from './types';

export const requireAuth = (dispatch) => {
  if (localStorage.getItem('user')) {
    dispatch({
      type: REQUIRE_AUTH,
    });
  }
  return;
};

export const loginAction = (email, password) => async (dispatch) => {
  await axios
    .post('https://reqres.in/api/login', {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: response.data.token,
          email,
          password,
        })
      );
      dispatch({
        type: LOGIN,
        payload: {
          email,
          password,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: error,
      });
    });
};

export const logoutAction = (dispatch) => {
  localStorage.removeItem('user');

  dispatch({
    type: LOGOUT,
  });
};
