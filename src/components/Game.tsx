import { useState } from "react";
import "../styles.css";

const useForceUpdate = () => {
  const [value, setValue] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars
  return () => setValue((value) => value + 1);
};

const Game = () => {
  const [turn, setTurn] = useState("Player");
  const forceUpdate = useForceUpdate();
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const playerTurn = (tile: number) => {
    if (turn !== "Player") return;

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
    setTurn("Computer");
    return true;
  };

  const computerTurn = () => {
    let loseRow = null;
    let loseCol = null;

    for (let i = 0; i < 3; i++) {
      let x = 0;
      let y = 0;
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 1) x++;
        else if (board[i][j] === 2) x--;
        if (board[j][i] === 1) y++;
        else if (board[j][i] === 2) y--;
      }
      if (x >= 2) {
        loseRow = i;
        break;
      }
      if (y >= 2) {
        loseCol = i;
        break;
      }
    }

    setTurn("Player");
    if (loseRow !== null || loseCol !== null) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0 && loseRow === i) {
            const newBoard = board;
            newBoard[i][j] = 2;
            setBoard(newBoard);
            return;
          }
          if (board[j][i] === 0 && loseCol === i) {
            board[j][i] = 2;
            return;
          }
        }
      }
    }
  };

  const handleClick = (tile: number) => {
    if (!playerTurn(tile)) return;
    computerTurn();
    forceUpdate();
  };

  return (
    <>
      <h2>{turn === "Player" ? "Player's turn" : "Computer's turn"}</h2>
      <button onClick={() => setTurn("Player")}>start</button>
      <button onClick={() => console.log(board)}>board</button>
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
