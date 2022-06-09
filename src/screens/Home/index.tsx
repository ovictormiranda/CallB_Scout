import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import { ImageBackground, StyleSheet } from 'react-native';
import homebg from '../../assets/home_background.png'

import {
  Container,
  Content,
  Header,
  MainCard,
  Title,
  Description,
  Footer,
} from './styles';


export function Home(){

  const navigation = useNavigation<any>();

  function handleNewGame() {
    navigation.navigate('NewGame')
  }

  function handleNewGame2() {
    navigation.navigate('NewGame2')
  }

  return (
    <Container>
      <ImageBackground source={homebg} width={100} resizeMode="cover" style={styles.image}>
        <Content>
          <Header>

          </Header>

          <MainCard onPress={handleNewGame}>
            <Title>NOVA PARTIDA</Title>
            <Description>
              Select teams and lineups,{'\n'}
              add details to the match and...{'\n'}
              {'\n'}
              {'\n'}
              go to the game!
            </Description>
          </MainCard>
          
          <Footer>
            <Button
              title='HISTORY'
            />
            <Button
              title='NEW GAME'
              color='rgba(217, 250, 84, 95)'
              textColor='rgba(31, 33, 44, 80)'
            />
            <Button
              title='ANALYTICS'
            />
            <Button
              title='EDIT'
              onPress={handleNewGame2}
            />
          </Footer>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  }
})