import React from "react";
import {Link} from "react-router-dom";
import '../css/Actualites.css';
import actu1 from '../images/actu1.jpg';
import actu2 from '../images/actu2.jpg';

function Actualites() {

    const CartActus = ({link, src, alt, title, date}) => (    
        <figure className="actusFigure">
            <Link to={link}>
                <img src={src} alt={alt} />
                <figcaption>
                    <h3 className="actusFigureItem">{title}</h3>
                    <h4 className="actusFigureItem">{date}</h4>
                </figcaption>
            </Link>
        </figure>
    );

    return(
        <div className="actualitesContainer">
            <CartActus 
                link="/actu/1" 
                src={actu1} 
                alt="actualité numéro 1" 
                title="PAREIDOLIE" 
                date="26 - 27 Septembre 2020"
            />
            <CartActus 
                link="/actu/2" 
                src={actu2} 
                alt="actualité numéro 2" 
                title="Un dimanche à la galerie" 
                date="13 Septembre 2020"
            />
            <CartActus 
                link="/actu/1" 
                src={actu1} 
                alt="actualité numéro 1" 
                title="PAREIDOLIE" 
                date="26 - 27 Septembre 2020"
            />
            <CartActus 
                link="/actu/2" 
                src={actu2} 
                alt="actualité numéro 2" 
                title="Un dimanche à la galerie" 
                date="13 Septembre 2020"
            />
            <CartActus 
                link="/actu/1" 
                src={actu1} 
                alt="actualité numéro 1" 
                title="PAREIDOLIE" 
                date="26 - 27 Septembre 2020"
            />
            <CartActus 
                link="/actu/2" 
                src={actu2} 
                alt="actualité numéro 2" 
                title="Un dimanche à la galerie" 
                date="13 Septembre 2020"
            />
            <CartActus 
                link="/actu/1" 
                src={actu1} 
                alt="actualité numéro 1" 
                title="PAREIDOLIE" 
                date="26 - 27 Septembre 2020"
            />
            <CartActus 
                link="/actu/2" 
                src={actu2} 
                alt="actualité numéro 2" 
                title="Un dimanche à la galerie" 
                date="13 Septembre 2020"
            />
        </div>
    );
}

export default Actualites;