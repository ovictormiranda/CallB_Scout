import React from 'react';

import {
  Container,
  Position,
  Name,
  GameInfos,
  YellowCard,
  RedCard,
  Goal,
} from './styles';

interface Props {
  position: string;
  name: string;
  yellowCard?: string;
  redCard?: string;
  goal?: string;
}

export function PlayerOnGame({
  position,
  name,
  yellowCard,
  redCard,
  goal
}: Props){
  return (
    <Container>
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