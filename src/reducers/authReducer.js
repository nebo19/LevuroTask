import { LOGIN_ERROR, LOGIN, LOGOUT, REQUIRE_AUTH } from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: false,
  user: {
    email: null,
    password: null,
  },
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRE_AUTH:
    case LOGIN:
      const user = JSON.parse(localStorage.getItem('user'));
      return {
        token: user.token,
        isAuthenticated: true,
        user: {
          email: user.email,
          password: user.password,
        },
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
        user: {
          email: null,
          password: null,
        },
      };
    default:
      return state;
  }
};
