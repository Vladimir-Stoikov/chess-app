// Check pawn moves

import type { IFigurePlace } from "../types";

const pawn = ({currentRank, color}: IFigurePlace) => {
  console.log(`I'm a ${color} pawn at ${currentRank} rank`);
  let availableMoves: number[] = [];
  if(color === 'white') {
    console.log(`I can move to ${currentRank - 8}, ${currentRank - 16}`);
    console.log(`I can attack to ${currentRank - 7}, ${currentRank - 9}`);
    availableMoves = [currentRank - 8, currentRank - 16, currentRank - 7, currentRank - 9];
  }

  if(color === 'black') {
    console.log(`I can move to ${currentRank + 8}, ${currentRank + 16}`);
    console.log(`I can attack to ${currentRank + 7}, ${currentRank + 9}`);
    availableMoves = [currentRank + 8, currentRank + 16, currentRank + 7, currentRank + 9];
  }

  return availableMoves;

};

export default pawn;
