import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
  textColor?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 98px;
  height: 36px;
  border-radius: 3px;

  align-items: center;
  justify-content: center;
  padding: 3px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 2px;
  background-color: ${({ color }) => color};
  /* box-shadow: 5px 5px 10px black; */ //box-shadow só funciona em iOS
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: 12px;
  text-align: center;

  color: ${({ textColor }) => textColor};
`