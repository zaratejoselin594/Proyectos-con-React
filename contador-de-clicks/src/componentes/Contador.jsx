import '../css/Contador.css'

function Contador({ numClicks }) {
  return (
    <div className="contador">
      <h1> {numClicks} </h1>
    </div>
  );
}
export default Contador;