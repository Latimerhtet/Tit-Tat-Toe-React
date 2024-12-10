import Square from "./Square";
import { useState } from "react";
import { calculateWinner } from "./util";
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(false);
  const handleClick = (i: number) => {
    const nextSquares = squares.slice();
    if (squares[i] && calculateWinner(squares)) {
      return;
    }
    if (xIsNext && nextSquares[i] === null) {
      nextSquares[i] = "X";
    } else if (!xIsNext && nextSquares[i] === null) {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <p className="mb-3">{status}</p>
      <div className="  grid grid-rows-3 gap-0">
        <div className="w-full grid grid-cols-3 gap-0 h-12">
          <Square val={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square val={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square val={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="w-full grid grid-cols-3 gap-0 h-12">
          <Square val={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square val={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square val={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="w-full grid grid-cols-3 gap-0 h-12">
          <Square val={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square val={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square val={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};

export default Board;
