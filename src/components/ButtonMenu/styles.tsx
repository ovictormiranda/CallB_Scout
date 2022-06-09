import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
  textColor?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 108px;
  height: 62px;
  padding: 10px;
  border-radius: 3px;
  
  align-items: center;
  justify-content: center;
  
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  font-size: 16px;
  text-align: center;

  color: ${({ textColor }) => textColor};
`