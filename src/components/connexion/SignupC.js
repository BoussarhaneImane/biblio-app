import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const SignupC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false); // État de chargement
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
    setLoading(true); // Démarrer le chargement
    try {
      const response = await axios.post('https://backend-projecteco.onrender.com/register', formData);
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      localStorage.setItem('userName', formData.name);
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error.response.data);
    } finally {
      setLoading(false); // Arrêter le chargement
    }
  };

  return (
    <div className="auth-container signup-container">
      <Link to='/' className="back-link">Back to our site</Link>
      <div className="auth-form signup-form">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange}  />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange}  />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" name="password" value={formData.password} onChange={handleChange}  />
            <label>Password</label>
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupC;
