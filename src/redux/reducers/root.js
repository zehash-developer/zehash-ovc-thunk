import { combineReducers } from 'redux';
import userReducer from './user/userReducers';
import postReducer from './post/postReducers';

export default combineReducers({
  users: userReducer,
  posts: postReducer,
});
