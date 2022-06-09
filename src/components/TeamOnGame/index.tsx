import React from 'react';
import { PlayerOnGame } from '../PlayerOnGame';

import {
  Container,
  Header,
  Content,
  TeamInfo,
  Shield,
  Team,
  Score,
  PlayersList,
} from './styles';

export function TeamOnGame(){
  return (
    <Container>
      <Header>

      </Header>
      <Content>
        <TeamInfo>
          <Shield></Shield>
          <Team>Real Madrid</Team>
          <Score>1</Score>
        </TeamInfo>
        <PlayersList>
          <PlayerOnGame position='GK' name='Courtois'/>
          <PlayerOnGame position='RB' name='Carvajal'/>
          <PlayerOnGame position='DF' name='Eder Militão'/>
          <PlayerOnGame position='DF' name='Alaba'/>
          <PlayerOnGame position='LB' name='Marcelo'/>
          <PlayerOnGame position='MD' name='Casemiro'/>
          <PlayerOnGame position='MD' name='Kroos'/>
          <PlayerOnGame position='MA' name='Modric'/>
          <PlayerOnGame position='DF' name='Rodrygo'/>
          <PlayerOnGame position='LW' name='Vini Jr'/>
          <PlayerOnGame position='RW' name='Benzema'/>
          <PlayerOnGame position='MA' name='Camavinga'/>
        </PlayersList>
      </Content>
    </Container>
  );
}