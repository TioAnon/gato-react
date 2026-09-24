import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [jugadorX, setJugadorX] = useState("");
  const [jugadorO, setJugadorO] = useState("");
  const [partidaIniciada, setPartidaIniciada] = useState(false);

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [victoriasX, setVictoriasX] = useState(0);
  const [victoriasO, setVictoriasO] = useState(0);

  function iniciarPartida(e) {
    e.preventDefault();
    if (jugadorX.trim() === "" || jugadorO.trim() === "") {
      alert("Ambos jugadores deben ingresar un nombre.");
      return;
    }
    setPartidaIniciada(true);
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    const fichaActual = xIsNext ? "X" : "O";
    nextSquares[i] = fichaActual;

    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const resultado = calculateWinner(nextSquares);
    if (resultado) {
      if (resultado.ganador === "X") {
        setVictoriasX((prev) => prev + 1);
      } else if (resultado.ganador === "O") {
        setVictoriasO((prev) => prev + 1);
      }
    }
  }

  function reiniciarPartida() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const resultadoGanador = calculateWinner(squares);
  const winner = resultadoGanador ? resultadoGanador.ganador : null;
  const lineaGanadora = resultadoGanador ? resultadoGanador.linea : [];
  const esEmpate = !winner && squares.every((sq) => sq !== null);

  let status;
  if (winner) {
    const nombreGanador = winner === "X" ? jugadorX : jugadorO;
    status = `🏆 Ganador: ${nombreGanador} (${winner})`;
  } else if (esEmpate) {
    status = "Partida terminada: Empate";
  } else {
    const turnoActual = xIsNext ? `${jugadorX} (X)` : `${jugadorO} (O)`;
    status = `Turno actual: ${turnoActual}`;
  }

  return (
    <div className="tablero-contenedor">
      <h1 className="titulo-juego">🐱 Juego del Gato 🐱</h1>

      {!partidaIniciada ? (
        <form className="formulario-jugadores" onSubmit={iniciarPartida}>
          <h2>Ingreso de Jugadores</h2>
          <div className="campo-input">
            <label>Jugador 1 (Ficha X):</label>
            <input
              type="text"
              placeholder="Nombre del jugador X"
              value={jugadorX}
              onChange={(e) => setJugadorX(e.target.value)}
            />
          </div>
          <div className="campo-input">
            <label>Jugador 2 (Ficha O):</label>
            <input
              type="text"
              placeholder="Nombre del jugador O"
              value={jugadorO}
              onChange={(e) => setJugadorO(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-iniciar">
            Comenzar partida
          </button>
        </form>
      ) : (
        <>
          <div className="marcador">
            <div className={`marcador-item ${xIsNext && !winner ? "jugador-activo" : ""}`}>
              <span className="ficha">X</span>
              <span className="nombre">{jugadorX}</span>
              <span className="puntos">{victoriasX}</span>
            </div>
            <div className="marcador-vs">VS</div>
            <div className={`marcador-item ${!xIsNext && !winner ? "jugador-activo" : ""}`}>
              <span className="ficha">O</span>
              <span className="nombre">{jugadorO}</span>
              <span className="puntos">{victoriasO}</span>
            </div>
          </div>

          <div className="status">{status}</div>

          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} esGanadora={lineaGanadora.includes(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} esGanadora={lineaGanadora.includes(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} esGanadora={lineaGanadora.includes(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} esGanadora={lineaGanadora.includes(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} esGanadora={lineaGanadora.includes(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} esGanadora={lineaGanadora.includes(5)}/>
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} esGanadora={lineaGanadora.includes(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} esGanadora={lineaGanadora.includes(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} esGanadora={lineaGanadora.includes(8)}/>
          </div>

          <button className="btn-reiniciar" onClick={reiniciarPartida}>
            Nueva partida
          </button>
        </>
      )}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        ganador: squares[a],
        linea: [a, b, c]
      };
    }
  }
  return null;
}