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
import { useTheme } from 'styled-components';
import theme from '../../styles/theme';

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
  const theme = useTheme();
  const [locationXFourA, setLocationXFourA] = useState(0); //To plot the actual click on screen
  const [locationYFourA, setLocationYFourA] = useState(0);

  const [locationXFourB, setLocationXFourB] = useState(0);
  const [locationYFourB, setLocationYFourB] = useState(0);

  const [locationXFourC, setLocationXFourC] = useState(0);
  const [locationYFourC, setLocationYFourC] = useState(0);

  const [locationXThreeA, setLocationXThreeA] = useState(0);
  const [locationYThreeA, setLocationYThreeA] = useState(0);

  const [locationXThreeB, setLocationXThreeB] = useState(0);
  const [locationYThreeB, setLocationYThreeB] = useState(0);

  const [locationXThreeC, setLocationXThreeC] = useState(0);
  const [locationYThreeC, setLocationYThreeC] = useState(0);

  const [locationXTwoA, setLocationXTwoA] = useState(0);
  const [locationYTwoA, setLocationYTwoA] = useState(0);

  const [locationXTwoB, setLocationXTwoB] = useState(0);
  const [locationYTwoB, setLocationYTwoB] = useState(0);

  const [locationXTwoC, setLocationXTwoC] = useState(0);
  const [locationYTwoC, setLocationYTwoC] = useState(0);

  const [locationXOneA, setLocationXOneA] = useState(0);
  const [locationYOneA, setLocationYOneA] = useState(0);

  const [locationXOneB, setLocationXOneB] = useState(0);
  const [locationYOneB, setLocationYOneB] = useState(0);

  const [locationXOneC, setLocationXOneC] = useState(0);
  const [locationYOneC, setLocationYOneC] = useState(0);
  

  const [actionsFourA, setActionsFourA] = useState<Action[]>([]); // to get coordinates on screen
  const [actionsFourB, setActionsFourB] = useState<Action[]>([]);
  const [actionsFourC, setActionsFourC] = useState<Action[]>([]);

  const [actionsThreeA, setActionsThreeA] = useState<Action[]>([]);
  const [actionsThreeB, setActionsThreeB] = useState<Action[]>([]);
  const [actionsThreeC, setActionsThreeC] = useState<Action[]>([]);

  const [actionsTwoA, setActionsTwoA] = useState<Action[]>([]);
  const [actionsTwoB, setActionsTwoB] = useState<Action[]>([]);
  const [actionsTwoC, setActionsTwoC] = useState<Action[]>([]);

  const [actionsOneA, setActionsOneA] = useState<Action[]>([]);
  const [actionsOneB, setActionsOneB] = useState<Action[]>([]);
  const [actionsOneC, setActionsOneC] = useState<Action[]>([]);
  
  
  function handleNewActionFourA(locationXFourA: any, locationYFourA: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'FourA',
      xPosition: locationXFourA,
      yPosition: locationYFourA
    }
    
    setActionsFourA([...actionsFourA, newAction]);
    console.log(actionsFourA);
  }

  function handleNewActionFourB(locationXFourB: any, locationYFourB: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'FourB',
      xPosition: locationXFourB,
      yPosition: locationYFourB
    }
    
    setActionsFourB([...actionsFourB, newAction]);
    console.log(actionsFourB);
  }

  function handleNewActionFourC(locationXFourC: any, locationYFourC: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'FourC',
      xPosition: locationXFourC,
      yPosition: locationYFourC
    }
    
    setActionsFourC([...actionsFourC, newAction]);
    console.log(actionsFourC);
  }



  function handleNewActionThreeA(locationXThreeA: any, locationYThreeA: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'ThreeA',
      xPosition: locationXThreeA,
      yPosition: locationYThreeA
    }
    
    setActionsThreeA([...actionsThreeA, newAction]);
    console.log(actionsThreeA);
  }

  function handleNewActionThreeB(locationXThreeB: any, locationYThreeB: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'ThreeB',
      xPosition: locationXThreeB,
      yPosition: locationYThreeB
    }
    
    setActionsThreeB([...actionsThreeB, newAction]);
    console.log(actionsThreeB);
  }

  function handleNewActionThreeC(locationXThreeC: any, locationYThreeC: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'ThreeC',
      xPosition: locationXThreeC,
      yPosition: locationYThreeC
    }
    
    setActionsThreeC([...actionsThreeC, newAction]);
    console.log(actionsThreeC);
  }


  
  function handleNewActionTwoA(locationXTwoA: any, locationYTwoA: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'TwoA',
      xPosition: locationXTwoA,
      yPosition: locationYTwoA
    }
    
    setActionsTwoA([...actionsTwoA, newAction]);
    console.log(actionsTwoA);
  }

  function handleNewActionTwoB(locationXTwoB: any, locationYTwoB: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'TwoB',
      xPosition: locationXTwoB,
      yPosition: locationYTwoB
    }
    
    setActionsTwoB([...actionsTwoB, newAction]);
    console.log(actionsTwoB);
  }

  function handleNewActionTwoC(locationXTwoC: any, locationYTwoC: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'TwoC',
      xPosition: locationXTwoC,
      yPosition: locationYTwoC
    }
    
    setActionsTwoC([...actionsTwoC, newAction]);
    console.log(actionsTwoC);
  }



    function handleNewActionOneA(locationXOneA: any, locationYOneA: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'OneA',
      xPosition: locationXOneA,
      yPosition: locationYOneA
    }
    
    setActionsOneA([...actionsOneA, newAction]);
    console.log(actionsOneA);
  }

  function handleNewActionOneB(locationXOneB: any, locationYOneB: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'OneB',
      xPosition: locationXOneB,
      yPosition: locationYOneB
    }
    
    setActionsOneB([...actionsOneB, newAction]);
    console.log(actionsOneB);
  }

  function handleNewActionOneC(locationXOneC: any, locationYOneC: any) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'OneC',
      xPosition: locationXOneC,
      yPosition: locationYOneC
    }
    
    setActionsOneC([...actionsOneC, newAction]);
    console.log(actionsOneC);
  }

  

  const panResponderFourA = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXFourA(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYFourA(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionFourA(locationXFourA, locationYFourA)
    },
  });
  
  const panResponderFourB = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXFourB(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYFourB(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionFourB(locationXFourB, locationYFourB)
    },
  });

  const panResponderFourC = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXFourC(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYFourC(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionFourC(locationXFourC, locationYFourC)
    },
  });



  const panResponderThreeA = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXThreeA(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYThreeA(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionThreeA(locationXThreeA, locationYThreeA)
    },
  });
  
  const panResponderThreeB = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXThreeB(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYThreeB(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionThreeB(locationXThreeB, locationYThreeB)
    },
  });

  const panResponderThreeC = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXThreeC(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYThreeC(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionThreeC(locationXThreeC, locationYThreeC)
    },
  });
  

  const panResponderTwoA = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXTwoA(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYTwoA(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionTwoA(locationXTwoA, locationYTwoA)
    },
  });
  
  const panResponderTwoB = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXTwoB(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYTwoB(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionTwoB(locationXTwoB, locationYTwoB)
    },
  });

  const panResponderTwoC = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXTwoC(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYTwoC(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionTwoC(locationXTwoC, locationYTwoC)
    },
  });



  const panResponderOneA = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXOneA(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYOneA(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionOneA(locationXOneA, locationYOneA)
    },
  });
  
  const panResponderOneB = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXOneB(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYOneB(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionOneB(locationXOneB, locationYOneB)
    },
  });

  const panResponderOneC = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      setLocationXOneC(parseFloat(event.nativeEvent.locationX.toFixed(2)));
      setLocationYOneC(parseFloat(event.nativeEvent.locationY.toFixed(2)));
      handleNewActionOneC(locationXOneC, locationYOneC)
    },
  });



  
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
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderFourA.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYFourA, left: locationXFourA } ]}/> 
                          { 
                            actionsFourA.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </FourA>

                    <FourB>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderFourB.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYFourB, left: locationXFourB } ]}/> 
                          { 
                            actionsFourB.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </FourB>

                    <FourC>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderFourC.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYFourC, left: locationXFourC } ]}/> 
                          { 
                            actionsFourC.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </FourC>
                  </FourthZone>
                  <ThirdZone>
                    <ThreeA>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderThreeA.panHandlers}>
                          <View style={[ styles.pointStyle, { top: locationYThreeA, left: locationXThreeA } ]}/> 
                            { 
                              actionsThreeA.map( item  => (
                                <View key={item.id}>
                                    <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                  </View>
                                )
                              )
                            }
                        </View>
                    </ThreeA>
                    <ThreeB>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderThreeB.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYThreeB, left: locationXThreeB } ]}/> 
                          { 
                            actionsThreeB.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </ThreeB>
                    <ThreeC>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderThreeC.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYThreeC, left: locationXThreeC } ]}/> 
                          { 
                            actionsThreeC.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </ThreeC>
                  </ThirdZone>
                  <SecondZone>
                    <TwoA>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderTwoA.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYTwoA, left: locationXTwoA } ]}/> 
                          { 
                            actionsTwoA.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </TwoA>
                    <TwoB>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderTwoB.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYTwoB, left: locationXTwoB } ]}/> 
                          { 
                            actionsTwoB.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </TwoB>
                    <TwoC>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderTwoC.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYTwoC, left: locationXTwoC } ]}/> 
                          { 
                            actionsTwoC.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </TwoC>
                  </SecondZone>
                  <FirstZone>
                    <OneA>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderOneA.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYOneA, left: locationXOneA } ]}/> 
                          { 
                            actionsOneA.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </OneA>
                    <OneB>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderOneB.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYOneB, left: locationXOneB } ]}/> 
                          { 
                            actionsOneB.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </OneB>
                    <OneC>
                      <View style={{height: '100%', width: '100%', backgroundColor: 'transparent'}} {...panResponderOneC.panHandlers}>
                        <View style={[ styles.pointStyle, { top: locationYOneC, left: locationXOneC } ]}/> 
                          { 
                            actionsOneC.map( item  => (
                              <View key={item.id}>
                                  <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                                </View>
                              )
                            )
                          }
                      </View>
                    </OneC>
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
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: theme.colors.success,
  },
  playerList: {
    height: 450,
  }
})
