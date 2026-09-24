import type { IFigure } from './types';

// Squares are ordered from a8 to h8, then a7 to h7, down to a1 to h1.
const initialPosition: (IFigure | null)[] = [
  // Rank 8
  { color: 'black', type: 'rook' },
  { color: 'black', type: 'knight' },
  { color: 'black', type: 'bishop' },
  { color: 'black', type: 'queen' },
  { color: 'black', type: 'king' },
  { color: 'black', type: 'bishop' },
  { color: 'black', type: 'knight' },
  { color: 'black', type: 'rook' },
  // Rank 7
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'pawn' },
  // Rank 6
  null, null, null, null, null, null, null, null,
  // Rank 5
  null, null, null, null, null, null, null, null,
  // Rank 4
  null, null, null, null, null, null, null, null,
  // Rank 3
  null, null, null, null, null, null, null, null,
  // Rank 2
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'pawn' },
  // Rank 1
  { color: 'white', type: 'rook' },
  { color: 'white', type: 'knight' },
  { color: 'white', type: 'bishop' },
  { color: 'white', type: 'queen' },
  { color: 'white', type: 'king' },
  { color: 'white', type: 'bishop' },
  { color: 'white', type: 'knight' },
  { color: 'white', type: 'rook' },
];

export default initialPosition;
