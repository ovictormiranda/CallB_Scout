import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 100%;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.light_background_main};
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.success_transparent : theme.colors.transparent }
`;

export const Position = styled.Text`
  margin-left: 12px;
  margin-right: 20px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.dark_text};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.dark_text};
  font-size: 16px;
`;

export const GameInfos = styled.View``;

export const YellowCard = styled.View``;

export const RedCard = styled.View``;

export const Goal = styled.View``;
