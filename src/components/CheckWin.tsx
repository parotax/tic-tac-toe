interface Props {
  board: number[][];
}

const checkWin = (props: Props) => {
  let status = [];
  for (let i = 0; i < 3; i++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < 3; j++) {
      if (props.board[i][j] === 1) x++;
      else if (props.board[i][j] === 2) x--;
      if (props.board[j][i] === 1) y++;
      else if (props.board[j][i] === 2) y--;
    }
    if (x === 3) status.push("Player");
    if (y === 3) status.push("Player");
    if (x === -3) status.push("Computer");
    if (y === -3) status.push("Computer");
  }
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < 3; i++) {
    if (props.board[i][i] === 1) diagonal1++;
    else if (props.board[i][i] === 2) diagonal1--;
    if (props.board[2 - i][i] === 1) diagonal2++;
    else if (props.board[2 - i][i] === 2) diagonal2--;
  }
  if (diagonal1 === 3) status.push("Player");
  if (diagonal2 === 3) status.push("Player");
  if (diagonal1 === -3) status.push("Computer");
  if (diagonal2 === -3) status.push("Computer");

  let tie = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (props.board[i][j] === 0) tie = false;
    }
  }
  if (tie) status.push("Tie");

  if (status.includes("Player")) return "Player";
  if (status.includes("Tie")) return "Tie";
  if (status.includes("Computer")) return "Computer";

  return false;
};

export default checkWin;
