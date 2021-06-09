import { GET_USERS, FILTER_CHANGE, USERS_ERROR } from '../../types';

const initialState = {
  users: [],
  loading: true,
  search: '',
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FILTER_CHANGE:
      return {
        ...state,
        search: action.payload,
      };
    case USERS_ERROR:
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
