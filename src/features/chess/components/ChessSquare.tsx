interface ChessSquareProps {
  isLight: boolean;
}

const ChessSquare = ({ isLight }: ChessSquareProps) => {
  return <div>{isLight ? 'light' : 'dark'}</div>;
};

export default ChessSquare;
