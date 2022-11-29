import { useState } from "react";
import "../styles.css";

const Game = () => {
  const [turn, setTurn] = useState("Player");
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const playerTurn = async (tile: number) => {
    if (turn !== "Player") return;

    const x = Math.floor(tile / 3);
    const y = tile % 3;
    console.log(x, y);
    if (board[x][y] === 0) {
      board[x][y] = 1;
    } else {
      alert("That tile is already taken!");
      return;
    }
    setTurn("Computer");
  };

  const computerTurn = () => {
    if (board[2][2] === 0) {
      board[2][2] = 2;
    }
    setTurn("Player");
  };

  const handleClick = async (tile: number) => {
    playerTurn(tile);
    computerTurn();
  };

  return (
    <>
      <h2>{turn === "Player" ? "Player's turn" : "Computer's turn"}</h2>
      <button onClick={() => setTurn("Player")}>start</button>
      <button onClick={() => console.log(board)}>board</button>
      <div className="board">
        <div className="square" onClick={() => handleClick(0)}></div>
        <div className="square" onClick={() => handleClick(1)}></div>
        <div className="square" onClick={() => handleClick(2)}></div>
        <div className="square" onClick={() => handleClick(3)}></div>
        <div className="square" onClick={() => handleClick(4)}></div>
        <div className="square" onClick={() => handleClick(5)}></div>
        <div className="square" onClick={() => handleClick(6)}></div>
        <div className="square" onClick={() => handleClick(7)}></div>
        <div className="square" onClick={() => handleClick(8)}></div>
      </div>
    </>
  );
};

export default Game;
