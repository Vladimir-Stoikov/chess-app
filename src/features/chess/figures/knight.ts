// Check knight moves

import type { IFigurePlace } from "../types";

const knight = ({currentRank, color}: IFigurePlace) => {
  console.log(`I'm a ${color} knight at ${currentRank} rank`);
  let availableMoves: number[] = [];
  let validMoves: number[] = [];
  const currentCol = currentRank % 8;

  availableMoves = [currentRank - 17, currentRank - 15, currentRank - 10, currentRank - 6, currentRank + 6, currentRank + 10, currentRank + 15, currentRank + 17];

  validMoves = availableMoves.filter(move => {
    if (move < 0 || move > 63) return false;

    const moveCol = move % 8;
    const colDiff = Math.abs(moveCol - currentCol);

    if (move === currentRank - 17 || move === currentRank - 15 || move === currentRank + 15 || move === currentRank + 17) {
      return colDiff === 1;
    }

    if (move === currentRank - 10 || move === currentRank - 6 || move === currentRank + 6 || move === currentRank + 10) {
      return colDiff === 2;
    }

    return false;
  })

  return validMoves;
};

export default knight;
