import React from 'react';
import '../../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="bar">
            <a href="/">início</a>
            <a href="/recicla">recicla</a>
            <a href="/programacao">programação</a>
            <a href="">simuladores</a>
            <a href="/quantica">quântica</a>
            <a href="">fale Conosco</a>
        </nav>

    )
}