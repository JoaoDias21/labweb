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
                    <h1>Em construção...</h1>
                </div>
            </div>
        </div>
        </div>

  )
}

export default News
