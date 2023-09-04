import '../estilos/Tarea.css'
import { IoTrashOutline } from "react-icons/io5";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
        <div onClick={() => eliminarTarea(id)}>
          <IoTrashOutline  className='tarea-icono'/>
        </div>
    </div>
  );
}

export default Tarea;