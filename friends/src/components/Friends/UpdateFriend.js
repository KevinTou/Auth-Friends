import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import { updateFriend } from '../../actions';

const UpdateFriend = props => {
  const [updatedFriend, setUpdatedFriend] = useState({
    name: props.friend.name,
    age: props.friend.age,
    email: props.friend.email,
    id: props.friend.id,
  });

  const handleChanges = event => {
    setUpdatedFriend({
      ...updatedFriend,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      updatedFriend.name !== '' &&
      updatedFriend.age !== '' &&
      updatedFriend.email !== ''
    ) {
      props.updateFriend(props, updatedFriend);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1 className="login-form-title">Update a friend</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="name"
              name="name"
              id="name"
              value={updatedFriend.name}
              onChange={handleChanges}
              placeholder="Enter a name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              min={0}
              name="age"
              id="age"
              value={updatedFriend.age}
              onChange={handleChanges}
              placeholder="Enter an age"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={updatedFriend.email}
              onChange={handleChanges}
              placeholder="Enter an email"
            />
          </FormGroup>
          <Button color="primary" className="login-form-submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friend: state.friend,
  };
};

export default connect(
  mapStateToProps,
  { updateFriend },
)(UpdateFriend);
