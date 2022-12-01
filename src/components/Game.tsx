import ComputerLogic from "./ComputerLogic";
import { useState } from "react";
import "../styles.css";

const useForceUpdate = () => {
  const [value, setValue] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars
  return () => setValue((value) => value + 1);
};

const Game = () => {
  const forceUpdate = useForceUpdate();
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const playerTurn = (tile: number) => {
    const x = Math.floor(tile / 3);
    const y = tile % 3;
    console.log(x, y);
    if (board[x][y] === 0) {
      const newBoard = board;
      newBoard[x][y] = 1;
      setBoard(newBoard);
    } else {
      alert("That tile is already taken!");
      return false;
    }
    return true;
  };

  const handleClick = (tile: number) => {
    if (!playerTurn(tile)) return;

    setBoard(ComputerLogic({ board }));
    forceUpdate();
  };

  return (
    <>
      <div className="board">
        <div className="square" onClick={() => handleClick(0)}>
          <h1>{board[0][0] === 0 ? "" : board[0][0] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(1)}>
          <h1>{board[0][1] === 0 ? "" : board[0][1] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(2)}>
          <h1>{board[0][2] === 0 ? "" : board[0][2] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(3)}>
          <h1>{board[1][0] === 0 ? "" : board[1][0] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(4)}>
          <h1>{board[1][1] === 0 ? "" : board[1][1] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(5)}>
          <h1>{board[1][2] === 0 ? "" : board[1][2] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(6)}>
          <h1>{board[2][0] === 0 ? "" : board[2][0] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(7)}>
          <h1>{board[2][1] === 0 ? "" : board[2][1] === 1 ? "X" : "Y"}</h1>
        </div>
        <div className="square" onClick={() => handleClick(8)}>
          <h1>{board[2][2] === 0 ? "" : board[2][2] === 1 ? "X" : "Y"}</h1>
        </div>
      </div>
    </>
  );
};

export default Game;
