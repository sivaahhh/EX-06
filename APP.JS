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
