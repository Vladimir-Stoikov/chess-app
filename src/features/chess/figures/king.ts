// Check king moves

import type { IFigurePlace } from "../types";

const king = ({currentRank, color}: IFigurePlace) => {
  console.log(`I'm a ${color} king at ${currentRank} rank`);
  let availableMoves: number[] = [];
  let validMoves: number[] = [];
  const currentCol = currentRank % 8;

  availableMoves = [currentRank - 1, currentRank - 7, currentRank - 8, currentRank - 9, currentRank + 1, currentRank + 7, currentRank + 8, currentRank + 9];

  validMoves = availableMoves.filter(move => {
    if (move < 0 || move > 63) return false;

    const moveCol = move % 8;
    const colDiff = Math.abs(moveCol - currentCol);


    if (move === currentRank - 1 || move === currentRank - 7 ||  move === currentRank - 9 || move === currentRank + 1 || move === currentRank + 7 || move === currentRank + 9) {
      return colDiff === 1; 
    }

    if (move === currentRank - 8 || move === currentRank + 8) {
      return true; 
    }

    return false;

  })

  return validMoves;
};

export default king;
