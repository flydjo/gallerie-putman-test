import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li className="navHome">
                        <Link to="/">Galerie Catherine Putman</Link>
                    </li>
                    <li className="navArtistes">
                        <Link to="/artistes">Artistes</Link>
                    </li>
                    <li className="navEditions">
                        <Link to="/editions">Éditions</Link>
                    </li>
                    <li className="navExpositions">
                        <Link to="/expositions">Expositions</Link>
                    </li>
                    <li className="navActualites">
                        <Link to="/actualites">Actualités</Link>
                    </li>
                    <li className="navGalerie">
                        <Link to="/galerie">Galerie</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;