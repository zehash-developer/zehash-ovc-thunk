import { GET_USERS, USERS_ERROR, FILTER_CHANGE } from '../../types';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
    });
  }
};

export const filterChange = (payload) => {
  return {
    type: FILTER_CHANGE,
    payload,
  }
}