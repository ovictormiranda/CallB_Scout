import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 186px;
  height: 94px;

  padding: 19px;
  margin-right: 5px;
  background-color: ${({ isActive }) => 
    isActive ? theme.colors.success : theme.colors.dark_background };
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: 24px;

  color: ${({ isActive }) => 
    isActive ? theme.colors.dark_background : theme.colors.light_text};
`