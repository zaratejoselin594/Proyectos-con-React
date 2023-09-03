import './App.css';
import Tarea from './componentes/Tarea'
import Tarea from './componentes/Tarea-formulario'

function App() {
  return (
    <div className="App">
      <div className="app-tareas">
        <div className="tareas-listas-principal">
          <h1>Mis Tareas</h1>
          <Tarea texto="aprender react"/>
        </div>
      </div>  
    </div>
  );
}

export default App;
