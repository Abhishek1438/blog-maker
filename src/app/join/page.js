'use client';

import { useState } from 'react';
import classes from './join.module.css';
import Link from 'next/link';
import { Big_Shoulders_Display } from 'next/font/google';

const Register = () => {
  const [error, setError] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, name, password } = e.target.elements;
    const body = { email: email.value, name: name.value, password: password.value };

    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = '/';
    } else {
      setError(data.error);
    }
  };

  return (
    <div className={classes.loginParentContainer}>
      <div className={classes.loginChildContainer}>
        <h2 className={classes.welcomeMessage}>Create an account</h2>
        <form onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="text" name="email" required></input>
          <label>Username</label>
          <input type="text" name="name" required></input>
          <label>password</label>
          <input type="password" name="password" required></input>
          <div className={classes.checkboxContainer}>
            <input type="checkbox"></input>
            <label>
              (Optional) It's okay to send me emails with Blog Maker updates, tips, and special
              offers. You can opt out at any time.
            </label>
          </div>
          <button type="submit">Continue</button>
          <Link href="/login">
            <p className={classes.alreadyAccount}>Already have an account?</p>
          </Link>
          {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
          <p>
            By registering you agree to Blog Maker's <span>Terms of Service</span> and{' '}
            <span>Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
