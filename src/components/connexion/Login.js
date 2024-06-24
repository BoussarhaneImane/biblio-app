import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="auth-container login-container">
        <Link to='/' className="back-link">Back to our site</Link>
        <div className="auth-form login-form">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
