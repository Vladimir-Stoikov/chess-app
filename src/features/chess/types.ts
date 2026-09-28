import type { ReactNode } from 'react';

export type FigureType = 'bishop' | 'king' | 'queen' | 'knight' | 'rook' | 'pawn';

export interface IFigure {
  color: 'white' | 'black';
  type: FigureType;
}

export interface ChessSquareProps {
  isLight: boolean;
  file: string;
  rank: number;
  onClick: () => void;
  children?: ReactNode;
}

export interface ChessSquareStProps {
  $isLight: boolean;
}
