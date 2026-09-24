import styled from 'styled-components';
import type { ChessSquareProps, ChessSquareStProps } from '../types';

const ChessSquareSt = styled.div<ChessSquareStProps>`
  background: ${props => (props.$isLight ? 'white' : 'black')};
  color: ${props => (props.$isLight ? 'black' : 'white')};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 4px;
  font-size: 12px;
`;

const ChessSquare = ({ isLight, file, rank, children }: ChessSquareProps) => {
  return (
    <ChessSquareSt $isLight={isLight}>
      {rank === 1 && file}
      {file === 'a' && rank}
      {children}
    </ChessSquareSt>
  );
};

export default ChessSquare;
