import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  friends: [],
  isLoading: false,
  error: '',
  isLoggedIn: localStorage.getItem('token') ? true : false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    case GET_FRIENDS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        friends: action.payload,
      };
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        friends: [],
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        friends: action.payload,
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
