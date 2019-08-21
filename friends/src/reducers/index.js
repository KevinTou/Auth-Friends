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
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  SELECT_FRIEND,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  friends: [],
  friend: null,
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
        friend: null,
      };
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        friends: [],
        friend: null,
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
    case UPDATE_FRIEND_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        friends: action.payload,
      };
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SELECT_FRIEND:
      return {
        ...state,
        friend: action.payload,
      };
    case DELETE_FRIEND_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        friends: action.payload,
      };
    case DELETE_FRIEND_FAILURE:
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
