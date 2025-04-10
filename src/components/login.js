import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

   

  };

  return (
    
    <div className="login-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          
            
           
            {username && password ? (
              <Link to="/home" className="btn btn-primary w-100">Login</Link> 
            ) : (
            
              <button type="submit" className="btn btn-primary w-100" >Login</button> 
              
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
