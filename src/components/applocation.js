// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
 // Assurez-vous de remplacer le chemin par votre fichier Login.js
  // Assurez-vous de créer cette page

const Applocation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home/>} /> 
      </Routes>
    </Router>
  );
};

export default Applocation;
