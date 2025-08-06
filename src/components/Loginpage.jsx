import React, { useState } from 'react';
import './loginpage.css';
import logo from '../assets/tut-logo.jpg';

const Loginpage = () => {
  const [userType, setUserType] = useState('Staff');

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="title-section">
          <h3 className="scrs-title">SCRS</h3>
          <p className="subtitle">Website Application</p>
        </div>
        <div className="toggle-buttons">
          <button
            className={userType === 'Student' ? 'toggle-btn active' : 'toggle-btn'}
            onClick={() => setUserType('Student')}
          >
            Student
          </button>
          <button
            className={userType === 'Staff' ? 'toggle-btn active' : 'toggle-btn'}
            onClick={() => setUserType('Staff')}
          >
            Staff
          </button>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />
        <div className="forgot-password">forgot password?</div>
        <button className="login-button">LOGIN</button>
      </div>
      <div className="logo-section">
        <img src={logo} alt="Tshwane University of Technology Logo" className="logo-image" />
      </div>
    </div>
  );
};

export default Loginpage;
