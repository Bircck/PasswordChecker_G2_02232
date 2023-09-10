// import logo from './logo.svg';
// import './App.scss';
import "./App.scss";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  const checkPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/check_password",
        { password }
      );
      setStatus(response.data.status);
    } catch (error) {
      console.error("Error checking password", error);
      setStatus("error");
    }
  };

  return (
    <div class="main-content">
      <div class="password-checker">
        <div class="password-checker-container">
          <h1>Password Checker</h1>
          <div style={{ position: 'relative', width: '200px' }}>
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
          <button onClick={checkPassword}>Check Password</button>
          {status && <div>Status: {status}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
