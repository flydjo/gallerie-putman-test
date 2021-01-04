import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import '../css/Editions.css';
import {animEditionsFigures} from '../animations/script';
import oeuvre1 from '../images/oeuvre1.jpg';
import oeuvre4 from '../images/oeuvre4.jpg';
import oeuvre5 from '../images/oeuvre5.jpg';
import artistsData from '../artistsData';

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

    const listArtist = artistsData.map(artist => (
        <ul className="listArtistsEditions">
            <li key={artist.id}><Link to={`/artiste/${artist.id}`}>{artist.name}</Link></li>
        </ul>
    ));

    return (
        <div className="editionsContainer">
            <div className="listArtistsEditionsContainer">
                <input placeholder="Chercher un artiste" className="searchArtist" type="search" />
                {listArtist}
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