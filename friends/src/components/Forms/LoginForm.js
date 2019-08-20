import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import { login } from '../../actions';

const LoginForm = props => {
  // const [user, setUser] = useState({ username: '', password: '' });
  const [user, setUser] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  });

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Dispatch action
    props.login(props, user);
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1 className="login-form-title">Please sign in</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChanges}
              placeholder="Enter an username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChanges}
              placeholder="Enter a password"
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
  { login },
)(LoginForm);
