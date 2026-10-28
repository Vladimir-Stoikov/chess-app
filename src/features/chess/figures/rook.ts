// Check rook moves

import type { IFigurePlace } from '../types';

const rook = ({ currentRank, color, position }: IFigurePlace) => {
  console.log(`I'm a ${color} rook at ${currentRank} rank`);
  let availableMoves: number[] = [];
  let validMoves: number[] = [];

  const currentRow = Math.floor(currentRank / 8);

  for (let index = 1; index < 8; index++) {
    const leftMove = currentRank - index;
    const rightMove = currentRank + index;

    const moveRowLeft = Math.floor(leftMove / 8);
    const moveLeftDiff = Math.abs(moveRowLeft - currentRow);
    if (moveLeftDiff === 0) availableMoves = [...availableMoves, leftMove];

    const moveRowRight = Math.floor(rightMove / 8);
    const moveRightDiff = Math.abs(moveRowRight - currentRow);
    if (moveRightDiff === 0) availableMoves = [...availableMoves, rightMove];
  }

  for (let index = 1; index < 8; index++) {
    const upMove = currentRank - 8 * index;

    if (upMove < 0 || upMove > 63) break;

    if (position[upMove] !== null) {
      if (position[upMove].color !== color) {
        availableMoves = [...availableMoves, upMove];
      }
      break;
    }

    availableMoves = [...availableMoves, upMove];
  }

  for (let index = 1; index < 8; index++) {
    const downMove = currentRank + 8 * index;

    if (downMove < 0 || downMove > 63) break;

    if (position[downMove] !== null) {
      if (position[downMove].color !== color) {
        availableMoves = [...availableMoves, downMove];
      }
      break;
    }

    availableMoves = [...availableMoves, downMove];
  }

  validMoves = availableMoves.filter(move => {
    if (move < 0 || move > 63) return false;

    return true;
  });

  return validMoves;
};

export default rook;
