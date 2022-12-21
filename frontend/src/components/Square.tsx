interface Props {
  board: number[][];
  tile: number;
  handleTurn: (tile: number) => void;
}

const Square = (props: Props) => {
  const x = Math.floor(props.tile / 3);
  const y = props.tile % 3;

  return (
    <div className="square" onClick={() => props.handleTurn(props.tile)}>
      <h1>
        {props.board[x][y] === 0 ? "" : props.board[x][y] === 1 ? "X" : "Y"}
      </h1>
    </div>
  );
};

export default Square;
