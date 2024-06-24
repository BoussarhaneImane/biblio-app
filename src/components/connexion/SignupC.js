import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-container signup-container">
        <Link to='/' className="back-link">Back to our site</Link>
      <div className="auth-form signup-form">
        <h2>Signup</h2>
        <form>
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="auth-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
