// src/components/PasswordInput.js
import React from 'react';

function PasswordInput({ isPasswordVisible, togglePasswordVisibility, password, setPassword }) {
  return (
    <div className="password-input-box">
      <input
        type={isPasswordVisible ? "text" : "password"}
        style={{ width: '100%' }}
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
      />
      <i
        className={`fa ${isPasswordVisible ? "fa-eye-slash" : "fa-eye"}`}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
        onClick={togglePasswordVisibility}
        aria-hidden="true"
      />
    </div>
  );
}

export default PasswordInput;
