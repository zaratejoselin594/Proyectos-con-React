import '../estilos/ListaDeTareas.css'
import TareaFrom from './Tarea-formulario'
import React, {useState} from 'react'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);
  

  return (
    <>
      <TareaFrom />
      <div className="tareas-lista-contenedor">
        lkdmfa
      </div>
    </>
  );
}
export default ListaDeTareas;