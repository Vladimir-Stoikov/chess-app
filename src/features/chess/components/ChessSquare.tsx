import styled from 'styled-components';
import type { ChessSquareProps, ChessSquareStProps } from '../types';

const ChessSquareSt = styled.div<ChessSquareStProps>`
  background: ${props => (props.$isLight ? 'white' : 'black')};
  color: ${props => (props.$isLight ? 'black' : 'white')};
  box-shadow: ${props => (props.$isSelected ? 'inset 0 0 12px 4px rgba(50, 206, 97, 0.8)' : props.$isAvailable ? 'inset 0 0 12px 4px rgba(71, 106, 201, 0.8)' : 'none')};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 4px;
  font-size: 12px;
`;

const ChessSquare = ({ isLight, isSelected, isAvailable, file, rank, children, onClick }: ChessSquareProps) => {
  return (
    <ChessSquareSt $isLight={isLight} $isSelected={isSelected} $isAvailable={isAvailable} onClick={onClick}>
      {rank === 1 && file}
      {file === 'a' && rank}
      {children}
    </ChessSquareSt>
  );
};

export default ChessSquare;
