import '../../styles/style.css';
import React, {useState} from "react";
import LearnMore from "../../components/layout/LearnMoreSpan.jsx"

function Education() {
    const [selectedCourse, selectCourse] = useState("Minicurso_SEPEX_2021.pdf");
    const [courseTitle, setCourseTitle] = useState("Minicurso SEPEX 2021/2022");
    const [downloadBtnHovered, setDownloadBtnHover] = useState(false);
    const [downloadBtnImage, setDownloadBtnImage] = useState("icons8-baixar-64.png");
    const [isVideo, setIsVideo] = useState(false);
    const [part, setPart] = useState("Parte 1");

    const showMinicursoSEPEX_1 = () => {
        selectCourse("Minicurso_SEPEX_2021.pdf");
        setCourseTitle("Minicurso SEPEX 2021/2022");
        setIsVideo(false);
    };

    const showMinicursoSEPEX_2 = () => {
        selectCourse("Minicurso_SEPEX_2023.pdf");
        setCourseTitle("Minicurso SEPEX 2023/2024");
        setIsVideo(false);
    };

    const showMinicursoWECIQ_1 = () => {
        selectCourse("https://www.youtube.com/embed/m_2V7ox6u9g");
        setCourseTitle("Minicurso - Códigos Quânticos - Parte 1");
        setIsVideo(true);
        setPart("Parte 1");
    };

    const showMinicursoWECIQ_2 = () => {
        selectCourse("https://www.youtube.com/embed/53S0nEmTCTM");
        setCourseTitle("Minicurso - Internet Quântica - Parte 1");
        setIsVideo(true);
        setPart("Parte 1");
    };

    const downloadCoursePdf = () => {
        const a = document.createElement("a");
        a.download = selectedCourse;
        a.href = selectedCourse;
        a.click();
    };

    const downloadBtnHover = () => {
        if (!downloadBtnHovered) {
            setDownloadBtnImage("icons8-baixar-64-blue.png");
            setDownloadBtnHover(true);
        } else {
            setDownloadBtnImage("icons8-baixar-64.png");
            setDownloadBtnHover(false);
        }
    };

    const otherVideoPart = () => {
        if(selectedCourse === "https://www.youtube.com/embed/m_2V7ox6u9g") {
            selectCourse("https://www.youtube.com/embed/lZ9RxM1VgkE");
            setCourseTitle("Minicurso - Códigos Quânticos - Parte 2");
            setPart("Parte 2");
        }
        else if(selectedCourse === "https://www.youtube.com/embed/53S0nEmTCTM") {
            selectCourse("https://www.youtube.com/embed/0S-pRb9_ZAM");
            setCourseTitle("Minicurso - Internet Quântica - Parte 2");
            setPart("Parte 2");
        }
        else if(selectedCourse === "https://www.youtube.com/embed/lZ9RxM1VgkE"){
            selectCourse("https://www.youtube.com/embed/m_2V7ox6u9g");
            setCourseTitle("Minicurso - Códigos Quânticos - Parte 1");
            setPart("Parte 1");
        }
        else{
            selectCourse("https://www.youtube.com/embed/53S0nEmTCTM");
            setCourseTitle("Minicurso - Internet Quântica - Parte 1");
            setPart("Parte 1");
        }
    }

    return (
        <div>
            <div className="container">
                <div className='content'>
                    <h1 className={"upperText"}>&lt;labweb&#47;Formação&gt;</h1>
                </div>
                <div className='wave'>
                    <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
                </div>
                <div className='secondBack'>
                    <div className='info'>
                        <h1>Módulos de Programação Web</h1>
                        <p>No LabWeb, você pode dar seus primeiros passos em programação de forma prática e acessível.
                            Durante os módulos de programação ministrados nas aulas a seguir, o aluno encontrará
                            conceitos
                            sobre desenvolvimento web e as tecnologias do HTML, CSS e Javascript.</p>
                        <p>O acompanhamento do curso pode ser feito pela navegação do menu lateral. As vídeos aulas
                            servem
                            como auxílio para o acompanhamento da apostila. É importante que cada vídeo aula seja
                            assistida
                            com paciência clique aqui e em conjunto com a prática. As vídeos aulas não são conteúdo
                            próprio
                            e nem excluisivo, sendo apenas referências de outro produtor.</p>

                    </div>
                    <div className='projects-box'>
                        <div className='box box-miniCourse'>
                            <div hidden={isVideo} className="information">
                                <h2>{courseTitle}</h2>
                                <iframe width="600" height="400" src={selectedCourse}>Carregando…</iframe>
                                <LearnMore/>
                            </div>
                            <div hidden={!isVideo} className="information">
                                <h2>{courseTitle}</h2>
                                <iframe hidden={!isVideo} width="720" height="405" src={selectedCourse}
                                        title="Minicurso - Internet Quântica - parte 1" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen></iframe>
                                <LearnMore/>
                            </div>

                        </div>
                        <div hidden={isVideo}>
                            <button className="download-btn" onClick={downloadCoursePdf} onMouseEnter={downloadBtnHover}
                                    onMouseLeave={downloadBtnHover}><img src={downloadBtnImage}/>Baixar PDF
                            </button>
                        </div>
                        <div hidden={!isVideo}>
                            <button className="download-btn" onClick={otherVideoPart} onMouseEnter={downloadBtnHover}
                                    onMouseLeave={downloadBtnHover}>{part}
                            </button>
                        </div>

                        <div className='box box-courseSelection'>
                            <img src='/icons8-source-code-48.png'/>
                            <div className="information">
                                <h2>Trilhas formativas</h2>
                                <h3>Minicursos WECIQ 2024</h3>
                                <div className="info-nav">
                                    <button onClick={showMinicursoWECIQ_1}>Minicurso de Códigos Quânticos</button>
                                    <button onClick={showMinicursoWECIQ_2}>Minicurso de Internet Quântica</button>
                                </div>
                                <h3>Minicursos SEPEX</h3>
                                <div className="info-nav">
                                    <button onClick={showMinicursoSEPEX_1}>Minicurso 2021/2022</button>
                                    <button onClick={showMinicursoSEPEX_2}>Minicurso 2023/2024</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Education
