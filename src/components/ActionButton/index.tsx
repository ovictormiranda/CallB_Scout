import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';


interface Props extends RectButtonProps {
  title: string;
  isActive: boolean;
  isPositive: boolean;
}

export function ActionButton({
  title,
  onPress,
  isActive,
  isPositive,
  enabled = true,
}: Props){
  return (
    <Container
      onPress={onPress}
      enabled={enabled}
      isActive={isActive}
      isPositive={isPositive}
      style={{ opacity: enabled === false  ? .5 : 1}}
    >
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}