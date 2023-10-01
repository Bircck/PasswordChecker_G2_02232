import React, { useState } from "react";
import { checkPassword } from './api';
import "./Home.scss";
import PasswordInput from "./components/PasswordInput";
import PassStrengthViz from "./components/PassStrengthViz";
import Spinner from './components/Spinner';

function Home() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [requestInProgress, setRequestInProgress] = useState(false);  // New state variable


  const handleCheckPassword = async () => {
    if (requestInProgress) return;  // Return early if a request is already in progress

    setIsLoading(true);
    setRequestInProgress(true);  // Set requestInProgress to true when a request starts
    
    const status = await checkPassword(password);
    setStatus(status);
    
    setIsLoading(false);
    setRequestInProgress(false);  // Set requestInProgress to false when the request completes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCheckPassword();
    }
  };

  return (
    <div className="password-checker">
      <div className="password-checker-container">
        <h1 style={{marginBottom:0}}>Reset Password</h1>
        <PassStrengthViz password={password} /> 
        <PasswordInput
            password={password}
            setPassword={setPassword}
            onKeyDown={handleKeyDown}
            disabled={isLoading} 
        />
        <button className="password-button-spacing button-4" onClick={handleCheckPassword} disabled={isLoading}>Check Password</button>
        {status && <div>Status: {status}</div>}
        {isLoading && <Spinner />}  {/* Show the spinner while loading */}
      </div>
    </div>
  );
}

export default Home;
