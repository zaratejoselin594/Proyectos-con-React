import '../estilos/ListaDeTareas.css'
import TareaFrom from './Tarea-formulario'
import React, { useState } from 'react'
import Tarea from './Tarea'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    }
  }

  return (
    <>
      <TareaFrom onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}
export default ListaDeTareas;