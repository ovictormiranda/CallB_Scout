import React, { useState } from 'react';
import { ImageBackground, PanResponder, StyleSheet, View, Text } from 'react-native';
import bg from '../../assets/game_bg.png';
import field from '../../assets/FIELD.png';
import { ButtonMenu } from '../../components/ButtonMenu';

import {
  Container,
  Wrapper,

  LeftSide,
  Content,
  Focused,
  
  BackgroundPlayer,
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
  FieldWrapper,
  FourthZone,
  FourA,
  FourB,
  FourC,
  ThirdZone,
  ThreeA,
  ThreeB,
  ThreeC,
  SecondZone,
  TwoA,
  TwoB,
  TwoC,
  FirstZone,
  OneA,
  OneB,
  OneC,
  NegativeActions,

  RightSide,

  TestBox,

} from './styles';

import { PlayerOnGame } from '../../components/PlayerOnGame';
import { ActionButton } from '../../components/ActionButton';
import { FlatList } from 'react-native-gesture-handler';

import { positiveActions, negativeActions } from '../../Utils/actions';
import { basicPlayers } from '../../Utils/basicPlayers';

console.log(basicPlayers.length)
interface Action {
  id: number;
  xPosition: number;
  yPosition: number;
}

interface PosOrNeg {   //positive or negative option
  key: string;
  name: string;
}

interface PlayerProps {
  id: string;
  bioInfo: {
    name: string;
    firstName: string;
    lastName: string;
    height: string;
    weight: string;
    nationality: string;
    birthDate: string;
    foot: string;
    picture: string;
  },
  team: string;
  position: [],
  positionInitials: string;
}

export function NewGame({ action }: PosOrNeg) {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  
  const [actions, setActions] = useState<Action[]>([]); // to get coordinates on screen
  const [actionSelected, setActionSelected] = useState({}); // to know if is a positive or negative action
  
  const [playerSelected, setPlayerSeleted] = useState<PlayerProps>(basicPlayers[0]);

  function handlePlayerSelected(player: PlayerProps) {
    console.log(player);
    setPlayerSeleted(player)
  }

  function handleActionSelected(action: PosOrNeg) {
    console.log(action);
    setActionSelected(action);
  }

  function handleNewAction(locationX: any, locationY: any) {
    const newAction = {
      id: new Date().getTime(),
      xPosition: locationX,
      yPosition: locationY
    }

    setActions(oldActions => [...oldActions, newAction]);
    console.log(actions);
  }


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,

    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,

    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationX(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationY(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewAction(locationX, locationY)
    },
  });
  
  return (
    <Container>
      <ImageBackground 
        source={bg}
        width={100}
        resizeMode="cover"
        style={styles.image}
      >
        <Wrapper>
          <LeftSide>
            <Content>
              <Focused>
                <SelectedPlayer>
                    <ImagePlayer source={{ uri: playerSelected.bioInfo.picture }} resizeMode="contain"/>
                  <BioPlayer>
                    <Name>
                      <FirstName>{playerSelected.bioInfo.firstName}</FirstName>
                      <LastName>{playerSelected.bioInfo.lastName}</LastName>
                    </Name>
                    <BioInfo>
                      34 years old{'\n'}
                      {playerSelected.bioInfo.height} cm{'\n'}
                      {playerSelected.bioInfo.foot} Foot
                    </BioInfo>
                  </BioPlayer>
                </SelectedPlayer>
                <TeamContent>
                  <TeamInfo>
                    <Shield></Shield>
                    <WrapperNameScore>
                      <TeamName>Real Madrid</TeamName>
                      <Score>1</Score>
                    </WrapperNameScore>
                  </TeamInfo>
                  <FlatList 
                    style={styles.playerList}
                    data={basicPlayers}
                    keyExtractor={( item ) => item.id}
                    renderItem={({ item }) => (
                      <PlayerOnGame 
                        position={item.positionInitials} 
                        name={item.bioInfo.name}
                        onPress={() => handlePlayerSelected(item)}
                        isActive={playerSelected.id == item.id}
                      />
                    )}
                  />
                  
                </TeamContent>
              </Focused>
            </Content>
            <Footer>
              <ButtonMenu 
                title='LOCKER ROOM'
                />
              <ButtonMenu 
                title='END GAME'
                color='#FF5464'
                />
            </Footer>
          </LeftSide>

          <Middle>
            <PositiveActions>
              <FlatList 
                data={positiveActions} 
                keyExtractor={item => item.key}
                numColumns={5}
                renderItem={({ item }) => {
                  return (
                    <ActionButton 
                      title={item.name} 
                      onPress={() => handleActionSelected(item)}
                      isActive={actionSelected.key === item.key}
                      isPositive
                    />
                  );
                }
                }
              />
    
            </PositiveActions>
            <FieldWrapper>
              <ImageBackground 
                source={field}
                width={100}
                resizeMode="contain"
                style={styles.image}
              >
                <Field>
                  <FourthZone>
                    <FourA>
                      { 
                        actions.map(( item ) => {
                          return (
                            <View key={item.id}>
                              <Text style={[{ top: (item.yPosition - 15), left: (item.xPosition)}]}> X: {item.xPosition}, Y: {item.yPosition}  </Text>
                              <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                            </View>
                          );
                        })
                      }
                      <View style={{ flex: 1, backgroundColor: 'transparent'}} {...panResponder.panHandlers}/>
                    </FourA>
                    <FourB></FourB>
                    <FourC></FourC>
                  </FourthZone>
                  <ThirdZone>
                    <ThreeA></ThreeA>
                    <ThreeB></ThreeB>
                    <ThreeC></ThreeC>
                  </ThirdZone>
                  <SecondZone>
                    <TwoA></TwoA>
                    <TwoB></TwoB>
                    <TwoC></TwoC>
                  </SecondZone>
                  <FirstZone>
                    <OneA></OneA>
                    <OneB></OneB>
                    <OneC></OneC>
                  </FirstZone>
                </Field>
              </ImageBackground> 
            </FieldWrapper>
            <NegativeActions>
            <FlatList 
                data={negativeActions} 
                keyExtractor={item => item.key}
                numColumns={5}
                renderItem={({ item }) => {
                  return (
                    <ActionButton 
                      title={item.name}
                      onPress={() => handleActionSelected(item)}
                      isActive={actionSelected.key === item.key}
                      isPositive={false}
                    />
                  );
                }
                }
              />
            </NegativeActions>
          </Middle>
          
          <RightSide>
                <TestBox>

                </TestBox>
          </RightSide>
        </Wrapper>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  pointStyle: {
    height: 10,
    width: 10,
    marginTop: 5,
    //position: 'absolute',
    borderRadius: 5,
    backgroundColor: '#00FF30'
  },
  playerList: {
    height: 450,
  }
})
