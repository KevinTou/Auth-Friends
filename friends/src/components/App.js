import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import NavigationBar from './Navigation/NavigationBar';
import LoginForm from './Forms/LoginForm';
import PrivateRoute from './Navigation/PrivateRoute';
import FriendsList from './Friends/FriendsList';
import AddFriend from './Friends/AddFriend';
import UpdateFriend from './Friends/UpdateFriend';
import DeleteFriend from './Friends/DeleteFriend';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/friends" component={FriendsList} />
        <PrivateRoute path="/addFriend" component={AddFriend} />
        <PrivateRoute path="/updateFriend" component={UpdateFriend} />
        <PrivateRoute path="/deleteFriend" component={DeleteFriend} />
        <Redirect from="/" to="/friends" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
