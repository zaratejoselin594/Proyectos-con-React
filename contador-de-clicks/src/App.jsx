import './App.css';
import freeCodeCamp from './img/freecodecamp-logo.png'
import Boton from './componentes/Boton.jsx'

function App() {

  const manejarClick = () => {
    console.log("click")
  }
  const reiniciarContador = () => {
    console.log("reiniciar")
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={freeCodeCamp} alt="Logo de freecodecamp" className="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Boton texto="Click" esBtnClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBtnClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
