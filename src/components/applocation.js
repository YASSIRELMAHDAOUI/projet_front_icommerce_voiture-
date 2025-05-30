
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Contact from './contact';
import Detail from './details';


const Applocation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/details/:id" element={<Detail/>} />


      </Routes>
    </Router>
  );
};

export default Applocation;
