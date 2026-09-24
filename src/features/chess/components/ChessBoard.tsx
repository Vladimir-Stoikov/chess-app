import styled from 'styled-components';
import ChessSquare from './ChessSquare';
import Figure from './Figure';
import initialPosition from '../initialPosition';
import { useState } from 'react';
import type { IFigure } from '../types';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 480px;
  aspect-ratio: 1;
`;

export default function ChessBoard() {
  const [position, setPosition] = useState<(IFigure | null)[]>(initialPosition);

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
        const figure = position[index];

        return (
          <ChessSquare key={index} isLight={isLight} rank={rank} file={file}>
            {figure && <Figure color={figure.color} type={figure.type} />}
          </ChessSquare>
        );
      })}
    </Board>
  );
}
