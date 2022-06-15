import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import { FlatList, ImageBackground, SectionListRenderItemInfo, StyleSheet } from 'react-native';
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


interface Option {
  title: string,
  description: string,
  goTo: string,
  isSelected: boolean,
  color?: string,
  textColor?: string,
}

export function Home(){

  const navigation = useNavigation<any>();

  const [option, setOption] = useState<Option>(
    {
      title: "NEW GAME",
      description: "Select teams and lineups,\nadd details to the match and...\n \n\ngo to the game!",
      goTo: "handleNewGame2",
      isSelected: true,
      color: 'rgba(217, 250, 84, 95)',
      textColor:'rgba(31, 33, 44, 80)',
    }
  );

  const options = [
    { 
      id: 1,
      title: "HISTORY",
      description: "Select teams and lineups,{'\n'} add details to the match and...{'\n'}{'\n'}{'\n'}go to the game!",
      goTo: "handleNewGame",
      isSelected: false,
    },
    { 
      id: 2,
      title: "NEW GAME",
      description: "Select teams and lineups,{'\n'} add details to the match and...{'\n'}{'\n'}{'\n'}go to the game! 2",
      goTo: "handleNewGame2",
      isSelected: false,
      color: 'rgba(217, 250, 84, 95)',
      textColor:'rgba(31, 33, 44, 80)',
    },
    { 
      id: 3,
      title: "ANALYTICS",
      description: "Select teams and lineups,{'\n'} add details to the match and...{'\n'}{'\n'}{'\n'}go to the game!",
      goTo: "handleNewGame",
      isSelected: false,
    },
    { 
      id: 4,
      title: "EDIT",
      description: "Select teams and lineups,{'\n'} add details to the match and...{'\n'}{'\n'}{'\n'}go to the game! 2",
      goTo: "handleNewGame2",
      isSelected: false,
    }
  ]

/*   function handleOptionSelected() {
    if (title === "EDIT2") {
      setOption({ 
        title: "NEW GAME 2",
        description: "Select teams and lineups,\nadd details to the match and...\n \n \ngo to the game! 2222",
        goTo: "handleNewGame2"
      })
      console.log("no edit 2");
    } else if ( title === "EDIT") {
      setOption({
        title: "NEW GAME",
        description: "Select teams and lineups,\nadd details to the match and... \n \n \ngo to the game!",
        goTo: "handleNewGame"
      });
      console.log("no edit");
    } else {
      console.log("deu ruim");
    }
  }  */

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

          <MainCard onPress={option?.goTo}>
            <Title>{option?.title}</Title>
            <Description>
              {option?.description}
            </Description>
          </MainCard>
          
          <Footer>
          <FlatList 
                data={options} 
                keyExtractor={item => String(item.id)}
                horizontal
                renderItem={({ item }) => {
                  return (
                    <Button
                      title={item.title}
                      onPress={() => {}}
                    />
                  );
                }
                }
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