import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
        <Link to="/">Already have an Account? Log in</Link>
      </Form>
    </>
  );
}
