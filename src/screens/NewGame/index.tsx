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

interface Action {
  id: number;
  xPosition: number;
  yPosition: number;
}

export function NewGame() {

  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  const [actions, setActions] = useState<Action[]>([]);

  function handleNewAction(locationX: any, locationY: any) {
    
    const newAction = {
      id: new Date().getTime(),
      xPosition: locationX,
      yPosition: locationY
    }

    setActions(oldActions => [...oldActions, newAction]);
    console.log(actions);
  }


  const columns = 5;
  const dataPositive = [
    { id: '00', name: 'SHORT PASS' },
    { id: '01', name: 'KICK', color: '#D9FA54', textColor:'#1F212C' },
    { id: '02', name: 'CORNER KICK' },
    { id: '03', name: 'CROSS' },
    { id: '04', name: 'FOUL' },
    { id: '06', name: 'TACKLE' },
    { id: '07', name: 'STEAL THE BALL' },
    { id: '08', name: 'PASS BETWEEN LINES' },
    { id: '09', name: '1st BALL' },
    { id: '10', name: '2nd BALL' },
  ]

  const dataNegative = [
    { id: '00', name: 'SHORT PASS' },
    { id: '01', name: 'KICK' },
    { id: '02', name: 'CORNER KICK' },
    { id: '03', name: 'CROSS' },
    { id: '04', name: 'FOUL' },
    { id: '06', name: 'TACKLE' },
    { id: '07', name: 'LOOSE BALL' },
    { id: '08', name: 'PASS BETWEEN LINES' },
    { id: '09', name: '1st BALL' },
    { id: '10', name: '2nd BALL' },
  ]

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
                  <ImagePlayer>

                  </ImagePlayer>
                  <BioPlayer>
                    <Name>
                      <FirstName>Karim</FirstName>
                      <LastName>Benzema</LastName>
                    </Name>
                    <BioInfo>
                      34 years old{'\n'}
                      181 cm{'\n'}
                      Right Foot
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
                data={dataPositive} 
                keyExtractor={item => item.id}
                numColumns={columns}
                renderItem={({ item }) => {
                  return (
                    <ActionButton title={item.name} color={item.color} textColor={item.textColor}/>
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
                data={dataNegative} 
                keyExtractor={item => item.id}
                numColumns={columns}
                renderItem={({ item }) => {
                  return (
                    <ActionButton title={item.name} color={item.color} textColor={item.textColor}/>
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
  }
})
