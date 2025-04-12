import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sms, setSms] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
      setSms(`${nom} ${email} ${message} : est envoyer avec succes!!!!`)
      setTimeout(() => {
        setSms('');
      }, 3600);
      }
  return (
    
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="mb-3">
        <p className='alert alert-success text-center" role="alert' >{sms}</p>
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Adresse Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message ici..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>Envoyer</button>*<br></br>
        <Link to="/home" className="btn btn-primary w-1" >Retour a la page home</Link>
      </form>
    </div>
  );
};

export default ContactUs;
