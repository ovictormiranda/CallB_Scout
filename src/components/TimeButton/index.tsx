import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';


interface Props extends RectButtonProps {
  title: string;
  isActive: boolean;
}

export function TimeButton({
  title,
  onPress,
  isActive,
  enabled = true,
}: Props){
  return (
    <Container
      onPress={onPress}
      enabled={enabled}
      isActive={isActive}
      style={{ opacity: enabled === false  ? .5 : 1}}
    >
      <Title>{title}</Title>
    </Container>
  );
}