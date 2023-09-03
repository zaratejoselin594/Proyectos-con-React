import '../estilos/Form.css'

function TareaFormulario(props) {
  return (
    <form className="tarea-form">
      <input type="text" className="tarea-input" placeholder="Escribe tu tarea" name="texto" />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export default TareaFormulario