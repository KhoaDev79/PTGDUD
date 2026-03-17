import React from "react";
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-overlay">
      <form className="login-form">
        <h2 className='login-title'>Login</h2>

        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
