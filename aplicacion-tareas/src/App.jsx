import './App.css';
import ListaTarea from './componentes/ListaDeTareas'
import Reloj from './componentes/Reloj';

function App() {
  return (
    <div className="App">
      <div className="app-tareas">
        <div className="tareas-listas-principal">
          <Reloj />      
          <ListaTarea />
        </div>
      </div>  
    </div>
  );
}
// agregar cuantas tareas en total hay
export default App;
