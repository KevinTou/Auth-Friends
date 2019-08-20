import React from 'react';

const FriendCard = ({ friend }) => {
  return (
    <tr>
      <th scope="row">{friend.id}</th>
      <td>{friend.name}</td>
      <td>{friend.age}</td>
      <td>{friend.email}</td>
      {/* TODO: ADD BUTTONS */}
    </tr>
  );
};

export default FriendCard;
