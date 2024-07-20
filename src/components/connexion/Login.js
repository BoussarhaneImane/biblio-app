import React from 'react';
import './Auth.css';
import { useState } from 'react';
import  axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
});
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
      ...prevState,
      [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
      const response = await axios.post('https://backend-projecteco.onrender.com/login', formData);
      
      setFormData({
          email: '',
          password: ''
      });
      console.log(response.data.name);
      localStorage.setItem('userName', response.data.name);
      navigate('/');
  } catch (error) {
      console.error('Error during login:', error.response.data);
  } finally {
      setLoading(false);
  }
};

  return (
    <>
      <div className="auth-container login-container">
        <Link to='/' className="back-link">Back to our site</Link>
        <div className="auth-form login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" onChange={handleChange}/>
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="password" onChange={handleChange}/>
              <label>Password</label>
            </div>
            <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Log In...' : 'Log In'}
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
