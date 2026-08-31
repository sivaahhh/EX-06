# Ex06 BMI Calculator
## Date: 31/08/26
## Name: SIVA SAKTHI A
## Reg.No:212224223005
## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM
App.js
```
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BMI from './pages/BMI';
import Result from './pages/Result';
import Navbar from './components/NavBar';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
```
app.css
```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f2f6ff;
  color: #222;
}

.navbar {
  height: 70px;
  background: #3157d5;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8%;
}

.navbar h2 {
  font-size: 24px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

.home-container {
  min-height: calc(100vh - 70px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
}

.home-card {
  background: white;
  width: 600px;
  max-width: 100%;

  padding: 55px;

  text-align: center;

  border-radius: 15px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.home-card h1 {
  color: #3157d5;
  margin-bottom: 20px;
  font-size: 32px;
}

.home-card p {
  margin-bottom: 15px;
  line-height: 1.6;
}


.form-container {
  min-height: calc(100vh - 70px);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.form-card {
  width: 600px;
  max-width: 100%;
  background: rgb(255, 255, 255);
  padding: 55px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.form-card h1 {
  text-align: center;
  color: #0d0d0e;
  margin-bottom: 35px;
  font-size: 28px;
}

.form-card label {
  display: block;

  margin-top: 20px;
  margin-bottom: 10px;

  font-weight: bold;
  font-size: 17px;
}

.form-card input {
  width: 100%;
  padding: 17px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 17px;
}

.form-card input:focus {
  outline: none;
  border-color: #3157d5;
}

.button {
  display: inline-block;
  margin-top: 30px;
  padding: 15px 40px;
  border: none;
  border-radius: 7px;
  background: #3157d5;
  color: white;

  font-size: 17px;
  font-weight: bold;

  text-decoration: none;

  cursor: pointer;
}

.button:hover {
  background: #2343ae;
}


.error {
  color: #d62828;
  margin-top: 15px;
  font-size: 14px;
}

.result-container {
  min-height: calc(100vh - 70px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
}

.result-card {
  width: 600px;
  max-width: 100%;

  background: white;

  padding: 55px;

  text-align: center;

  border-radius: 15px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.result-card h1 {
  color: #3157d5;
  margin-bottom: 25px;
  font-size: 32px;
}

.bmi-value {
  font-size: 60px;
  font-weight: bold;

  color: #3157d5;

  margin: 25px 0;
}

.result-card h2 {
  margin-bottom: 20px;
  font-size: 25px;
}

.details {
  line-height: 2;
  font-size: 17px;
}

@media (max-width: 600px) {
  .navbar {
    padding: 0 20px;
  }

  .navbar h2 {
    font-size: 19px;
  }

  .nav-links {
    gap: 12px;
  }

  .home-card,
  .form-card,
  .result-card {
    padding: 35px 25px;
  }

  .bmi-value {
    font-size: 45px;
  }
}
```
NavBar.js
```
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
```
BMI.js
```
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (!height || !weight) {
      setError('Please enter both height and weight.');
      return;
    }

    if (
      isNaN(heightValue) ||
      isNaN(weightValue) ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      setError('Please enter valid positive numbers.');
      return;
    }

    if (heightValue > 300) {
      setError('Please enter a valid height in centimeters.');
      return;
    }

    setError('');

    navigate(
      `/result?height=${heightValue}&weight=${weightValue}`
    );
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>BMI Calculator</h1>

        <form onSubmit={handleSubmit}>
          <label>Height (cm)</label>

          <input
            type="number"
            placeholder="Enter height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label>Weight (kg)</label>

          <input
            type="number"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="button">
            Calculate BMI
          </button>
        </form>
      </div>
    </div>
  );
}

export default BMI;
```
Home.js
```
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
```
Result.js
```
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const height = parseFloat(params.get('height'));
  const weight = parseFloat(params.get('weight'));

  if (!height || !weight) {
    return (
      <div className="result-container">
        <div className="result-card">
          <h2>No data available</h2>

          <button
            className="button"
            onClick={() => navigate('/bmi')}
          >
            Go to Calculator
          </button>
        </div>
      </div>
    );
  }

  // Convert height from centimeters to meters
  const heightInMeters = height / 100;

  // BMI Formula = Weight / Height²
  const bmi = weight / (heightInMeters * heightInMeters);

  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  return (
    <div className="result-container">
      <div className="result-card">
        <h1>Your BMI Result</h1>

        <div className="bmi-value">
          {bmi.toFixed(2)}
        </div>

        <h2>{category}</h2>

        <div className="details">
          <p>
            <strong>Height:</strong> {height} cm
          </p>

          <p>
            <strong>Weight:</strong> {weight} kg
          </p>
        </div>

        <button
          className="button"
          onClick={() => navigate('/bmi')}
        >
          Calculate Again
        </button>
      </div>
    </div>
  );
}

export default Result;
```

## OUTPUT
<img width="1041" height="546" alt="image" src="https://github.com/user-attachments/assets/99bc10a6-4eff-4421-9f27-3fedac5f0411" />
<img width="1042" height="552" alt="image" src="https://github.com/user-attachments/assets/03eedd89-7859-4c9a-89c8-625d8c341b8a" />
<img width="1035" height="548" alt="image" src="https://github.com/user-attachments/assets/e7c56a37-dfef-426d-ab6d-d4ba9e7535a4" />


## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
