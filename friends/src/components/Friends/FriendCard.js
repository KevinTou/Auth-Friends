import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, selectFriend } from '../../actions';

const FriendCard = props => {
  const editFriend = friend => {
    props.selectFriend(friend);
    props.history.push('/updateFriend');
  };

  return (
    <tr>
      <th scope="row">{props.friend.id}</th>
      <td>{props.friend.name}</td>
      <td>{props.friend.age}</td>
      <td>{props.friend.email}</td>
      <td>
        <button onClick={() => editFriend(props.friend)}>Update</button>
        <button onClick={() => props.deleteFriend(props.friend.id)}>
          Delete
        </button>
      </td>
      {/* TODO: ADD ONCLICK FUNCTIONALITY */}
    </tr>
  );
};

export default connect(
  null,
  { deleteFriend, selectFriend },
)(FriendCard);
