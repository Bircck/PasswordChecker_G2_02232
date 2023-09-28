// import logo from './logo.svg';
// import logo from './DTU_Logo_Hvid.png'; // Tell webpack this JS file uses this image

// import './App.scss';
import dtuLogo from './images/dtuLogoStandard.png';

import "./App.scss";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function App() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  });

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "v" && event.altKey) {  // alt + v
        togglePasswordVisibility();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      };
    }, [togglePasswordVisibility]);

  return (
    <div class="main-content">
      <div class="header">
        {/* <img src="C:\Users\tobia\OneDrive\Skrivebord\University\Kandidat\cryptography\PasswordChecker_G2_02232\Frontend\password-checker-app\public\logo192.png"></img> */}
        {/* <img src="Frontend\password-checker-app\public\logo192.png"></img> */}
        {/* <img style="height:100%" src="https://designguide.dtu.dk/-/media/subsites/designguide/design-basics/logo/dtu_logo_hvid.jpg"></img> */}
        <a class="header-logo-link" href="https://www.inside.dtu.dk/">
          <img class="header-logo" src={dtuLogo} alt="DTU"></img>
        </a>
        <p>Technical University of Denmark</p>
      </div>
      {/* <div class="headline">
        DTU Reset password
      </div> */}
      <div class="password-checker">
        <div class="password-checker-container">
          <h1>Reset Password</h1>
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
          <button onClick={checkPassword}>Check Password</button>
          {status && <div>Status: {status}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
