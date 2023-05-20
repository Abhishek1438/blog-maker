'use client';

import React, { useEffect, useState, useContext } from 'react';
import classes from './Navbar.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { UserContext } from '../context/user';

function addOrRemove(array, value) {
  var index = array.indexOf(value);

  var newArray = [];

  array.forEach((element) => {
    newArray.push(element);
  });

  if (index === -1) {
    newArray.push(value);
  } else {
    newArray.splice(index, 1);
  }

  return newArray;
}

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const [hamburgerClasses, setHamburgerClasses] = useState([classes.hamburger]);
  const [navLinksClasses, setNavLinksClasses] = useState([classes.navLinks]);
  const [linksClasses, setLinksClasses] = useState([]);

  const hamburgerClicked = () => {
    setNavLinksClasses((old) => addOrRemove(old, classes.open));

    setLinksClasses((old) => addOrRemove(old, classes.fade));

    setHamburgerClasses((old) => addOrRemove(old, classes.toggle));
  };

  useEffect(() => {
    const isLoginInHandler = async () => {
      const response = await fetch('http://localhost:4000/auth/isLoggedIn', {
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        setUser(data.user);
      } else {
        console.log(data.message);
      }
    };

    isLoginInHandler();
  }, []);

  const handleLogout = async () => {
    const response = await fetch('http://localhost:4000/auth/logout', {
      credentials: 'include',
    });

    setIsLoggedIn(false);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={hamburgerClasses.join(' ')} onClick={hamburgerClicked}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
      <ul className={navLinksClasses.join(' ')}>
        <li className={linksClasses.join(' ')}>
          <a href="#">DashBoard</a>
        </li>
        <li className={linksClasses.join(' ')}>
          <a href="#">Compose</a>
        </li>
        <li className={linksClasses.join(' ')}>
          <a href="#">Blogs</a>
        </li>
        <li className={linksClasses.join(' ')}>
          <a href="/contact">Contact Me</a>
        </li>
        {isLoggedIn && (
          <li className={linksClasses.join(' ')}>
            <Link href="/">
              <button className={classes.loginButton}>{user.name}</button>
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className={linksClasses.join(' ')}>
            <Link href="#">
              <button onClick={handleLogout} className={classes.joinButton}>
                Log out
              </button>
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className={linksClasses.join(' ')}>
            <Link href="/login">
              <button className={classes.loginButton}>Login</button>
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className={linksClasses.join(' ')}>
            <Link href="/join">
              <button className={classes.joinButton}>Join</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
