import React from "react";
import '../css/Artistes.css';
import oeuvre1 from '../images/oeuvre1.jpg';
import oeuvre2 from '../images/oeuvre2.jpg';
import oeuvre3 from '../images/oeuvre3.jpg';

function Artistes() {
    return(
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
        </div>
    );
}

export default Artistes;