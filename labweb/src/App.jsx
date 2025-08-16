
import './styles/style.css';
import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recicla from "./pages/recicla/App.jsx";
import Home from "./pages/home/App.jsx";
import React from "react";
import Programacao from "./pages/programacao/App.jsx";
import Quantica from "./pages/quantica/App.jsx";

function App() {

  return (
        <div>
            <div>
                <div className='nav-div'>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/recicla" element={<Recicla />} />
                            <Route path="/programacao" element={<Programacao />} />
                            <Route path="/quantica" element={<Quantica />} />
                        </Routes>
                    </Router>

                </div>
            </div>
        </div>

  )
}

export default App
