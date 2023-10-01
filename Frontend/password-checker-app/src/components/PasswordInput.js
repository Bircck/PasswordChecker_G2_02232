// src/components/PasswordInput.js
import React, { useState, useEffect, useCallback} from "react";
import "./PasswordInput.scss";

function PasswordInput({ password, setPassword, onKeyDown, disabled }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(prevIsPasswordVisible => !prevIsPasswordVisible);
  }, [setIsPasswordVisible]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "v" && event.altKey) {  // alt + v
        togglePasswordVisibility();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [togglePasswordVisibility]);

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/\s/g, '');
    setPassword(newValue);
  };

  return (
    <div className="password-input-box">
      <input
        type={isPasswordVisible ? "text" : "password"}
        style={{ width: '100%' }}
        onKeyDown={onKeyDown}
        value={password}
        placeholder="Enter password"
        onChange={handleChange}
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
