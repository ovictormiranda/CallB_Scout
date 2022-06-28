import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';
import theme from '../../styles/theme';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  textColor?: string;
}

export function ButtonMenu({
  title,
  color,
  textColor,
  onPress,
  enabled = true,
}: Props){
  return (
    <Container
      color={color ? color : theme.colors.light_background_main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false  ? .5 : 1}}
    >
      <Title
        textColor={textColor ? textColor : theme.colors.dark_background}
      >{title}</Title>
    </Container>
  );
}
