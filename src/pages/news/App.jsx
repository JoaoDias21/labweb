import '../../styles/style.css';
import React from "react";
import LearnMore from "../../components/layout/LearnMoreSpan.jsx"

function News() {

  return (
        <div>
        <div className="container">
            <div className='content'>
                <h1 className={"upperText"}>&lt;labweb&#47;Notícias&gt;</h1>
            </div>
            <div className='wave'>
                <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
            </div>
            <div className='secondBack'>
                <div className='info'>
                    <h1>Bem vindo a área de comunicações quânticas do projeto LabWeb. Os nossos objetivos são: </h1>
                    <ul>
                        <li>Propiciar ao leitor maior contato com as teorias das comunicações e mecânica quântica;</li>
                        <li>Estudo de técnicas atuais da comunicação quântica e seu embasamento na mecânica quântica;</li>
                        <li>Analisar o desempenho de algoritmos quânticos e seu real aproveitamento do processamento quântico;</li>
                        <li>Buscar possíveis soluções para as limitações das comunicações na literatura quântica, matemática e física;</li>
                    </ul>
                    <iframe width="820" height="450" src="https://www.youtube.com/embed/TkmgF2GbJ_Q"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
        </div>

  )
}

export default News
