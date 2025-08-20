
import '../../styles/style.css';
import React from "react";

function Home() {

  return (
        <div>
            <div className="container">
             <div className='content'>
                    <h1 className={"upperText"}>&lt;labweb&#47;&gt;</h1>
                </div>
                <div className='wave'>
                   <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
                </div>
             <div className='secondBack'>
                  <div className='info'>
                        <h1>O que é o LabWeb ?</h1>
                        <p>A página LabWeb tem como objetivo integrar projetos: Recicla Eletrônicos, Programação Web e Simuladores de Sistemas de Comunicações são alguns exemplos de programas de extensão que, em conjunto com a instituição federal CEFET/RJ, foram elaborados de forma a instruir conhecimento em diversas áreas da tecnologia.</p>
                   </div>
                   <div className='projects-box'>
                       <div className='box1'>
                            <img src='/icons8-recycle-48.png'/>
                         <h2>Recicla Eletrônicos</h2>
                         <p>Visa o reaproveitamento de componentes eletrônicos para gerar um lucro maior com a revenda.</p>
                        </div>
                        <div className='box2'>
                         <img src='/icons8-source-code-48.png'/>
                          <h2>Programação Web</h2>
                           <p>Ensino de programação web em forma de minicurso. Os monitores desse projeto, em conjunto com o professor João Dias, ministraram minicursos em turmas pilotos em parceria com a ONG Redes da Maré, para disseminarmos o estudo de programação web, utilizando as linguagens de programação: HTML, CSS e JavaScript. Os objetivos do projeto são estimular o uso de tecnologias de informação e comunicação como recurso em processos educacionais.</p>
                            <p>O projeto, que até então vinha se desenvolvendo na coordenação de Telecomunicações e Segurança do Trabalho, devido à pandemia de Covid-19, está sendo realizado virtualmente pelos alunos do ensino médio técnico: Bernardo Aragão, Gabriela Cruz, Iasmin Rosa e Júlia Leão.</p>
                       </div>
                        <div className='box3'>
                         <img src='/icons8-radio-tower-48.png'/>
                           <h2>Simuladores de Sistemas de Telecomunicações</h2>
                           <p>Tem como finalidade desenvolver uma ferramenta de simulação computacional para apoio didático ao ensino.</p>
                        </div>
                       <div className='box4'>
                          <img src='/icons8-physics-48.png'/>
                          <h2>Comunicações Quânticas</h2>
                            <p>Propiciar ao leitor um maior contato com as teorias das comunicações e mecânica quântica.</p>
                        </div>
                  </div>
                </div>
            </div>
        </div>

  )
}

export default Home
