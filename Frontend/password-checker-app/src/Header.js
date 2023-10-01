// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import dtuLogo from './images/dtuLogoStandard.png';
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className='header-logo-container'>
        <a className="header-logo-link" href="https://www.inside.dtu.dk/">
          <img className="header-logo" src={dtuLogo} alt="DTU"></img>
        </a>
        <p>Technical University of Denmark</p>
      </div>
      <div className='header-links-container'>
          <Link className='header-link' to="/about">About</Link>
          <Link className='header-link' to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;
