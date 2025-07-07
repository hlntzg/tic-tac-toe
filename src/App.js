import { useState } from 'react';

function Square({value, onSquareClick}) { 
  // use props to pass the value each square should have 
  // from the parent component (Board) to its child (Square).
  //const [value, setValue] = useState(null);
  
  // function handleClick() {
  //   //alert('You clicked!');
  //   console.log('clicked!');
  //   setValue('X');
  // }
  // return (
  //   <button
  //     className="square"
  //     //onClick={handleClick}
  //   >
  //     {value}
  //   </button>
  // );
  return (
    <button className="square"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
//  return <button className="square">X</button>;
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  const winner = getWinner(squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every(square => square !== null)) {
    status = `No winner :(`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    if (!squares[i] && !getWinner(squares)) {
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? "X" : "O";
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/** check all the possible winning combinations 
 * (rows, columns, diagonals) and return 'X', 'O', or null if there’s no winner yet.
 */
function getWinner(squares) {
  const lines = [
    [0, 1, 2],  // top row
    [3, 4, 5],  // middle row
    [6, 7, 8],  // bottom row
    [0, 3, 6],  // left column
    [1, 4, 7],  // middle column
    [2, 5, 8],  // right column
    [0, 4, 8],  // main diagonal
    [2, 4, 6],  // anti-diagonal
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // either 'X' or 'O'
    }
  }

  return null;
}

