import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Importation du fichier CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
// Pour afficher une erreur si nécessaire

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification si le nom d'utilisateur ou le mot de passe est vide

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
          
            
            {/* Utilisation de Link pour la navigation */}
            {username && password ? (
              <Link to="/home" className="btn btn-primary w-100">Login</Link> // Si les champs sont remplis, rediriger vers la page d'accueil
            ) : (
            
              <button type="submit" className="btn btn-primary w-100" >Login</button> // Désactiver le bouton si les champs sont vides
              
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
