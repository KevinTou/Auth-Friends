import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getFriends } from '../../actions';

import FriendCard from './FriendCard';

const FriendsList = props => {
  useEffect(() => {
    props.getFriends();
  }, [props.friends]);

  return (
    <div className="friends-list-container">
      <h1 className="friends-list-title">Friends List</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.friends.map(friend => {
            return <FriendCard key={friend.id} friend={friend} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect(
  mapStateToProps,
  { getFriends },
)(FriendsList);
