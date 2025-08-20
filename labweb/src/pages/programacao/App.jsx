
import '../../styles/style.css';
import React from "react";
import LearnMore from "../../components/layout/LearnMoreSpan.jsx"

function Programacao() {

  return (
        <div>
        <div className="container">
            <div className='content'>
                <h1 className={"upperText"}>&lt;labweb&#47;Programação&gt;</h1>
            </div>
            <div className='wave'>
                <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
            </div>
            <div className='secondBack'>
                <div className='info'>
                    <h1>Módulos de Programação Web</h1>
                    <p>No LabWeb, você pode dar seus primeiros passos em programação de forma prática e acessível.
                        Durante os módulos de programação ministrados nas aulas a seguir, o aluno encontrará conceitos
                        sobre desenvolvimento web e as tecnologias do HTML, CSS e Javascript.</p>
                    <p>O acompanhamento do curso pode ser feito pela navegação do menu lateral. As vídeos aulas servem
                        como auxílio para o acompanhamento da apostila. É importante que cada vídeo aula seja assistida
                        com paciência clique aqui e em conjunto com a prática. As vídeos aulas não são conteúdo próprio
                        e nem excluisivo, sendo apenas referências de outro produtor.</p>
                    <button className="download-btn"><img src="/icons8-baixar-64.png"/>Baixar apostila</button>
                </div>
                <div className='projects-box'>
                    <div className='box box-one'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PH5JixVAuRs?controls=0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>

                    </div>
                    <div className='box box-two'>
                        <img src='/icons8-source-code-48.png'/>
                        <div className="information">
                            <h2>Programação Web</h2>
                            <div className="info-nav">
                                <button onClick="showModulo('1')">Módulo 1</button>
                                <button onClick="showModulo('2')">Módulo 2</button>
                                <button onClick="showModulo('3')">Módulo 3</button>
                                <button onClick="showModulo('4')">Módulo 4</button>
                                <button onClick="showModulo('5')">Módulo 5</button>
                                <button onClick="showModulo('6')">Módulo 6</button>
                                <button onClick="showModulo('7')">Módulo 7</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Programacao
