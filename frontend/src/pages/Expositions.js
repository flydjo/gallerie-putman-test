import React from "react";
import {Link} from "react-router-dom";
import "../css/Expositions.css";
import expo3 from "../images/expo3.jpg";
import expo1 from "../images/expo1.jpg";
import expo2 from "../images/expo2.jpg";

function Expositions() {

    const CartExpos = ({img, alt, artist, desc, date}) => (
        <figure className="exposFigure">
            <img src={img} alt={alt} />
            <Link to="/expo">
                <figcaption>
                    <h4 className="exposFigureItem">{artist}</h4>
                    <h5 className="exposFigureItem"><i>{desc}</i></h5>
                    <h5 className="exposFigureItem">{date}</h5>
                </figcaption>
            </Link>
        </figure>
    )

    return (
        <div className="expositionsContainer">
            <CartExpos 
                img={expo3} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo2} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo3} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo3} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo1} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo3} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo1} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
            <CartExpos 
                img={expo3} 
                alt="exposition 3" 
                artist="Agathe May" 
                desc="Le miroir aux alouettes" 
                date="16 Janvier - 13 Mars 2011" 
            />
        </div>
    );
}

export default Expositions;