import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import homebg from '../../assets/home_background.png'

import { homeOptions } from '../../Utils/homeOptions';

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
 key: string;
 title: string;
 description: string;
 goTo: string;
}

interface Props {
  option: string;
}

export function Home({ option }: Props ){
  const [optionSelected, setOptionSelected] = useState(homeOptions[1]);

  const navigation = useNavigation<any>();

  function handleOptionSelected(option: Option) {
    console.log(option);
    setOptionSelected(option);
  }

  function handleNextScreen(option: Option) {
    navigation.navigate(option.goTo)
  }


  return (
    <Container>
      <ImageBackground source={homebg} width={100} resizeMode="cover" style={styles.image}>
        <Content>
          <Header>

          </Header>

          <MainCard onPress={() => handleNextScreen(optionSelected) }>
            <Title>{optionSelected.title}</Title>
            <Description>
              {optionSelected.description}
            </Description>
          </MainCard>
          
          <Footer>
          <FlatList
                data={homeOptions} 
                keyExtractor={(item) => item.key}
                horizontal
                renderItem={({ item }) => (
                    <Button
                      title={item.title}
                      onPress={() => handleOptionSelected(item)}
                      isActive={optionSelected.key === item.key} 
                   /*    isActive={true} */
                    />
                  )}
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