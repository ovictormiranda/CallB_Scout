import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  justify-content: flex-end;
  padding-left: 66px;
  padding-bottom: 100px;
`;

export const Header = styled.View``;

export const MainCard = styled(RectButton)`
  width: 640px;
  height: 430px;

  background-color: ${({ theme }) => theme.colors.dark_background};

  padding-left: 20px;
  padding-top: 30px;
`;

export const Title = styled.Text`
  font-size: 64px;
  
  font-family: ${({ theme }) => theme.fonts.primary_700I};
  color: ${({ theme }) => theme.colors.success};
  opacity: 0.95;
`;

export const Description = styled.Text`
  font-size: 32px;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.light_text};

  margin-top: 18px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 43px;
`;
