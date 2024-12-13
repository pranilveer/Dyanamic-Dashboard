// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar({ onLogout }) {
  return (
    <header className="navbar">
      <h1>Dynamic Dashboard</h1>
      <button onClick={() => { localStorage.removeItem('auth'); onLogout(false); }}>Logout</button>
    </header>
  );
}

export default Navbar;
