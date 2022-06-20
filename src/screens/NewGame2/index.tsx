import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, PanResponder, Text, View, FlatList, } from 'react-native';
import bg from '../../assets/game_bg.png';
import { ActionButton } from '../../components/ActionButton';
import { BulletPoint } from '../../components/BulletPoint';

import {
  Container,
  LeftSide,
  Middle,
  RightSide,
  Wrapper,
} from './styles';

interface Action {
  id: number;
  xPosition: number;
  yPosition: number;
}

const DATA = [
  {
    id: 1,
    xP: 115.98,
    yP: 259.98 
  },
  {
    id: 2,
    xP: 228.98,
    yP: 67.99 
  },
  {
    id: 3,
    xP: 83.98,
    yP: 27 
  },
  {
    id: 4,
    xP: 158,
    yP: 62.98
  },
  {
    id: 5,
    xP: 99,
    yP: 273
  },
  {
    id: 6,
    xP: 69.96,
    yP: 437.96
  },
];


export function NewGame2(){
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  const [actions, setActions] = useState<Action[]>([]);

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

  function handleNewAction(locationX: any, locationY: any) {
    
    const newAction = {
      id: new Date().getTime(),
      xPosition: locationX,
      yPosition: locationY,
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

/*   useEffect(() => {
    const allAction = actions.map(( item ) => {
      <View key={item.id} style={[ styles.pointStyle, { top: item.xPosition, left: item.yPosition } ]}/>
    });

  },[setActions]); */

  return (
    <Container>
      <ImageBackground
        source={bg}
        style={styles.image}
      >
        <Wrapper>
          <LeftSide>
          <FlatList 
                data={dataPositive} 
                keyExtractor={item => item.id}
                numColumns={columns}
                renderItem={({ item }) => {
                  return (
                    <ActionButton 
                      title={item.name} 
                      color={item.color} 
                      textColor={item.textColor}
                      onPress={() => {}}  
                    />
                  );
                }
                }
              />


            {/* <Text style={[{ top: (locationY - 15), left: (locationX)}]}> X: {locationX}, Y: {locationY}  </Text> */}
            {/* <View style={[ styles.pointStyle, { top: 115.98, left: 259.98 } ]}/> */}

  {/*           { 
               actions.map(( item ) => {
                return (
                  <View key={item.id}>
                    <Text  style={[{ top: (item.yPosition - 15), left: (item.xPosition)}]}> X: {item.xPosition}, Y: {item.yPosition}  </Text>
                    <View style={[ styles.pointStyle, { top: item.yPosition, left: item.xPosition } ]}/>
                  </View>
                );
              })
            } */}
            <Text style={[{ top: (locationY - 15), left: (locationX)}]}> X: {locationX}, Y: {locationY}  </Text>
            <View style={[ styles.pointStyle, { top: locationY, left: locationX } ]}/>
            <View style={{ flex: 1, backgroundColor: 'transparent'}} {...panResponder.panHandlers}/>
            
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
  },

  pointStyle: {
    height: 22,
    width: 22,
    marginTop: 5,
    position: 'absolute',
    borderRadius: 11,
    backgroundColor: '#00FF30'
  }
})