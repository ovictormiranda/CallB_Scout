import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

interface ButtonProps {
  isActive: boolean;
  isPositive: boolean;
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
  background-color: ${({ isActive, isPositive }) => 
    isActive ? isPositive ? theme.colors.success : theme.colors.alert : theme.colors.dark_background };
  /* box-shadow: 5px 5px 10px black; */ //box-shadow só funciona em iOS
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: 12px;
  text-align: center;

  color: ${({ isActive }) => 
    isActive ? theme.colors.dark_background : theme.colors.light_text };
`