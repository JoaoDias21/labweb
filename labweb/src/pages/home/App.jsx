
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
                       <div className='box box-one'>
                           <img src='/icons8-recycle-48.png'/>
                           <div className="information">
                               <h2>Recicla Eletrônicos</h2>
                               <p>Visa o reaproveitamento de componentes eletrônicos para gerar um lucro maior com a revenda.</p>
                               <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                          width="24" height="24"
                                          viewBox="0 0 172 172"
                                          style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#020c5e"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM93.16667,121.83333h-14.33333v-43h14.33333zM93.16667,64.5h-14.33333v-14.33333h14.33333z" /></g></g></svg>Saiba mais</span>
                           </div>
                        </div>
                        <div className='box box-two'>
                         <img src='/icons8-source-code-48.png'/>
                         <div className="information">
                             <h2>Programação Web</h2>
                             <p>Ensino de programação web em forma de minicurso. Os monitores desse projeto, em conjunto com o professor João Dias, ministraram minicursos em turmas pilotos em parceria com a ONG Redes da Maré, para disseminarmos o estudo de programação web, utilizando as linguagens de programação: HTML, CSS e JavaScript. Os objetivos do projeto são estimular o uso de tecnologias de informação e comunicação como recurso em processos educacionais.</p>
                             <p>O projeto, que até então vinha se desenvolvendo na coordenação de Telecomunicações e Segurança do Trabalho, devido à pandemia de Covid-19, está sendo realizado virtualmente pelos alunos do ensino médio técnico: Bernardo Aragão, Gabriela Cruz, Iasmin Rosa e Júlia Leão.</p>
                             <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 172 172"
                                        style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#020c5e"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM93.16667,121.83333h-14.33333v-43h14.33333zM93.16667,64.5h-14.33333v-14.33333h14.33333z" /></g></g></svg>Saiba mais</span>
                         </div>
                        </div>
                        <div className='box'>
                         <img src='/icons8-radio-tower-48.png'/>
                         <div className="information">
                             <h2>Simuladores de Sistemas de Telecomunicações</h2>
                             <p>Tem como finalidade desenvolver uma ferramenta de simulação computacional para apoio didático ao ensino.</p>
                             <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 172 172"
                                        style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#020c5e"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM93.16667,121.83333h-14.33333v-43h14.33333zM93.16667,64.5h-14.33333v-14.33333h14.33333z" /></g></g></svg>Saiba mais</span>
                         </div>
                        </div>
                       <div className='box box-four'>
                           <img src='/icons8-physics-48.png'/>
                           <div className="information">
                            <h2>Comunicações Quânticas</h2>
                            <p>Propiciar ao leitor um maior contato com as teorias das comunicações e mecânica quântica.</p>
                               <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                          width="24" height="24"
                                          viewBox="0 0 172 172"
                                          style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#020c5e"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM93.16667,121.83333h-14.33333v-43h14.33333zM93.16667,64.5h-14.33333v-14.33333h14.33333z" /></g></g></svg>Saiba mais</span>
                           </div>
                       </div>
                  </div>
                </div>
            </div>
        </div>

  )
}

export default Home
