import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import '../css/Editions.css';
import {animEditionsFigures} from '../animations/script';
import oeuvre1 from '../images/oeuvre1.jpg';
import oeuvre4 from '../images/oeuvre4.jpg';
import oeuvre5 from '../images/oeuvre5.jpg';

function Editions() {

    useEffect(() => {
        console.log('ok');
        animEditionsFigures();
    }, [])

    const  EditionImg = ({src, alt, to, artist, workName}) => (
        <figure className="editionFigure">
            <img className="editionFigureImg" src={src} alt={alt} />
            <Link to={to}>
                <figcaption>
                    <h4>{artist}</h4>
                    <p>{workName}</p>
                </figcaption>
            </Link>
        </figure>
    );

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
            <div className="listFigure">
                <EditionImg src={oeuvre1} alt="edition-numéro-1" to="edition/1" artist="Henri Michaux" workName="Boréalité, 1976" />
                <EditionImg src={oeuvre4} alt="edition-numéro-2" to="edition/2" artist="Rajak Ohanian" workName="Spiritualité, 2010" />
                <EditionImg src={oeuvre5} alt="edition-numéro-3" to="edition/3" artist="Antonio Saura" workName="Pleine lune, 1996" />
            </div>
        </div>
    );
}

export default Editions;