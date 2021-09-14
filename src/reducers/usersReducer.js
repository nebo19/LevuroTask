import { GET_USERS, GET_USERS_ERROR } from '../actions/types';

const initialState = {
  users: [],
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.payload,
        error: null,
      };
    case GET_USERS_ERROR:
      return {
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
