import '../estilos/ListaDeTareas.css'
import TareaFrom from './Tarea-formulario'
import React, { useState } from 'react'
import Tarea from './Tarea'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);
  const agregarTarea = tarea => {
    console.lof("tarea agregada")
    console.log(tarea)
  }

  return (
    <>
      <TareaFrom />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea texto={tarea.texto} completada={tarea.completada} />
          )
        }
      </div>
    </>
  );
}
export default ListaDeTareas;