import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

export const SELECT_FRIEND = 'SELECT_FRIEND';

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const login = (props, user) => dispatch => {
  dispatch({ type: LOGIN_START });

  axios
    .post('http://localhost:5000/api/login', user)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem('token', res.data.payload);
      props.history.push('/friends');
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const logout = props => {
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });

  axiosWithAuth()
    .get('/friends')
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_FAILURE, payload: err.response });
    });
};

export const addFriend = (props, friend) => dispatch => {
  dispatch({ type: ADD_FRIEND_START });

  axiosWithAuth()
    .post('/friends', friend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
      props.history.push('/friends');
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
    });
};

export const selectFriend = friend => {
  return { type: SELECT_FRIEND, payload: friend };
};

export const updateFriend = (props, friend) => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  axiosWithAuth()
    .put(`/friends/${friend.id}`, friend)
    .then(res => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data });
      props.history.push('/friends');
    })
    .catch(err => {
      dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err.response });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });

  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: err.response });
    });
};
