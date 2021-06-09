import { GET_POSTS, POSTS_ERROR, POST_CHANGE } from '../../types';

const initialState = {
    posts: [],
    loading: true,
    postId: 0,
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            console.log(action.payload);
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case POST_CHANGE:
            return {
                ...state,
                postId: action.payload,
            };
        case POSTS_ERROR:
            return {
                ...state,
                loading: false,
                posts: [],
            };
        default:
            return state;
    }
};

export default userReducers;
