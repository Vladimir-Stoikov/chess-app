import styled from 'styled-components';
import ChessSquare from './ChessSquare';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 480px;
  aspect-ratio: 1;
`;

const ChessBoard = () => {
  const squares = Array.from({ length: 64 });
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  return (
    <Board>
      {squares.map((_, index) => {
        const row = Math.floor(index / 8);
        const column = index % 8;
        const isLight = (row + column) % 2 === 0;
        const file = files[column];
        const rank = 8 - row;

        return <ChessSquare key={index} isLight={isLight} rank={rank} file={file} />;
      })}
    </Board>
  );
};

export default ChessBoard;
