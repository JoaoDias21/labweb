import React from 'react';
import '../../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="bar">
            <a href="#home">início</a>
            <a href="#home">minicursos</a>
            <a href="#home">programação</a>
            <a href="#home">simuladores</a>
            <a href="#home">quântica</a>
            <a href="#home">fale conosco</a>
        </nav>
    )
}