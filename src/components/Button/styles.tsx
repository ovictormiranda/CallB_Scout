import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
  textColor?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 186px;
  height: 94px;

  padding: 19px;
  margin-right: 5px;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: 24px;

  color: ${({ textColor }) => textColor};
`