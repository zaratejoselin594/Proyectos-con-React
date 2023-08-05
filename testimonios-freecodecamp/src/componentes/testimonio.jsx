import React from "react"

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="img-testimonio" src={require("../img/uno.png")} alt="Img Shawn" />
      <div className="contenedor-txt-testimonio">
        <p className="nombre-testimonio">Shawn Wang en Singapur</p>
        <p className="profecion-testimonio">Ingeniero de software en Amazon</p>
        <p className="texto-testimonio">"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida " .</p>
      </div>
    </div>
  );
}
