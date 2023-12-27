import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const signin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
        console.log(userCredential);
      }
      )
      .catch((error) => alert(error.message));
}

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
}

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1 className="login__title">Sign-In</h1>
        <form>
          <label className="login__label" htmlFor="email">
            Email
          </label>
          <input
            className="login__input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label className="login__label" htmlFor="password">
            Password
          </label>
          <input
            className="login__input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signin}
          >
            Sign In
          </button>
        </form>
        <p className="login__text">
          By signing-in you agree to the AMAZON CLONE Conditions of Use &amp;
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login