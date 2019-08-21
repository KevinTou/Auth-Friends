import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getFriends } from '../../actions';

import FriendCard from './FriendCard';

const FriendsList = props => {
  useEffect(() => {
    props.getFriends();
  }, []);

  return (
    <div className="friends-list-container">
      <h1 className="friends-list-title">Friends List</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.friends.map(friend => {
            return (
              <FriendCard
                key={friend.id}
                friend={friend}
                history={props.history}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  { getFriends },
)(FriendsList);
