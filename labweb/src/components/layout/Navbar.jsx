import React from 'react';
import '../../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="bar">
            <a href="#">início</a>
            <a href="#">minicursos</a>
            <a href="#">programação</a>
            <a href="#">simuladores</a>
            <a href="#">quântica</a>
            <a href="#">fale conosco</a>
        </nav>
    )
}