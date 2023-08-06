import './App.css';
import Contador from './componentes/Contador.jsx'
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
      <div className="contenedor-principal">
        <Contador numClicks/>
        <Boton texto="Click" esBtnClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBtnClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
