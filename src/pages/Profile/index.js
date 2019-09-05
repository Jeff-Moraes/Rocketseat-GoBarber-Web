import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onClick={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Email" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Old Password" />
        <Input type="password" name="password" placeholder="New Password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <button type="submit">Save</button>
      </Form>

      <button type="button">Delete Account</button>
    </Container>
  );
}
