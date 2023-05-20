'use client';

import classes from './login.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [error, setError] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const body = { email: email.value, name: name.value, password: password.value };

    const response = await fetch('http://localhost:4000/auth/login', {
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
      <div>
        <div className={classes.loginChildContainer}>
          <div className={classes.welcomeMessage}>
            <h2>Welcome back!</h2>
            <p>We're so excited to see you again!</p>
          </div>
          <form onSubmit={onSubmitHandler}>
            <label>Email</label>
            <input type="text" name="email" required></input>
            <label>password</label>
            <input type="password" name="password" required></input>
            <p className={classes.forgotPass}>Forgot your password?</p>
            <button type="submit">Log In</button>
            <Link href="/join">
              <p>
                Need an account? <span>Register</span>
              </p>
            </Link>
            {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
