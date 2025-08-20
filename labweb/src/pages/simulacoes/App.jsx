
import '../../styles/style.css';
import React from "react";

function Recicla() {

  return (
        <div>
        <div className="container">
            <div className='content'>
                <h1 className={"upperText"}>&lt;labweb&#47;Simulações&gt;</h1>
            </div>
            <div className='wave'>
                <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
            </div>
            <div className='secondBack'>
                <div className='info'>
                    <h1>Bem vindo a área de reciclagem de materiais eletrônicos do projeto LabWeb.</h1>
                    <iframe width="820" height="450" src="https://www.youtube.com/embed/9SPGVqKB-8w"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""></iframe>
                </div>
                <div className='projects-box'>
                    <div className='box1'>
                        <img src='/icons8-recycle-48.png'/>
                        <h2>Qual a finalidade dessa área?</h2>
                        <p>A nossa finalidade é desenvolver o processo de reutilização dos componentes de equipamentos eletrônicos sem utilidade, para assim incentivar a reciclagem e a redução de resíduos descartados no meio ambiente. Através da montagem e desmontagem de aparelhos eletrônicos, podemos realizar a separação de componentes dos equipamentos e assim revendê-los. Os objetivos do projeto são reduzir a produção de lixo eletrônico, movimentar uma pequena renda às pessoas que desconhecem o benefício da reciclagem, além de estimular o uso de tecnologias de informação e comunicação como recurso em processos educacionais.</p>
                    </div>
                    <div className='box2'>
                        <img src='/icons8-source-code-48.png'/>
                        <h2>Vídeos</h2>
                        <iframe width="300" height="192" src="https://www.youtube.com/embed/nm7tw-UfPow"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                        <iframe width="300" height="192" src="https://www.youtube.com/embed/KMecSe4q2o0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                        <iframe width="300" height="192" src="https://www.youtube.com/embed/zmQXb1-soRY"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                        <iframe width="300" height="192" src="https://www.youtube.com/embed/PwUgua_7sqo"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                    </div>
                    <div className='box3'>
                        <img src='/icons8-radio-tower-48.png'/>
                        <h2>Apostila 2019</h2>
                        <iframe src="/Apostila_2019.pdf">Carregando…</iframe>

                    </div>
                    <div className='box4'>
                        <img src='/icons8-physics-48.png'/>
                        <h2>Equipe do Projeto</h2>
                        <p>O projeto foi desenvolvido pelos alunos: Luis Henrique Gomes de Pinho, Luiz Felipe da Rocha Mello, Marcos Felipe Santiago de Souza, Michelly Mairink e Victor Hugo Valtriz Azevedo de Alcantara. Sendo orientado pelos professores: João Dias, Myrna Cunha e Alexandre Martínez.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Recicla
