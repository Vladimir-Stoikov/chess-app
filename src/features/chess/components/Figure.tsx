import styled from 'styled-components';

import type { IFigure } from '../types';

const FigureSt = styled.span`
  height: 5px;
  width: 5px;
`;

const Figure = (props: IFigure) => {
  return (
    <FigureSt>
      {props.color} {props.type}
    </FigureSt>
  );
};

export default Figure;
