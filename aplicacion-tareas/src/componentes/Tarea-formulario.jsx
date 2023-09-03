import '../estilos/Form.css'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
  }

  return (
    <form className="tarea-form" autoComplete='off' onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Escribe tu tarea"
        onChange={manejarCambio}
        name="texto"
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export default TareaFormulario