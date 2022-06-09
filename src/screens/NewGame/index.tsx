import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import bg from '../../assets/game_bg.png';
import { ButtonMenu } from '../../components/ButtonMenu';

import {
  Container,
  LeftSide,
  Middle,
  RightSide,
  Content,
  Focused,
  SelectedPlayer,
  TeamContent,
  TeamInfo,
  Shield,
  WrapperNameScore,
  TeamName,
  Score,
  PlayersList,
  Footer,
} from './styles';

import { PlayerOnGame } from '../../components/PlayerOnGame';

export function NewGame(){

  return (
    <Container>
      <ImageBackground 
        source={bg}
        width={100}
        resizeMode="cover"
        style={styles.image}
      >
        <LeftSide>
          <Content>
            <Focused>
              <SelectedPlayer>

              </SelectedPlayer>
              <TeamContent>
                <TeamInfo>
                  <Shield></Shield>
                  <WrapperNameScore>
                    <TeamName>Real Madrid</TeamName>
                    <Score>1</Score>
                  </WrapperNameScore>
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
                  <PlayerOnGame position='MD' name='Camavinga'/>
                  <PlayerOnGame position='RW' name='G. Bale'/>
                  <PlayerOnGame position='RW' name='E. Hazard'/>
                </PlayersList>
              </TeamContent>
            </Focused>
          </Content>
          <Footer>
            <ButtonMenu 
              title='VESTIÁRIO'
            />
            <ButtonMenu 
              title='FIM DO JOGO'
              color='#FF5464'
            />
          </Footer>
        </LeftSide>
        <Middle>

        </Middle>
        <RightSide>

        </RightSide>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  }
})