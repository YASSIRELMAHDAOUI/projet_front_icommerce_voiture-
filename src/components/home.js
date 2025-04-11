import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from './data.js';

const Home = () => {
  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/contact"><button className="btn btn-primary">Contact Us</button></Link>
              <Link to="/" className="btn btn-primary">retour a la page login</Link>
            </li>
          </ul>
        </div>
      </nav>

      
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        {cars.map((care) => (
          <div className="card" style={{ width: "300px" }} key={care.id}>
            <img className="card-img-top" src={care.img} alt={`Image de ${care.title}`} />
            <div className="card-body">
              <h4 className="card-title">{care.title}</h4>
              <p className="card-text">{care.desc}</p>
              <Link to={`/details/${care.id}`}><button className="btn btn-primary">Voir Détail</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
