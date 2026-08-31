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
