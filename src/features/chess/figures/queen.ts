// Правила ходов ферзя.

import type { IFigurePlace } from '../types';

const queen = ({ currentRank, color, position }: IFigurePlace) => {
  console.log(`I'm a ${color} quenn at ${currentRank} rank`);
  let availableMoves: number[] = [];

  const currentRow = Math.floor(currentRank / 8);

  for (let index = 1; index < 8; index++) {
    const leftUpMove = currentRank - 9 * index;
    if (leftUpMove < 0 || leftUpMove > 63) break;
    if (Math.abs(Math.floor(leftUpMove / 8) - currentRow) !== index) break;

    if (position[leftUpMove] !== null) {
      if (position[leftUpMove].color !== color) {
        availableMoves = [...availableMoves, leftUpMove];
      }
      break;
    }

    availableMoves = [...availableMoves, leftUpMove];
  }

  for (let index = 1; index < 8; index++) {
    const rightUpMove = currentRank - 7 * index;
    if (rightUpMove < 0 || rightUpMove > 63) break;
    if (Math.abs(Math.floor(rightUpMove / 8) - currentRow) !== index) break;

    if (position[rightUpMove] !== null) {
      if (position[rightUpMove].color !== color) {
        availableMoves = [...availableMoves, rightUpMove];
      }
      break;
    }

    availableMoves = [...availableMoves, rightUpMove];
  }

  for (let index = 1; index < 8; index++) {
    const leftDownMove = currentRank + 7 * index;
    if (leftDownMove < 0 || leftDownMove > 63) break;
    if (Math.abs(Math.floor(leftDownMove / 8) - currentRow) !== index) break;

    if (position[leftDownMove] !== null) {
      if (position[leftDownMove].color !== color) {
        availableMoves = [...availableMoves, leftDownMove];
      }
      break;
    }

    availableMoves = [...availableMoves, leftDownMove];
  }

  for (let index = 1; index < 8; index++) {
    const rightDownMove = currentRank + 9 * index;
    if (rightDownMove < 0 || rightDownMove > 63) break;
    if (Math.abs(Math.floor(rightDownMove / 8) - currentRow) !== index) break;

    if (position[rightDownMove] !== null) {
      if (position[rightDownMove].color !== color) {
        availableMoves = [...availableMoves, rightDownMove];
      }
      break;
    }

    availableMoves = [...availableMoves, rightDownMove];
  }

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

export default queen;
