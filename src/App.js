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
//  return <button className="square">🍑</button>;
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
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


/**
 * React State Handling in Board and Square Components
 * - State is handled in the parent Board component.
 * - The Board passes props (like value and onClick) to each child Square component.
 * - When a Square is clicked, it calls a function passed from the Board, asking the parent to update the game state.
 * - When the Board's state updates, React automatically re-renders:
 *   - The Board itself, and
 *   - All its Square children with updated props.
 */