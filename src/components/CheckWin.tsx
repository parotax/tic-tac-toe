interface Props {
  board: number[][];
}

const checkWin = (props: Props) => {
  for (let i = 0; i < 3; i++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < 3; j++) {
      if (props.board[i][j] === 1) x++;
      else if (props.board[i][j] === 2) x--;
      if (props.board[j][i] === 1) y++;
      else if (props.board[j][i] === 2) y--;
    }
    if (x === 3) return "Player";
    if (x === -3) return "Computer";
    if (y === 3) return "Player";
    if (y === -3) return "Computer";
  }
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < 3; i++) {
    if (props.board[i][i] === 1) diagonal1++;
    else if (props.board[i][i] === 2) diagonal1--;
    if (props.board[2 - i][i] === 1) diagonal2++;
    else if (props.board[2 - i][i] === 2) diagonal2--;
  }
  if (diagonal1 === 3) return "Player";
  if (diagonal1 === -3) return "Computer";
  if (diagonal2 === 3) return "Player";
  if (diagonal2 === -3) return "Computer";

  return false;
};

export default checkWin;
