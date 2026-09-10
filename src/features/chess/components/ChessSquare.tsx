interface ChessSquareProps {
  isLight: boolean;
  file: string;
  rank: number;
}

const ChessSquare = ({ isLight, file, rank }: ChessSquareProps) => {
  return (
    <div>
      {isLight ? 'light' : 'dark'}-{file}
      {rank}
    </div>
  );
};

export default ChessSquare;
