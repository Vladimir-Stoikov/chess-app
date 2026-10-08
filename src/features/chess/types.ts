import type { ReactNode } from 'react';

export type FigureType = 'bishop' | 'king' | 'queen' | 'knight' | 'rook' | 'pawn';



export type turnType = 'white' | 'black' | null;

export interface IFigure {
  color: 'white' | 'black';
  type: FigureType;
}

export interface IFigurePlace {
  color: 'white' | 'black';
  currentRank: number;
}

export interface ChessSquareProps {
  isLight: boolean;
  isSelected: boolean;
  isAvailable: boolean;
  file: string;
  rank: number;
  onClick: () => void;
  children?: ReactNode;
}

export interface ChessSquareStProps {
  $isLight: boolean;
  $isSelected: boolean;
  $isAvailable: boolean;
}
