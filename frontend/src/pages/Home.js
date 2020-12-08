import React from "react";
import {Link} from "react-router-dom";
import '../css/Home.css';
import expo1 from '../images/expo1.jpg';
import expo2 from '../images/expo2.jpg';
import imgNews from '../images/news2.jpg';

function Home() {
    return(
        <div className="homeContainer">
            <div className="homeBanniere">
                <h1>Galerie Catherine Putman</h1>
            </div>
            <h2 className="homeSecondaryTitle">Expositions</h2>
            <div className="nextExpos">
                <div className="nextExpoDetail">
                    <Link className="nextExpoDetailLink" to="/expo/1">
                        <img className="nextExpoDetailImg" src={expo1} alt="prochaine exposition galerie Catherine Putman" />
                    </Link>
                    {/* <div className="nextExpoDetailImgOverlay">
                        <div className="nextExpoDetailImgOverlayText">Hello World</div>
                    </div> */}
                </div>
                <div className="nextExpoDetail">
                    <Link className="nextExpoDetailLink" to="/expo/1">
                        <img className="nextExpoDetailImg" src={expo2} alt="prochaine exposition galerie Catherine Putman" />
                    </Link>
                    {/* <div className="nextExpoDetailImgOverlay">
                        <div className="nextExpoDetailImgOverlayText">Hello World</div>
                    </div> */}
                </div>
            </div>
            <h2 className="homeSecondaryTitle">Actualités</h2>
            <div className="homeNews">
                <div className="homeNewsDetail">
                    <img className="homeNewsDetailImg" src={imgNews} alt="actualité gallerie Catherine Putman" />
                </div>
            </div>
        </div>
    );
}

export default Home;