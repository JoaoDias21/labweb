
import '../../styles/style.css';
import React from "react";

function Quantica() {

  return (
        <div>
        <div className="container">
            <div className='content'>
                <h1 className={"upperText"}>&lt;labweb&#47;Quântica&gt;</h1>
            </div>
            <div className='wave'>
                <img id='wave' draggable='false' src='../../../public/wave.svg' alt={'Wave'}/>
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
                <div className='projects-box'>
                    <div className='box1'>
                        <img src='../public/icons8-recycle-48.png'/>
                        <h2>O que é o bit quântico?</h2>
                        <p>O funcionamento dos computadores atuais é baseado em um sistema binário de 0 e 1. Com uma sequência deles (chamados bits), a máquina tem
                        a capacidade de realizar as mais diversas operações, das simples para as mais complexas. Como o próprio nome diz, o sistema é binário: O bit hora é
                        0, hora ele é 1. Não há meio termo.</p>
                        <p> O bit quântico, ou qubit, utiliza-se da teoria quântica para o seu modo de funcionamento. Um qubit, antes de ser medido, pode assumir valores 0 e 1, mas também ele pode estar em uma
                            superposição de valores 0 e 1. Em outras palavras, ele encontra-se no estado 0 e no estado 1 ao mesmo tempo.</p>
                        <p> Pense no qubit como uma moeda girando no escuro, aonde queremos encontrar "cara" ou "coroa", e a ferramenta utilizada para definirmos seu estado é a nossa mão, fazendo-a parar.
                            Aqui vale ressaltar que um qubit, após ser medido, assumirá os mesmos valores que o bit clássico (ou 0 ou 1), mas, antes de colapsar em um destes resultados, estará em uma superposição
                            de estados 0 e 1, onde a propabilidade do resultado ser um ou outro depende da posição da moeda no espaço.</p>
                        <p> Conside a seguinte notação abaixo:</p>
                        <p> q = a|0> + b|1></p>
                        <p>Onde a e b seriam, de maneira grosseira, as probabilidades do qubit colapsar nos valores 0 e 1, respectivamente.</p>
                    </div>
                    <div className='box2'>
                        <img src='../public/icons8-source-code-48.png'/>
                        <h2>Quais as vantagens de tecnologias que utilizam de qubits?</h2>
                        <p> Tomemos como exemplo, a criptografia de segurança de um banco, onde para "abrirmos" este
                            cadeado, precisamos decompor um certo número N em seus fatores primos. Por exemplo, o número
                            15, nós
                            sabemos que ele pode ser fatorado em números primos como 15 = 3 x 5. Fácil, não? Porém,
                            imagine um número aleatório 23487611208876832831780438. Um computador clássico resolveria
                            esse problema por tentativa
                            e erro, algo que levaria anos para solucionar.</p>
                        <p>A física quântica, junto dos qubits, vem para solucionar isso. A superposição de estados dos
                            qubits aumentaria a eficiência da descriptografia do código exponencialmente,
                            resolvendo o problema em questão em minutos. Tais computadores ainda são mais teóricos do
                            que práticos, mas existem diversos algoritmos feitos no modelo clássico que simulam o
                            ambiente quântico, e vem ao longo
                            dos tempos reproduzindo resultados satisfatórios. Como já mencionamos na nossa introdução,
                            nosso objetivo é apresentar tais algoritmos e mergulharmos a sociedade no novo tipo de
                            tecnologia que está por vir.</p>
                        <h2>Comparação bit clássico com qubit</h2>
                        <img src="../../../public/bitqubit.png"/>
                    </div>
                    <div className='box3'>
                        <img src='../public/icons8-radio-tower-48.png'/>
                        <h2>Minicurso SEPEX 2021</h2>
                        <iframe src="Minicurso_SEPEX_2021.pdf">Carregando…</iframe>

                    </div>
                    <div className='box4'>
                        <img src='../public/icons8-physics-48.png'/>
                        <h2>Equipe do Projeto</h2>
                        <p>Este projeto está em desenvolvimento no CEFET-RJ, com participação dos alunos: Antônio Víctor Basilio (Bolsista PIBIC-2020), Daniel Coutinho (Bolsista PIBIC-2021)
                            José Victor (Bolsista Jovens Talentos-2021), José Antônio (Doutorando - PPGIO) e orientado pelos professores João Dias (Cefet_Maracanã), Demerson Nunes (Cefet_Petrópolis) e Edinelço Dalcumune (UFVJM).</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Quantica
