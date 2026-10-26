// Правила ходов ферзя.

import type { IFigurePlace } from "../types";

const queen = ({position}: IFigurePlace) => {
  console.log("I'm a queen", position);
  return null;
};

export default queen;
