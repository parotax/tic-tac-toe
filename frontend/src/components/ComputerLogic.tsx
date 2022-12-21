interface Props {
  board: number[][];
}

const ComputerLogic = (props: Props) => {
  let loseRow = null;
  let loseCol = null;
  let winRow = null;
  let winCol = null;

  for (let i = 0; i < 3; i++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < 3; j++) {
      if (props.board[i][j] === 1) x++;
      else if (props.board[i][j] === 2) x--;
      if (props.board[j][i] === 1) y++;
      else if (props.board[j][i] === 2) y--;
    }
    if (x === -2) {
      winRow = i;
      break;
    }
    if (y === -2) {
      winCol = i;
      break;
    }
    if (x === 2) {
      loseRow = i;
      break;
    }
    if (y === 2) {
      loseCol = i;
      break;
    }
  }

  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < 3; i++) {
    if (props.board[i][i] === 1) diagonal1++;
    else if (props.board[i][i] === 2) diagonal1--;
    if (props.board[2 - i][i] === 1) diagonal2++;
    else if (props.board[2 - i][i] === 2) diagonal2--;
  }

  if (winRow !== null) {
    for (let i = 0; i < 3; i++) {
      if (props.board[winRow][i] === 0) {
        props.board[winRow][i] = 2;
        return props.board;
      }
    }
  }

  if (winCol !== null) {
    for (let i = 0; i < 3; i++) {
      if (props.board[i][winCol] === 0) {
        props.board[i][winCol] = 2;
        return props.board;
      }
    }
  }

  if (diagonal1 === -2 || diagonal2 === -2) {
    for (let i = 0; i < 3; i++) {
      if (props.board[i][i] === 0 && diagonal1 === -2) {
        props.board[i][i] = 2;
        return props.board;
      }
      if (props.board[2 - i][i] === 0 && diagonal2 === -2) {
        props.board[2 - i][i] = 2;
        return props.board;
      }
    }
  }

  if (diagonal1 === 2 || diagonal2 === 2) {
    for (let i = 0; i < 3; i++) {
      if (props.board[i][i] === 0 && diagonal1 === 2) {
        props.board[i][i] = 2;
        return props.board;
      }
      if (props.board[2 - i][i] === 0 && diagonal2 === 2) {
        props.board[2 - i][i] = 2;
        return props.board;
      }
    }
  }

  if (loseRow !== null) {
    for (let i = 0; i < 3; i++) {
      if (props.board[loseRow][i] === 0) {
        props.board[loseRow][i] = 2;
        return props.board;
      }
    }
  }

  if (loseCol !== null) {
    for (let i = 0; i < 3; i++) {
      if (props.board[i][loseCol] === 0) {
        props.board[i][loseCol] = 2;
        return props.board;
      }
    }
  }

  if (props.board[1][1] === 0) {
    props.board[1][1] = 2;
    return props.board;
  }

  let x = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (props.board[i][j] === 0) x.push([i, j]);
    }
  }
  const random = Math.floor(Math.random() * x.length);
  props.board[x[random][0]][x[random][1]] = 2;

  return props.board;
};

export default ComputerLogic;
