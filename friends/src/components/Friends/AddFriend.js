import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import { addFriend } from '../../actions';

const AddFriend = props => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChanges = event => {
    setFriend({ ...friend, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (friend.name !== '' && friend.age !== '' && friend.email !== '') {
      props.addFriend(props, friend);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1 className="login-form-title">Add a friend</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="name"
              name="name"
              id="name"
              value={friend.name}
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
              value={friend.age}
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
              value={friend.email}
              onChange={handleChanges}
              placeholder="Enter an email"
            />
          </FormGroup>
          <Button color="primary" className="login-form-submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addFriend },
)(AddFriend);
