// Check pawn moves

import type { IFigurePlace } from "../types";

const pawn = ({currentRank, color}: IFigurePlace) => {
  console.log(`I'm a ${color} pawn at ${currentRank} rank`);
  let availableMoves: number[] = [];
  let validMoves: number[] = [];
  const currentCol = currentRank % 8;

  if(color === 'white') {
    console.log(`I can move to ${currentRank - 8}, ${currentRank - 16}`);
    console.log(`I can attack to ${currentRank - 7}, ${currentRank - 9}`);
    availableMoves = [currentRank - 8, currentRank - 16, currentRank - 7, currentRank - 9];
      validMoves = availableMoves.filter(move => {
    if (move < 0 || move > 63) return false;

    const moveCol = move % 8;
    const colDiff = Math.abs(moveCol - currentCol);

    if (move === currentRank - 8 || move === currentRank - 16) {
      return currentCol === moveCol; 
    }

    if (move === currentRank - 7 || move === currentRank - 9) {
      return colDiff === 1; 
    }

    return false;

  })
  }

  if(color === 'black') {
    console.log(`I can move to ${currentRank + 8}, ${currentRank + 16}`);
    console.log(`I can attack to ${currentRank + 7}, ${currentRank + 9}`);
    availableMoves = [currentRank + 8, currentRank + 16, currentRank + 7, currentRank + 9];
      validMoves = availableMoves.filter(move => {
    if (move < 0 || move > 63) return false;

    const moveCol = move % 8;
    const colDiff = Math.abs(moveCol - currentCol);

    if (move === currentRank + 8 || move === currentRank + 16) {
      return currentCol === moveCol; 
    }

    if (move === currentRank + 7 || move === currentRank + 9) {
      return colDiff === 1; 
    }

    return false;

  })
  }


  return validMoves;

};


export default pawn;
