function Square({ value }) { 
  // use props to pass the value each square should have 
  // from the parent component (Board) to its child (Square).
  return <button className="square">{value}</button>;
}

export default function Board() {
//  return <button className="square">🍑</button>;
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value=""/>
        <Square value=""/>
        <Square value=""/>
      </div>
      <div className="board-row">
        <button className="square">🍑</button>
        <button className="square">🍑</button>
        <button className="square">🍑</button>
      </div>
    </>
  );
}
