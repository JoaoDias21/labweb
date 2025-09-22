import './styles/style.css';
import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/App.jsx";
import React from "react";
import Education from "./pages/education/App.jsx";
import News from "./pages/news/App.jsx";
import Forum from "./pages/forum/App.jsx";
import Simulator from "./pages/simulator/App.jsx";

function App() {

  return (
        <div>
            <div>
                <div className='nav-div'>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/formacao" element={<Education />} />
                            <Route path="/simulador" element={<Simulator />} />
                            <Route path="/noticias" element={<News />} />
                            <Route path="/fale-conosco" element={<Forum />} />
                        </Routes>
                    </Router>

                </div>
            </div>
        </div>

  )
}

export default App
