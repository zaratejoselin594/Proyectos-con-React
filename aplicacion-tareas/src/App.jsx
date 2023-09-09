import './App.css';
import ListaTarea from './componentes/ListaDeTareas'
import Reloj from './componentes/Reloj';
import './estilos/wave.css'

function App() {
  return (
    <div className="App">
      <div className="app-tareas">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
          <path fill="#111" d="M0,128L34.3,154.7C68.6,181,137,235,206,224C274.3,213,343,139,411,144C480,149,549,235,617,261.3C685.7,288,754,256,823,229.3C891.4,203,960,181,1029,149.3C1097.1,117,1166,75,1234,58.7C1302.9,43,1371,53,1406,58.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
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
