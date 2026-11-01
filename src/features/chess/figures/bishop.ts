// Check bishop moves

import type { IFigurePlace } from '../types';

const bishop = ({ currentRank, color, position }: IFigurePlace) => {
  console.log(`I'm a ${color} bishop at ${currentRank} rank`);
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

  return availableMoves;
};

export default bishop;
