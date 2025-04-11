import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "./data";

function Detail() {
  const { id } = useParams();
  const car = cars.find(car=> car.id === parseInt(id)); 

  if (!car) {
    return <h2>Voiture non trouvée</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign:'center'}}>
      <h1>{car.title}</h1>
      <img src={`http://localhost:3000/${car.img}`} alt={car.title} style={{ width: "400px" }} />
      <p>{car.title} est de bonne qualité avec un prix convenable : {car.price}</p>
      <p>Description : {car.desc}</p>
      <Link to="/home">
        <button className="btn btn-primary">Retour à la page d'accueil</button>
      </Link>
    </div>
  );
}

export default Detail;

