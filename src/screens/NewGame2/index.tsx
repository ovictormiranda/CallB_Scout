import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, PanResponder, Text, View, FlatList } from 'react-native';
import bg from '../../assets/game_bg.png';
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
];

export function NewGame2(){
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  const [actions, setActions] = useState<Action[]>([]);

  useEffect(() => {

  }, []);

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
        style={styles.image}
      >
        <Wrapper>
          <LeftSide>
            {/* <Text style={[{ top: (locationY - 15), left: (locationX)}]}> X: {locationX}, Y: {locationY}  </Text> */}
            {/* <View style={[ styles.pointStyle, { top: 115.98, left: 259.98 } ]}/>
            <View style={[ styles.pointStyle, { top: 228.98, left: 67.99 } ]}/>
            <View style={[ styles.pointStyle, { top: 83.98, left: 27 } ]}/>
            <View style={[ styles.pointStyle, { top: 158, left: 62.98 } ]}/> */}

{/*             <FlatList 
              data={DATA}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => {
                return(
                  <>
                    <View style={[ styles.pointStyle, { top: item.xP, left: item.yP } ]}/>
                    <View style={{ flex: 1, backgroundColor: 'transparent'}} {...panResponder.panHandlers}/>
                  </>
                )
              }}
            /> */}
            { 
               DATA.map(( item ) => {
                return (
                  <>
                   {/*  <Text style={[{ top: (locationY - 15), left: (locationX)}]}> X: {locationX}, Y: {locationY} {item.id} </Text> */}
                    <View key={item.id} style={[ styles.pointStyle, { top: item.xP, left: item.yP } ]}/>
                  </>
                );
         
              })
            }
           {/*  <View style={[ styles.pointStyle, { top: locationY, left: locationX } ]}/> */}
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