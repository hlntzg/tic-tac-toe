import { useState } from 'react';

function Square() { 
  // use props to pass the value each square should have 
  // from the parent component (Board) to its child (Square).
  const [value, setValue] = useState(null);
  
  function handleClick() {
    //alert('You clicked!');
    console.log('clicked!');
    setValue('X');
  }
  // return <button className="square">{value}</button>;
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
//  return <button className="square">🍑</button>;
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
