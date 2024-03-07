import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  return (
    <div className="board">
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Square({}) {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("x");
  }
  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}

export default Board;
