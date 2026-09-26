import styled from 'styled-components';

import type { IFigure } from '../types';

const FigureSt = styled.span`
  height: 50px;
  width: 50px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Figure = (props: IFigure) => {
  const imgSrc = `/img/${props.type}_${props.color[0]}.png`;

  return (
    <FigureSt>
      <img src={imgSrc} alt={`${props.type}_${props.color}`} />
    </FigureSt>
  );
};

export default Figure;
