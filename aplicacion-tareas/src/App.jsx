import './App.css';
import ListaTarea from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="App">
      <div className="app-tareas">
        <div className="tareas-listas-principal">
          <div className="date">
            <h1>Lunes</h1>
            <p>00:00</p>
          </div>
          <ListaTarea />
        </div>
      </div>  
    </div>
  );
}
// agregar cuantas tareas en total hay
export default App;
