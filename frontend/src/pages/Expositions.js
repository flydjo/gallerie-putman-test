import React from "react";
import {Link} from "react-router-dom";
import "../css/Expositions.css";
import expo3 from "../images/expo3.jpg";

function Expositions() {

    const CartExpos = (props) => (
        <figure className="exposFigure">
            <img src={expo3} />
            <Link to="/expo">
                <figcaption>
                    <h4>Agathe May</h4>
                    <h5>Le miroir aux alouettes</h5>

                    
                    <h5>16 Janvier - 13 Mars 2021</h5>
                </figcaption>
            </Link>
        </figure>
    )

    return (
        <div className="expositionsContainer">
            <CartExpos />
            <CartExpos />
            <CartExpos />
            <CartExpos />
            <CartExpos />
        </div>
    );
}

export default Expositions;