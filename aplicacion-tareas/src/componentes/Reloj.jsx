import React, { useState, useEffect } from 'react';

const Reloj = () => {
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);
  const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
  const hora = fecha.getHours();
  const minuto = fecha.getMinutes();
  return (
    <div className="date">
      <h1 className='dia'>{nombreDia}</h1>
      <h2 className='hora'>{hora}:{minuto}</h2>
    </div>
  );
};

export default Reloj;