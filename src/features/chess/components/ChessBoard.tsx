import styled from 'styled-components';
import ChessSquare from './ChessSquare';
import Figure from './Figure';
import initialPosition from '../initialPosition';
import { useState } from 'react';
import type { IFigure, turnType } from '../types';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, minmax(0, 1fr));
  width: 500px;
  aspect-ratio: 1;
`;

export default function ChessBoard() {
  const [position, setPosition] = useState<(IFigure | null)[]>(initialPosition);
  const [selectedFigure, setSelectedFigure] = useState<number | null>(null);
  const [currentTurn, setCurrentTurn] = useState<turnType>('white');

  const squares = Array.from({ length: 64 });
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  function handleClick(index: number) {
    console.log(index, position[index], selectedFigure);
    if (selectedFigure === null && position[index]?.color !== currentTurn) {
      return;
    }

    if (selectedFigure !== null && position[index]?.color !== currentTurn) {
      const newPosition = [...position];
      newPosition[index] = position[selectedFigure];
      newPosition[selectedFigure] = null;
      setPosition(newPosition);
      setSelectedFigure(null);
      setCurrentTurn(prev => (prev === 'white' ? 'black' : 'white'));
      return;
    }

    const figure = position[index];

    if (!figure || selectedFigure === index) {
      setSelectedFigure(null);
      return;
    }

    setSelectedFigure(index);
  }

  return (
    <>
      <h3>{currentTurn} turn</h3>
      <Board>
        {squares.map((_, index) => {
          const row = Math.floor(index / 8);
          const column = index % 8;
          const isLight = (row + column) % 2 === 0;
          const file = files[column];
          const rank = 8 - row;
          const figure = position[index];

          return (
            <ChessSquare key={index} isLight={isLight} isSelected={index === selectedFigure} rank={rank} file={file} onClick={() => handleClick(index)}>
              {figure && <Figure color={figure.color} type={figure.type} />}
            </ChessSquare>
          );
        })}
      </Board>
    </>
  );
}
