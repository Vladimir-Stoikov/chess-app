import styled from 'styled-components';
import type { ReactNode } from 'react';

interface ChessSquareProps {
  isLight: boolean;
  file: string;
  rank: number;
  children?: ReactNode;
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
