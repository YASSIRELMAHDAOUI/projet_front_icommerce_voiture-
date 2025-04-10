import React from "react";
import { Link } from "react-router-dom";
function Contact (){
    return(
        <>
        <h1>BONJOUR DANS LA PAGE CONTAT</h1>
        <Link to={'/home'}>retour a la page d'acceuil</Link>
        </>
    )
}
export default Contact