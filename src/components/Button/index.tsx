import React from 'react';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';
import theme from '../../styles/theme';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  textColor?: string;
}

export function Button({
  title,
  color,
  textColor,
  onPress,
  enabled = true,
}: Props){
  return (
    <Container
      color={color ? color : theme.colors.dark_background}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false  ? .5 : 1}}
    >
      <Title
        textColor={textColor ? textColor : theme.colors.light_text}
      >{title}</Title>
    </Container>
  );
}