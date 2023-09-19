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
  };
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas)
  };
  let numTareas;
  const completarTarea = id => {  
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      console.log(numTareas)
      return tarea;
    })
    setTareas(tareasActualizadas)
  };

  return (
    <>
      <p className='p-tarea'> Mis tareas { tareas.length } </p>
      <TareaFrom onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}
export default ListaDeTareas;