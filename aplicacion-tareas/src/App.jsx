import './App.css';
import ListaTarea from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="App">
      <div className="app-tareas">
        <div className="tareas-listas-principal">
          <h1>Domingo</h1>
          <ListaTarea />
        </div>
      </div>  
    </div>
  );
}

export default App;
