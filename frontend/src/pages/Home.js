import React, {useEffect, Fragment} from "react";
import {Link} from "react-router-dom";
import '../css/Home.css';
import expo1 from '../images/expo1.jpg';
import expo2 from '../images/expo2.jpg';
import imgNews from '../images/news2.jpg';
import {animHomeTitle, animHomeBanniereImg, animHomeBanniere} from '../animations/script';
import banniereImg from '../images/banniere-gallerie.jpg';

const HomeInterline = ({title}) => <h2 className="homeSecondaryTitle">{title}</h2>;
const HomeFigLink = ({src, to, label, alt, full}) => (
    <figure className={full?'nextExposDetails full':'nextExposDetails'}>
        <img src={src} alt={alt} />
        <Link to={to}>
            <figcaption>{label}</figcaption>
        </Link>
    </figure>
);

function Home() {

    useEffect(() => {
        animHomeBanniere();
    } ,[]);

    return(
        <div className="homeContainer">
            <div className="homeBanniere">
                <h1 className="homeBanniereTitle">Galerie Catherine Putman</h1>
                <div className="homeBanniereImg">
                    <img src={banniereImg} alt="gallerie-catherine-putman" />
                </div>
            </div>

            {/* <HomeBlockExpos  title='Expositions' src={expo1} to='/expo/1' label='Vernissage 15 octobre 2021' alt='vernissave'/> */}

            <HomeInterline title='Expositions' />
            <div className="nextExpos">
                <HomeFigLink src={expo1} to='/expo/1' label='Vernissage du 15 octobre 2021' alt='vernissage' />
                <HomeFigLink src={expo2} to='/expo/2' label='Vernissage du 25 octobre 2021' alt='vernissage' />
            </div>

            <HomeInterline title='Actualités' />
            <div className="nextExpos">
                <HomeFigLink src={imgNews} to='/news/1' label='Exposition 15 octobre 2022' alt='expo' full />
            </div>
            
        </div>
    );
}

export default Home;