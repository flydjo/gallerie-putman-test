import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {animListArtists} from '../animations/script';
import '../css/Artistes.css';
import oeuvre1 from '../images/oeuvre1.jpg';
import oeuvre2 from '../images/oeuvre2.jpg';
import oeuvre3 from '../images/oeuvre3.jpg';
import artistsData from '../artistsData';

function Artistes() {
    const [show, setShow] = useState(false);

    function toggleListArtists() {
        setShow(!show);
    }

    const listArtists = artistsData.map(artist => (
        <ul className="listArtists">
            <li key={artist.id}><Link to={`/artiste/${artist.id}`}>{artist.name}</Link></li>
        </ul>
    ));

    const CartArtist = ({src, alt, nameArtist, to}) => (
        <figure className="cartArtist">
            <img className="cartArtistImg" src={src} alt={alt} />
            <Link to={to}>
                <figcaption>{nameArtist}</figcaption>
            </Link>
        </figure>
    )

    useEffect(() => {
        animListArtists();
        // return () => {
        //     cleanup
        // };
    }, [show]);

    return(
        <div>
            <div className="artistesContainer">
                <CartArtist src={oeuvre1} alt="oeuvre1" nameArtist="Pierre Alechinsky" to='/artiste/1' />
                <CartArtist src={oeuvre2} alt="oeuvre1" nameArtist="Georg Baselit" to='/artiste/1' />
                <CartArtist src={oeuvre2} alt="oeuvre1" nameArtist="Pierre Alechinsky" to='/artiste/1' />
                <CartArtist src={oeuvre2} alt="oeuvre1" nameArtist="Pierre Buraglio" to='/artiste/1' />
                <CartArtist src={oeuvre1} alt="oeuvre1" nameArtist="Georg Baselit" to='/artiste/1' />
                <CartArtist src={oeuvre3} alt="oeuvre1" nameArtist="Pierre Alechinsky" to='/artiste/1' />
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
                {listArtists}
            </div>
            : ''}

        </div>
    );
}

export default Artistes;