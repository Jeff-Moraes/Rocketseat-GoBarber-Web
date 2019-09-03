import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Log In</button>
        <Link to="/register">Sign Up</Link>
      </form>
    </>
  );
}
