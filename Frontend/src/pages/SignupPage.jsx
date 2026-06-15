import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './SignupPage.css';
import signupBg from '../assets/signup-bg.png';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      toast.success(response.data.message || 'Registration successful!');
      
      // Clear form and redirect to login
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', password: ''
      });
      setTimeout(() => navigate('/login'), 1500);

    } catch (error) {
      console.error('Signup error:', error);
      const errorMsg = error.response?.data?.message || 'Something went wrong during registration';
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container" style={{ backgroundImage: `url(${signupBg})` }}>
      <div className="signup-overlay"></div>
      
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join Smart Farmer today and grow with us</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <div className="input-group">
              <div className="input-icon">
                <FaUser />
              </div>
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="input-group">
              <div className="input-icon">
                <FaUser />
              </div>
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaPhone />
            </div>
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
