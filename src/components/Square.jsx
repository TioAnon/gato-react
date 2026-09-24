export default function Square({ value, onSquareClick, esGanadora }) {
  return (
    <button 
      className={`square ${esGanadora ? "ganadora" : ""}`} 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}