import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

interface Action {
  id: number;
  xPosition: string;
  yPosition: string;
}

export const Container = styled.View`
 flex: 1;
`;

export const Wrapper = styled.View`
  background-color: yellow;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const LeftSide = styled.View`
  width: 283px;
  height: 100%;
  padding-left: 30px;
  background-color: blue;
`;

export const Middle = styled.View`
  width: 627px;
  height: 100%;
  background-color: red;
`;

export const RightSide = styled.View`
  width: 627px;
  height: 100%;
  background-color: blue
`;