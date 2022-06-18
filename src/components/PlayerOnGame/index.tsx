import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Position,
  Name,
  GameInfos,
  YellowCard,
  RedCard,
  Goal,
} from './styles';

interface Props extends RectButtonProps{
  position: string;
  name: string;
  yellowCard?: string;
  redCard?: string;
  goal?: string;
  isActive: boolean;
}

export function PlayerOnGame({
  position,
  name,
  yellowCard,
  redCard,
  goal,
  onPress,
  isActive,
  enabled = true,
}: Props){
  return (
    <Container
      onPress={onPress}
      isActive={isActive}
      style={{ opacity: enabled === false ? .5 : 1}}
    >
      <Position>{position}</Position>
      <Name>{name}</Name>
      <GameInfos>
        <YellowCard></YellowCard>
        <RedCard></RedCard>
        <Goal></Goal>
      </GameInfos>
    </Container>
  );
}