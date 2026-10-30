// Check rook moves

import type { IFigurePlace } from '../types';

const rook = ({ currentRank, color, position }: IFigurePlace) => {
  console.log(`I'm a ${color} rook at ${currentRank} rank`);
  let availableMoves: number[] = [];

  const currentRow = Math.floor(currentRank / 8);

  for (let index = 1; index < 8; index++) {
    const leftMove = currentRank - index;
    if (leftMove < 0 || leftMove > 63) break;
    if (Math.floor(leftMove / 8) !== currentRow) break;

    if (position[leftMove] !== null) {
      if (position[leftMove].color !== color) {
        availableMoves = [...availableMoves, leftMove];
      }
      break;
    }

    availableMoves = [...availableMoves, leftMove];
  }

  for (let index = 1; index < 8; index++) {
    const rightMove = currentRank + index;
    if (rightMove < 0 || rightMove > 63) break;
    if (Math.floor(rightMove / 8) !== currentRow) break;

    if (position[rightMove] !== null) {
      if (position[rightMove].color !== color) {
        availableMoves = [...availableMoves, rightMove];
      }
      break;
    }

    availableMoves = [...availableMoves, rightMove];
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

  return availableMoves;
};

export default rook;
