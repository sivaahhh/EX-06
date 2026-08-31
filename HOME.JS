import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>BMI Calculator</h1>

        <p>
          Calculate your Body Mass Index using your height and weight.
        </p>

        <p>
          Enter your details to calculate your BMI and view the
          corresponding category.
        </p>

        <Link to="/bmi" className="button">
          Start Calculator
        </Link>
      </div>
    </div>
  );
}

export default Home;
