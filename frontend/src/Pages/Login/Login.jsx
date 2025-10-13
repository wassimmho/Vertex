import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    const email = formData.email
    const password = formData.password

    try {
      const response = await fetch("http://localhost:8000/api/Login/",
        {
        method:'POST',
        headers:{ 'Content-Type': 'application/json'},
        body:JSON.stringify({email,password}),
        }
      )

      const data = response.
      if (response.ok){
        localStorage.setItem("userid",response.id)
        console.log(localStorage.userid)
        console.log("Login attempt:", formData);
        navigate('/home')
      }
      
      
    } catch (error) {
      setErrors({ submit: "Login failed. Please check your credentials." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <button 
        className="back-home-btn"
        onClick={() => window.location.href = '/'}
      >
        ← Back to Home
      </button>
      
      <div className="login-content">
        <div className="login-form-wrapper">
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your account to continue</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="emailOrUsername"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.emailOrUsername ? 'form-input-error' : ''}`}
                placeholder="Enter your email"
              />
              {errors.emailOrUsername && (
                <span className="error-message">{errors.emailOrUsername}</span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? 'form-input-error' : ''}`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            
            {errors.submit && (
              <div className="submit-error">{errors.submit}</div>
            )}
            
            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'login-btn-loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
            
            <div className="login-footer">
              <p>Don't have an account? <a href="/signin" className="signup-link">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
