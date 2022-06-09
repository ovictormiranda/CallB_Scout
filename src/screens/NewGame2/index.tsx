import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import bg from '../../assets/game_bg.png';
import { ButtonMenu } from '../../components/ButtonMenu';

import {
  Container,
  
  LeftSide,
  Content,
  Focused,
  
  SelectedPlayer,
  ImagePlayer,
  BioPlayer,
  Name,
  FirstName,
  LastName,
  BioInfo,
  
  TeamContent,
  TeamInfo,
  Shield,
  WrapperNameScore,
  TeamName,
  Score,
  PlayersList,
  Footer,

  Middle,
  PositiveActions,
  Field,
  NegativeActions,

  RightSide,
  Wrapper,

} from './styles';

import { PlayerOnGame } from '../../components/PlayerOnGame';

export function NewGame2(){

  return (
    <Container>
      <ImageBackground
        source={bg}
        style={styles.image}
      >
        <Wrapper>
          <LeftSide>

          </LeftSide>

          <Middle>

          </Middle>
          
          <RightSide>

          </RightSide>
        </Wrapper>

      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
})