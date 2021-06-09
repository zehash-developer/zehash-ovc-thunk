import { GET_POSTS, POSTS_ERROR, POST_CHANGE } from '../../types';
import axios from 'axios';

export const getPosts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POSTS_ERROR,
    });
  }
};

export const postChange = (payload) => {
  return {
    type: POST_CHANGE,
    payload,
  }
}