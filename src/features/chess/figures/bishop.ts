// Правила ходов слона.

import type { IFigurePlace } from "../types";

const bishop = ({position}: IFigurePlace) => {
  console.log("I'm a bishop", position);
  return null;
};

export default bishop;
