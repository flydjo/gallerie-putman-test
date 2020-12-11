import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../css/Artistes.css';
import oeuvre1 from '../images/oeuvre1.jpg';
import oeuvre2 from '../images/oeuvre2.jpg';
import oeuvre3 from '../images/oeuvre3.jpg';

function Artistes() {
    const [show, setShow] = useState(false);

    function toggleListArtists() {
        setShow(!show);
    }

    return(
        <div>
            <div className="artistesContainer">
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre1} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Pierre Alechinsky</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre2} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Geneviève Asse</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre3} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Georg Baselitz</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre2} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Pierre Buraglio</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre1} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Pierre Alechinsky</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre3} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Georg Baselitz</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre1} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Pierre Alechinsky</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre2} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Geneviève Asse</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre3} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Georg Baselitz</h3>
                </div>
                <div className="cartArtist">
                    <img className="cartArtistImg" src={oeuvre2} alt="oeuvre1" />
                    <h3 className="cartArtistTitle">Pierre Buraglio</h3>
                </div>
            </div>
            <div className="showListArtistsButtonContainer">
                <button onClick={toggleListArtists} className="showListArtistsButton">
                    {show === false ? 'Voir' : 'Caché'} la liste de tout les artistes
                </button>
            </div>

            {show === true 
            ? 
            <div className="listArtistsContainer">
                <input placeholder="Chercher un artiste" className="searchArtist" type="search" />
                <ul className="listArtists">
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
                </ul>
            </div>
            : ''}

        </div>
    );
}

export default Artistes;