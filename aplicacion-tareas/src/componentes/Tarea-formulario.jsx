import '../estilos/Form.css'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IoAdd } from "react-icons/io5";

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva)
  };

  return (
    <form className="tarea-form" autoComplete='off' onSubmit={manejarEnvio}>
      <div className="form">
        <input
          type="text"
          className="tarea-input"
          placeholder="Escribe tu tarea"
          onChange={manejarCambio}
          name="texto"
        />
        <button className="boton" ><IoAdd className="tarea-boton" /> </button>
      </div>
    </form>
  );
}
export default TareaFormulario;