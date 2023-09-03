import '../estilos/Tarea.css'
import { IoTrashOutline } from "react-icons/io5";

function Tarea({texto, completada}) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-texto">
        {texto}
      </div>
        <div>
          <IoTrashOutline  className='tarea-icono'/>
        </div>
    </div>
  );
}

export default Tarea;