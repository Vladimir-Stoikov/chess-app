import styled from 'styled-components';

type FigureType = 'bishop' | 'king' | 'queen' | 'knight' | 'rook' | 'pawn';

export interface IFigure {
  color: 'white' | 'black';
  type: FigureType;
}

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
