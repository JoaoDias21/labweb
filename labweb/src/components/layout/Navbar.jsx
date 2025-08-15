import React from 'react';
import '../../styles/navbar.css';
import {
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bar">
            <a href="/">Início</a>
            <a href="/recicla">Recicla</a>
            <a href="">Programação</a>
            <a href="">Simuladores</a>
            <a href="">Quântica</a>
            <a href="">Fale Conosco</a>
        </nav>

    )
}