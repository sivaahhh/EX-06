import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h2>BMI Calculator</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/bmi">Calculator</Link>
      </div>
    </nav>
  );
}

export default NavBar;
