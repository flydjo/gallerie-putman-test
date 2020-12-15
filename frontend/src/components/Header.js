import React from "react";
import {Link} from "react-router-dom";
import '../css/Header.css';

const navLinks = [
    {
        to: '/artistes',
        label: 'Artistes'
    },
    {
        to: '/editions',
        label: 'Editions'
    },
    {
        to: '/expositions',
        label: 'Expositions'
    },
    {
        to: '/actualites',
        label: 'Actualites'
    },
    {
        to: '/galerie',
        label: 'Galerie'
    },
    
];

const HeaderLogo = () => <h1><Link to='/'>Galerie d'art</Link></h1>

const HeaderLink = (props) => (
    navLinks.map(({to, label}, i) => <li key={i} className="navLink"><Link to={to}>{label}</Link></li>)
)

function Header() {
    return (
        <header>
            <nav className="navbar">
                <HeaderLogo />
                <ul>
                    <HeaderLink />
                </ul>
            </nav>
        </header>
    );
}

export default Header;