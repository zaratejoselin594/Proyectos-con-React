import '../estilos/Tarea.css'
import { IoTrashOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
        <div  className='iconos'>
        <IoTrashOutline className='tarea-icono' onClick={() => eliminarTarea(id)} />
        <IoPencilOutline className='tarea-icono' />
        </div>      
    </div>
  );
}

export default Tarea;