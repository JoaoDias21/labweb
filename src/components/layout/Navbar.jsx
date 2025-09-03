import React from 'react';
import '../../styles/navbar.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bar">
            <Link to="/">Início</Link>
            <Link to="/recicla">Recicla</Link>
            <Link to="/programacao">Programação</Link>
            <Link to="/simulacoes">Simulações</Link>
            <Link to="/quantica">Quântica</Link>
            <Link to="/fale-conosco">Fale Conosco</Link>
        </nav>

)
}