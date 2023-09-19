

const BotonClear = (props) => (
  <div className="boton-contenedor operador" onClick={props.manejarClear} >
    {props.children}
  </div>
);
export default BotonClear;