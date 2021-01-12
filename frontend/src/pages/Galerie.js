import react from "react";
import '../css/Galerie.css';
import galerie from '../images/galerie.jpg';

function Galerie() {
    return(
        <div className="galerieContainer">
            <div className="galerieDescription">
                <img className="galerieDescriptionImg" src={galerie} alt="galerie catherine putman" />
                <br/>
                <p>
                    La galerie Catherine Putman est spécialisée dans les oeuvres sur papier d'artistes contemporains, 
                    pièces uniques, photographies et estampes. <br/><br/>

                    Depuis l'ouverture d'un nouvel espace en 2005, 40 rue Quincampoix à Paris, 
                    elle a organisé plus d'une quarantaine d'expositions d'artistes français et étrangers : Geneviève Asse, 
                    Georg Baselitz, Pierre Buraglio, Bernard Moninot, Tony Cragg, Imi Knoebel, Urs Lüthi, Agathe May, 
                    Keita Mori, Carmen Perrin, Frédéric Poincelet, Sophie Ristelhueber, Georges Rousse, etc. 
                    La programmation alterne expositions monographiques et expositions collectives. <br/><br/>

                    La galerie Catherine Putman est un lieu qui bénéficie d'une ambiance intimiste et adaptée à 
                    la présentation des oeuvres sur papier. Elle soutient ses artistes dans leur production de dessins, 
                    d'estampes et de photographies, en les présentant à la galerie, à l'occasion de foires et en publiant 
                    de nouvelles éditions. <br/><br/>

                    La galerie conserve également son activité d'éditeur d'art initiée par Jacques et 
                    Catherine Putman dans les années 1970 avec des artistes comme Pierre Alechinsky, 
                    Max Ernst, Bram van Velde, poursuivie dans les années 1990 et 2000 avec Geneviève Asse, 
                    Georg Baselitz, Pierre Buraglio, Tony Cragg, Bertrand Lavier, Claude Viallat, etc. 
                    Ce travail d'éditeur permet de diffuser des oeuvres de qualité d'artistes importants de la 
                    scène nationale et internationale, auprès d'amateurs de papier et d'estampes mais également 
                    d'un public élargi. <br/><br/>

                    Catherine Putman est décédée en janvier 2009, Eléonore Chatin, sa collaboratrice depuis 
                    l'ouverture de la galerie, en est aujourd'hui la directrice. La galerie a la volonté de 
                    conserver sa spécificité en pérennisant ses liens avec les artistes et en s'ouvrant à de 
                    nouvelles collaborations. <br/><br/>
                </p>
            </div>
            <div className="galerieInfos">
                <h2 className="galerieInfosTitleAdress">ADRESSE</h2>
                <p>
                    40 rue Quincampoix <br/>
                    75004 Paris<br/>
                    1er étage (interphone Galerie Catherine Putman) <br/>
                    <br />
                    Métro : Châtelet ou Rambuteau
                </p>

                <h2 className="galerieInfosTitle">HORAIRES</h2>
                <p>
                    La galerie est ouverte <br/>
                    du mardi au samedi de 14h à 19h <br/>
                    et sur rendez vous.
                </p>

                <h2 className="galerieInfosTitle">CONTACTS</h2>
                <p>
                    Eléonore CHATIN, directrice <br/>
                    Pascaline ZARIFIAN, collaboratrice
                </p>

                <h2 className="galerieInfosTitle">TEL/EMAIL</h2>
                <p>
                    +33 (0)1 45 55 23 06 <br/>
                    contact@catherineputman.com
                </p>
            </div>
        </div>
    );
}

export default Galerie;