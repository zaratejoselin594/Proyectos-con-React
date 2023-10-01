import '../estilos/Tarea.css'
import { IoTrashOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  const fecha = new Date();
  const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
  const hora = fecha.getHours();
  const minuto = fecha.getMinutes();
  
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>

      <div className="tarea-texto" onClick={() => completarTarea(id)}> 
        {texto}
      </div>
      <div>
        <div  className='iconos'>
          <IoTrashOutline className='tarea-icono' onClick={() => eliminarTarea(id)} />
          <IoPencilOutline className='tarea-icono' />
        </div>
        <div className="cont-date" >
          <h1 className="nombre-dia" >{nombreDia}</h1>
          <h2 className="hora" >{hora}:{minuto}</h2>
        </div>
      </div> 
      
    </div>
  );
}

export default Tarea;