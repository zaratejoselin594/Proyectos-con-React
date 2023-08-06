import './App.css';
import Contador from './componentes/Contador.jsx'
import Boton from './componentes/Boton.jsx'
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador numClicks={ numClicks } />
        <Boton texto="Click" esBtnClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBtnClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
