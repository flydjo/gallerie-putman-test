import React from "react";
import {Link} from "react-router-dom";
import '../css/Editions.css';

function Editions() {
    return (
        <div className="editionsContainer">
            <div className="listArtistsEditionsContainer">
                <input placeholder="Chercher un artiste" className="searchArtist" type="search" />
                <ul className="listArtistsEditions">
                    <li><Link to="/artiste/1">Antoine Marquis</Link></li>
                    <li><Link to="/artiste/1">Henri Michaux</Link></li>
                    <li><Link to="/artiste/1">Rajak Ohanian</Link></li>
                    <li><Link to="/artiste/1">Antonio Saura</Link></li>
                    <li><Link to="/artiste/1">Gérard Traquandi</Link></li>
                    <li><Link to="/artiste/1">Jean-Pierre Pincemin</Link></li>
                    <li><Link to="/artiste/1">Eloïse Van der Heyden</Link></li>
                    <li><Link to="/artiste/1">Balthasar Burkhard</Link></li>
                    <li><Link to="/artiste/1">Antoine Marquis</Link></li>
                    <li><Link to="/artiste/1">Henri Michaux</Link></li>
                    <li><Link to="/artiste/1">Rajak Ohanian</Link></li>
                    <li><Link to="/artiste/1">Antonio Saura</Link></li>
                    <li><Link to="/artiste/1">Gérard Traquandi</Link></li>
                    <li><Link to="/artiste/1">Jean-Pierre Pincemin</Link></li>
                    <li><Link to="/artiste/1">Eloïse Van der Heyden</Link></li>
                    <li><Link to="/artiste/1">Balthasar Burkhard</Link></li>
                    <li><Link to="/artiste/1">Antoine Marquis</Link></li>
                    <li><Link to="/artiste/1">Henri Michaux</Link></li>
                    <li><Link to="/artiste/1">Rajak Ohanian</Link></li>
                    <li><Link to="/artiste/1">Antonio Saura</Link></li>
                    <li><Link to="/artiste/1">Gérard Traquandi</Link></li>
                    <li><Link to="/artiste/1">Jean-Pierre Pincemin</Link></li>
                    <li><Link to="/artiste/1">Eloïse Van der Heyden</Link></li>
                    <li><Link to="/artiste/1">Balthasar Burkhard</Link></li>
                </ul>
            </div>
            <div className="listPaints">
                
            </div>
        </div>
    );
}

export default Editions;