import '../css/Boton.css';

function Boton({texto, esBtnClick, manejarClick}) {
  return (
    <button className={esBtnClick ? "boton-click" : "boton-reinizar"} onClick={manejarClick} >
      {texto}
    </button>
  );
}

export default Boton;