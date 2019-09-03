import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name requerid'),
  email: Yup.string()
    .email('Enter your email')
    .required('Email required'),
  password: Yup.string()
    .min(6, 'Minimum of 6 characters')
    .required('Password required'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
        <Link to="/">Already have an Account? Log in</Link>
      </Form>
    </>
  );
}
