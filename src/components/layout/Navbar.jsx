import React from 'react';
import '../../styles/navbar.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bar">
            <Link to="/">Início</Link>
            <Link to="/formacao">Formação</Link>
            <Link to="/simulador">Simulador</Link>
            <Link to="/noticias">Notícias</Link>
            <Link to="/fale-conosco">Fale Conosco</Link>
        </nav>

)
}