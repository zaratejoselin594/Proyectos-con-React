import React from 'react';
import "../css/Testimonio.css"

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="img-testimonio" src={require(`../img/${props.imagen}.png`)} alt="Img Shawn" />
      <div className="contenedor-txt-testimonio">
        <p className="nombre-testimonio">
          <b>{props.nombre}</b> en {props.pais}
        </p>
        <p className="profecion-testimonio">
          {props.profecion} en <b>{props.empreza}</b>
        </p>
        <p className="texto-testimonio">"{props.textoTestimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;