import styled from 'styled-components';

interface ChessSquareProps {
  isLight: boolean;
  file: string;
  rank: number;
}

const ChessSquareSt = styled.div<{ $isLight: boolean }>`
  background: ${props => (props.$isLight ? 'white' : 'black')};
  color: ${props => (props.$isLight ? 'black' : 'white')};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 4px;
  font-size: 12px;
`;

const ChessSquare = ({ isLight, file, rank }: ChessSquareProps) => {
  return (
    <ChessSquareSt $isLight={isLight}>
      {rank === 1 && file}
      {file === 'a' && rank}
    </ChessSquareSt>
  );
};

export default ChessSquare;
