import React from 'react';
import { Link } from 'react-router-dom'; 

const cars = [
  { title: "DS4", img: "images/DS4-Cross.webp", desc: "DS4, élue plus belle voiture de l’année", price: "25000$" },
  { title: "BMW X5", img: "images/BMW_X5_(E53,_Facelift)_–_Frontansicht,_12._Juni_2011,_Düsseldorf.jpg", desc: "Luxueuse et puissante", price: "60000$" },
  { title: "Audi A4", img: "images/audi-a4-gtron-launch-01_251119_1060_795.jpg", desc: "Élégance allemande", price: "45000$" },
  { title: "Mercedes C-Class", img: "images/Mercedes-Classe-C-.jpg", desc: "Confort premium", price: "55000$" },
  { title: "Peugeot 208", img: "images/nouvelle-peugeot-208-600px.jpg", desc: "Compacte et pratique", price: "20000$" },
  { title: "Renault Clio", img: "images/renault-clio-gallery_4.png", desc: "Best-seller au Maroc", price: "18000$" },
  { title: "Hyundai Tucson", img: "images/hyundai-tucson.jpg", desc: "SUV fiable", price: "30000$" },
  { title: "Kia Sportage", img: "images/Kia Sportage.jpg", desc: "Style et robustesse", price: "32000$" },
  { title: "Volkswagen Golf", img: "images/volkswagen-Nouvelle-Golfgallery_0.png", desc: "La voiture polyvalente", price: "27000$" },
  { title: "Toyota Corolla", img: "images/toyota-corolla-sedan-GR-7.jpg", desc: "Fiabilité japonaise", price: "25000$" },
];

const Home = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav d-flex justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/contact"><button className='btn btn-primary'>contact us</button></Link>
      </li>
    </ul>
  </div>
</nav>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {cars.map((car, index) => (
          <div className="card" style={{ width: "300px" }} key={index}>
            <img className="card-img-top" src={car.img} alt={`Image de ${car.title}`} />
            <div className="card-body">
              <h4 className="card-title">{car.title}</h4>
              <p className="card-text">{car.desc}</p>
              <a href="#" className="btn btn-primary">{car.price}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
