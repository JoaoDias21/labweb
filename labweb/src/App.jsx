
import './styles/style.css';
import Navbar from "./components/layout/Navbar.jsx";

function App() {

  return (
        <div>
            <div className='nav-div'>
                <Navbar />
            </div>

        <div className="container">

            <h1 className={"upperText"}>&lt;labweb&#47;&gt;</h1>
            <div className='wave'>
                <img id='wave' draggable='false' src='../public/wave.svg' alt={'Wave'}/>
            </div>
            <div className='secondBack'>
            </div>
        </div>
        </div>

  )
}

export default App
