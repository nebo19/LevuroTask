import axios from 'axios';
import { GET_USERS, GET_USERS_ERROR } from './types';

export const getUsersAction = () => async (dispatch) => {
  await axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: GET_USERS_ERROR,
        payload: error,
      });
    });
};
