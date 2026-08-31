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
