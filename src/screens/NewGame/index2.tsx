import React, { useEffect, useState } from 'react';
import { ImageBackground, PanResponder, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import bg from '../../assets/game_bg.png';
import field from '../../assets/FIELD.png';
import { ButtonMenu } from '../../components/ButtonMenu';

import {
  Container,
  Wrapper,

  LeftSide,
  Content,
  Focused,
  
  ActionPoint,
  SelectedPlayer,
  ImagePlayer,
  BioPlayer,
  BioPlayerVisitant,
  Name,
  FirstName,
  LastName,
  BioInfo,
  BioInfoVisitant,
  
  TeamContent,
  TeamInfo,
  Shield,
  ShieldVisitant,
  WrapperNameScore,
  TeamName,
  Score,
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
  TimeSection,
  TimeInMinutesSection,
  FooterVisitantSide,

} from './styles';

import { PlayerOnGame } from '../../components/PlayerOnGame';
import { ActionButton } from '../../components/ActionButton';

import { positiveActions, negativeActions, time, timeInMinutes } from '../../Utils/actions';
import { basicPlayers } from '../../Utils/basicPlayers';
import theme from '../../styles/theme';
import { TimeButton } from '../../components/TimeButton';
import { useNavigation } from '@react-navigation/native';

interface Action {
  id: number;
  xPosition: number;
  yPosition: number;
}

interface TypeAction {   //positive or negative option
  key: string;
  nonId: string;
  name: string;
  type: string;
}

interface PosOrNeg {   //positive or negative option
  key: string;
  nonId: string;
  name: string;
  type: string;
}

interface TimeProps {
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
  scouts: {
    positives: {
      shortPass: any[],
      kick: any[],
      cornerKick: any[],
      cross: any[],
      foul: any[],
      tackle: any[],
      stolenBall: any[],
      passBLines: any[],
      firstBall: any[],
      secondBall: any[],
    },
    negatives: {
      shortPass: any[],
      kick: any[],
      cornerKick: any[],
      cross: any[],
      foul: any[],
      tackle: any[],
      looseBall: any[],
      passBLines: any[],
      firstBall: any[],
      secondBall: any[],
    }
  }
}



export function NewGame({ action }: PosOrNeg) {

  const navigation = useNavigation<any>();

  function handleLockerRoom() {
    navigation.navigate('LockerRoom')
  }
  
  const visitantPlayersFiltered = basicPlayers.filter(item => item.team === 'Botafogo');
  const homePlayersFiltered = basicPlayers.filter(item => item.team === 'Real Madrid');
  
  const [actionByPlayer, setActionByPlayer] = useState<any[]>([]);
  const [actionSelected, setActionSelected] = useState<TypeAction>({key: '', nonId: '', name: '', type: ''}); // to know if is a positive or negative action
  
  const [timeSelected, setTimeSelected] = useState<TimeProps>({key: 'firstHalf', name: '1° T'});
  const [periodInMinutesSelected, setPeriodInMinutesSelected] = useState<TimeProps>({key: 'zeroToFifteen', name: '0 - 15'});

 
  const [playerSelected, setPlayerSeleted] = useState<PlayerProps>(basicPlayers[0]);
  const [homePlayerSelected, setHomePlayerSeleted] = useState<PlayerProps>(basicPlayers[0]);
  const [visitantPlayerSelected, setVisitantPlayerSeleted] = useState<PlayerProps>(basicPlayers[0]);

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
  
  
  //CAPUTAR JOGADOR SELECIONADO E A ACÇÃO SELECIONADA E FILTRAR
  //CLICAR NOS JOGADOR E NA AÇÃO E SÓ APARECER AS BOLINHAS DESSA DETERMINADA AÇÃO DESTE JOGADOR
  
  function handleTimeSelected(time: TimeProps) {
    const currentTime = time;
    setTimeSelected(currentTime);
    console.log('tempo tempo tempo tempooo')
    console.log(currentTime);
    console.log(timeSelected)
  }

  function handlePeriodInMinutesSelected(inMinutes: TimeProps) {
    const currentPeriodInMinutes = inMinutes;
    setPeriodInMinutesSelected(currentPeriodInMinutes);
  }
  
  function handleActionSelected(action: TypeAction, player: PlayerProps) {
    setLocationXFourA(0)
    setLocationYFourA(0)
    const actionAtual = action;
    setActionSelected(actionAtual);

    switch (action.type) {
      case 'positive':
        switch (action.key) {
          case 'Posi_shortPass':
            const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
            setActionByPlayer(tentei)
            break;
            
          case 'Posi_kick':
            const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
            setActionByPlayer(tentei1)
            break;
              
          case 'Posi_cornerKick':
            const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
            setActionByPlayer(tentei2)
            break;
                
          case 'Posi_cross':
            const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
            setActionByPlayer(tentei3)
            break;
                  
          case 'Posi_foul':
            const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
            setActionByPlayer(tentei4)
            break;

          case 'Posi_tackle':
            const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
            setActionByPlayer(tentei5)
            break;
                
          case 'Posi_stolenBall':
            const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
            setActionByPlayer(tentei6)
            break;
                  
          case 'Posi_passBetweenLines':
            const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
            setActionByPlayer(tentei7)
            break;
                    
          case 'Posi_firstBall':
            const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
            setActionByPlayer(tentei8)
            break;
              
          case 'Posi_secondBall':
            const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
            setActionByPlayer(tentei9)
            break;
        }
        break;
            
      case 'negative':
        switch (action.key) {
          case 'Nega_shortPass':
            const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
            setActionByPlayer(tentei)
            break;
            
          case 'Nega_kick':
            const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
            setActionByPlayer(tentei1)
            break;
              
          case 'Nega_cornerKick':
            const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
            setActionByPlayer(tentei2)
            break;
                
          case 'Nega_cross':
            const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
            setActionByPlayer(tentei3)
            break;
                  
          case 'Nega_foul':
            const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
            setActionByPlayer(tentei4)
            break;

          case 'Nega_tackle':
            const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
            setActionByPlayer(tentei5)
            break;
                
          case 'Nega_looseBall':
            const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
            setActionByPlayer(tentei6)
            break;
                  
          case 'Nega_passBetweenLines':
            const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
            setActionByPlayer(tentei7)
            break;
                    
          case 'Nega_firstBall':
            const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
            setActionByPlayer(tentei8)
            break;
              
          case 'Nega_secondBall':
            const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
            setActionByPlayer(tentei9)
            break;
        }
        break;
    }
    
    //handleNewActionFourA(locationXFourA, locationYFourA, playerSelected, actionSelected)
  }
  
  
  function handlePlayerSelected(player: PlayerProps) {


    const playerAtual = player; //esta const foi criada para que o state receba o valor atual do setState

    player.team === 'Botafogo' && setVisitantPlayerSeleted(playerAtual)
    player.team === 'Real Madrid' && setHomePlayerSeleted(playerAtual)
    
    setPlayerSeleted(playerAtual)

    
    switch (actionSelected.type) {
      case 'positive':
        switch (actionSelected.key) {
          case 'Posi_shortPass':
            console.log(playerSelected)
            console.log(player)
            const tentei = player.scouts.positives.shortPass.map(item => item)
            setActionByPlayer(tentei)
            break;
            
          case 'Posi_kick':
            const tentei1 = player.scouts.positives.kick.map(item => item)
            setActionByPlayer(tentei1)
            break;
              
          case 'Posi_cornerKick':
            const tentei2 = player.scouts.positives.cornerKick.map(item => item)
            setActionByPlayer(tentei2)
            break;
                
          case 'Posi_cross':
            const tentei3 = player.scouts.positives.cross.map(item => item)
            setActionByPlayer(tentei3)
            break;
                  
          case 'Posi_foul':
            const tentei4 = player.scouts.positives.foul.map(item => item)
            setActionByPlayer(tentei4)
            break;

          case 'Posi_tackle':
            const tentei5 = player.scouts.positives.tackle.map(item => item)
            setActionByPlayer(tentei5)
            break;
                
          case 'Posi_stolenBall':
            const tentei6 = player.scouts.positives.stolenBall.map(item => item)
            setActionByPlayer(tentei6)
            break;
                  
          case 'Posi_passBetweenLines':
            const tentei7 = player.scouts.positives.passBLines.map(item => item)
            setActionByPlayer(tentei7)
            break;
                    
          case 'Posi_firstBall':
            const tentei8 = player.scouts.positives.firstBall.map(item => item)
            setActionByPlayer(tentei8)
            break;
              
          case 'Posi_secondBall':
            const tentei9 = player.scouts.positives.secondBall.map(item => item)
            setActionByPlayer(tentei9)
            break;
        }
        break;
            
      case 'negative':
        switch (actionSelected.key) {
          case 'Nega_shortPass':
            const tentei = player.scouts.negatives.shortPass.map(item => item)
            setActionByPlayer(tentei)
            break;
            
          case 'Nega_kick':
            const tentei1 = player.scouts.negatives.kick.map(item => item)
            setActionByPlayer(tentei1)
            break;
              
          case 'Nega_cornerKick':
            const tentei2 = player.scouts.negatives.cornerKick.map(item => item)
            setActionByPlayer(tentei2)
            break;
                
          case 'Nega_cross':
            const tentei3 = player.scouts.negatives.cross.map(item => item)
            setActionByPlayer(tentei3)
            break;
                  
          case 'Nega_foul':
            const tentei4 = player.scouts.negatives.foul.map(item => item)
            setActionByPlayer(tentei4)
            break;

          case 'Nega_tackle':
            const tentei5 = player.scouts.negatives.tackle.map(item => item)
            setActionByPlayer(tentei5)
            break;
                
          case 'Nega_looseBall':
            const tentei6 = player.scouts.negatives.looseBall.map(item => item)
            setActionByPlayer(tentei6)
            break;
                  
          case 'Nega_passBetweenLines':
            const tentei7 = player.scouts.negatives.passBLines.map(item => item)
            setActionByPlayer(tentei7)
            break;
                    
          case 'Nega_firstBall':
            const tentei8 = player.scouts.negatives.firstBall.map(item => item)
            setActionByPlayer(tentei8)
            break;
              
          case 'Nega_secondBall':
            const tentei9 = player.scouts.negatives.secondBall.map(item => item)
            setActionByPlayer(tentei9)
            break;
        }
        break;
    }
  }


  function handleNewActionFourA(
    locationXFourA: any,
    locationYFourA: any, 
    playerSelected: PlayerProps,
    actionSelected: TypeAction, 
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
      
    const newAction = {
      id: new Date().getTime(),
      zone: 'FourA',
      xPosition: locationXFourA,
      yPosition: locationYFourA,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }    
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('Jogar bola, jogador!')
              console.log(playerSelected)
              
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)

              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);


              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              setActionByPlayer(tentei1)

              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }        

  



  function handleNewActionFourB(
    locationXFourB: any,
    locationYFourB: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'FourB',
      xPosition: locationXFourB,
      yPosition: locationYFourB,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              const player = playerSelected;
              setPlayerSeleted(player);

              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              const player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              const player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              const player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              const player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              const player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              const player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              const player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              const player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              const player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              const player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              const player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              const player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              const player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              const player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              const player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              const player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              const player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              const player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              const player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }

  function handleNewActionFourC(
    locationXFourC: any, 
    locationYFourC: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'FourC',
      xPosition: locationXFourC,
      yPosition: locationYFourC,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }



  function handleNewActionThreeA(
    locationXThreeA: any, 
    locationYThreeA: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'ThreeA',
      xPosition: locationXThreeA,
      yPosition: locationYThreeA,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }

  function handleNewActionThreeB(
    locationXThreeB: any,
    locationYThreeB: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'ThreeB',
      xPosition: locationXThreeB,
      yPosition: locationYThreeB,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }

  function handleNewActionThreeC(
    locationXThreeC: any,
    locationYThreeC: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps,
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'ThreeC',
      xPosition: locationXThreeC,
      yPosition: locationYThreeC,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }


  
  function handleNewActionTwoA(
    locationXTwoA: any, 
    locationYTwoA: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'TwoA',
      xPosition: locationXTwoA,
      yPosition: locationYTwoA,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      }
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }

  function handleNewActionTwoB(
    locationXTwoB: any,
    locationYTwoB: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'TwoB',
      xPosition: locationXTwoB,
      yPosition: locationYTwoB,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }

  function handleNewActionTwoC(
    locationXTwoC: any, 
    locationYTwoC: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'TwoC',
      xPosition: locationXTwoC,
      yPosition: locationYTwoC,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      }
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }



  function handleNewActionOneA(
    locationXOneA: any,
    locationYOneA: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
      ) {
  const newAction = {
    id: new Date().getTime(),
    zone: 'OneA',
    xPosition: locationXOneA,
    yPosition: locationYOneA,
    type: actionSelected.type,
    key: actionSelected.key,
    time: {
      actionTime: time.name,
      actionPeriodInMinutes: periodInMinutes.name 
    } 
  }
  
  if (newAction.xPosition && newAction.yPosition !== 0 ) {
    switch (actionSelected.type) {
      case 'positive':
        switch (actionSelected.key) {
          case 'Posi_shortPass':
            playerSelected.scouts.positives.shortPass.push(newAction)
            let player = playerSelected;
            setPlayerSeleted(player);
            console.log('ta aqui');
            
            console.log(playerSelected);
            console.log('e aqui');
            const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
            setActionByPlayer(tentei)
            console.log(actionByPlayer)
            break;
            
          case 'Posi_kick':
            playerSelected.scouts.positives.kick.push(newAction)
            let player1 = playerSelected;
            setPlayerSeleted(player1);
            
            const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
            setActionByPlayer(tentei1)
            break;
              
          case 'Posi_cornerKick':
            playerSelected.scouts.positives.cornerKick.push(newAction)
            let player2 = playerSelected;
            setPlayerSeleted(player2);

            const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
            setActionByPlayer(tentei2)
            break;
                
          case 'Posi_cross':
            playerSelected.scouts.positives.cross.push(newAction)
            let player3 = playerSelected;
          
            setPlayerSeleted(player3);
            const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
            setActionByPlayer(tentei3)
            break;
                  
          case 'Posi_foul':
            playerSelected.scouts.positives.foul.push(newAction)
            let player4 = playerSelected;
          
            setPlayerSeleted(player4);
            const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
            setActionByPlayer(tentei4)
            break;

          case 'Posi_tackle':
            playerSelected.scouts.positives.tackle.push(newAction)
            let player5 = playerSelected;
          
            setPlayerSeleted(player5);
            const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
            setActionByPlayer(tentei5)
            break;
                
          case 'Posi_stolenBall':
            playerSelected.scouts.positives.stolenBall.push(newAction)
            let player6 = playerSelected;
          
            setPlayerSeleted(player6);
            const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
            setActionByPlayer(tentei6)
            break;
                  
          case 'Posi_passBetweenLines':
            playerSelected.scouts.positives.passBLines.push(newAction)
            let player7 = playerSelected;
          
            setPlayerSeleted(player7);
            const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
            setActionByPlayer(tentei7)
            break;
                    
          case 'Posi_firstBall':
            playerSelected.scouts.positives.firstBall.push(newAction)
            let player8 = playerSelected;
          
            setPlayerSeleted(player8);
            const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
            setActionByPlayer(tentei8)
            break;
              
          case 'Posi_secondBall':
            playerSelected.scouts.positives.secondBall.push(newAction)
            let player9 = playerSelected;
          
            setPlayerSeleted(player9);
            const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
            setActionByPlayer(tentei9)
            break;
        }
        break;
            
      case 'negative':
        switch (actionSelected.key) {
          case 'Nega_shortPass':
            playerSelected.scouts.negatives.shortPass.push(newAction)
            let player = playerSelected;
            setPlayerSeleted(player);
            console.log('ta aqui');
            
            console.log(playerSelected);
            console.log('e aqui');
            const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
            setActionByPlayer(tentei)
            console.log(actionByPlayer)
            break;
            
          case 'Nega_kick':
            playerSelected.scouts.negatives.kick.push(newAction)
            let player1 = playerSelected;
            setPlayerSeleted(player1);
            
            const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
            setActionByPlayer(tentei1)
            break;
              
          case 'Nega_cornerKick':
            playerSelected.scouts.negatives.cornerKick.push(newAction)
            let player2 = playerSelected;
            setPlayerSeleted(player2);

            const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
            setActionByPlayer(tentei2)
            break;
                
          case 'Nega_cross':
            playerSelected.scouts.negatives.cross.push(newAction)
            let player3 = playerSelected;
          
            setPlayerSeleted(player3);
            const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
            setActionByPlayer(tentei3)
            break;
                  
          case 'Nega_foul':
            playerSelected.scouts.negatives.foul.push(newAction)
            let player4 = playerSelected;
          
            setPlayerSeleted(player4);
            const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
            setActionByPlayer(tentei4)
            break;

          case 'Nega_tackle':
            playerSelected.scouts.negatives.tackle.push(newAction)
            let player5 = playerSelected;
          
            setPlayerSeleted(player5);
            const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
            setActionByPlayer(tentei5)
            break;
                
          case 'Nega_looseBall':
            playerSelected.scouts.negatives.looseBall.push(newAction)
            let player6 = playerSelected;
          
            setPlayerSeleted(player6);
            const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
            setActionByPlayer(tentei6)
            break;
                  
          case 'Nega_passBetweenLines':
            playerSelected.scouts.negatives.passBLines.push(newAction)
            let player7 = playerSelected;
          
            setPlayerSeleted(player7);
            const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
            setActionByPlayer(tentei7)
            break;
                    
          case 'Nega_firstBall':
            playerSelected.scouts.negatives.firstBall.push(newAction)
            let player8 = playerSelected;
          
            setPlayerSeleted(player8);
            const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
            setActionByPlayer(tentei8)
            break;
              
          case 'Nega_secondBall':
            playerSelected.scouts.negatives.secondBall.push(newAction)
            let player9 = playerSelected;
          
            setPlayerSeleted(player9);
            const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
            setActionByPlayer(tentei9)
            break;
        }
        break;
      }
    }
  }

  function handleNewActionOneB(
    locationXOneB: any, 
    locationYOneB: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'OneB',
      xPosition: locationXOneB,
      yPosition: locationYOneB,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
  }

  function handleNewActionOneC(
    locationXOneC: any, 
    locationYOneC: any,
    playerSelected: PlayerProps,
    actionSelected: TypeAction,
    time: TimeProps,
    periodInMinutes: TimeProps, 
    ) {
    const newAction = {
      id: new Date().getTime(),
      zone: 'OneC',
      xPosition: locationXOneC,
      yPosition: locationYOneC,
      type: actionSelected.type,
      key: actionSelected.key,
      time: {
        actionTime: time.name,
        actionPeriodInMinutes: periodInMinutes.name 
      } 
    }
    
    if (newAction.xPosition && newAction.yPosition !== 0 ) {
      switch (actionSelected.type) {
        case 'positive':
          switch (actionSelected.key) {
            case 'Posi_shortPass':
              playerSelected.scouts.positives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.positives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Posi_kick':
              playerSelected.scouts.positives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.positives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Posi_cornerKick':
              playerSelected.scouts.positives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.positives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Posi_cross':
              playerSelected.scouts.positives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.positives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Posi_foul':
              playerSelected.scouts.positives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.positives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Posi_tackle':
              playerSelected.scouts.positives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.positives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Posi_stolenBall':
              playerSelected.scouts.positives.stolenBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.positives.stolenBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Posi_passBetweenLines':
              playerSelected.scouts.positives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.positives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Posi_firstBall':
              playerSelected.scouts.positives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.positives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Posi_secondBall':
              playerSelected.scouts.positives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.positives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
              
        case 'negative':
          switch (actionSelected.key) {
            case 'Nega_shortPass':
              playerSelected.scouts.negatives.shortPass.push(newAction)
              let player = playerSelected;
              setPlayerSeleted(player);
              console.log('ta aqui');
              
              console.log(playerSelected);
              console.log('e aqui');
              const tentei = playerSelected.scouts.negatives.shortPass.map(item => item)
              setActionByPlayer(tentei)
              console.log(actionByPlayer)
              break;
              
            case 'Nega_kick':
              playerSelected.scouts.negatives.kick.push(newAction)
              let player1 = playerSelected;
              setPlayerSeleted(player1);
              
              const tentei1 = playerSelected.scouts.negatives.kick.map(item => item)
              setActionByPlayer(tentei1)
              break;
                
            case 'Nega_cornerKick':
              playerSelected.scouts.negatives.cornerKick.push(newAction)
              let player2 = playerSelected;
              setPlayerSeleted(player2);

              const tentei2 = playerSelected.scouts.negatives.cornerKick.map(item => item)
              setActionByPlayer(tentei2)
              break;
                  
            case 'Nega_cross':
              playerSelected.scouts.negatives.cross.push(newAction)
              let player3 = playerSelected;
            
              setPlayerSeleted(player3);
              const tentei3 = playerSelected.scouts.negatives.cross.map(item => item)
              setActionByPlayer(tentei3)
              break;
                    
            case 'Nega_foul':
              playerSelected.scouts.negatives.foul.push(newAction)
              let player4 = playerSelected;
            
              setPlayerSeleted(player4);
              const tentei4 = playerSelected.scouts.negatives.foul.map(item => item)
              setActionByPlayer(tentei4)
              break;

            case 'Nega_tackle':
              playerSelected.scouts.negatives.tackle.push(newAction)
              let player5 = playerSelected;
            
              setPlayerSeleted(player5);
              const tentei5 = playerSelected.scouts.negatives.tackle.map(item => item)
              setActionByPlayer(tentei5)
              break;
                  
            case 'Nega_looseBall':
              playerSelected.scouts.negatives.looseBall.push(newAction)
              let player6 = playerSelected;
            
              setPlayerSeleted(player6);
              const tentei6 = playerSelected.scouts.negatives.looseBall.map(item => item)
              setActionByPlayer(tentei6)
              break;
                    
            case 'Nega_passBetweenLines':
              playerSelected.scouts.negatives.passBLines.push(newAction)
              let player7 = playerSelected;
            
              setPlayerSeleted(player7);
              const tentei7 = playerSelected.scouts.negatives.passBLines.map(item => item)
              setActionByPlayer(tentei7)
              break;
                      
            case 'Nega_firstBall':
              playerSelected.scouts.negatives.firstBall.push(newAction)
              let player8 = playerSelected;
            
              setPlayerSeleted(player8);
              const tentei8 = playerSelected.scouts.negatives.firstBall.map(item => item)
              setActionByPlayer(tentei8)
              break;
                
            case 'Nega_secondBall':
              playerSelected.scouts.negatives.secondBall.push(newAction)
              let player9 = playerSelected;
            
              setPlayerSeleted(player9);
              const tentei9 = playerSelected.scouts.negatives.secondBall.map(item => item)
              setActionByPlayer(tentei9)
              break;
          }
          break;
      }
    }
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
      handleNewActionFourA(locationXFourA, locationYFourA, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionFourB(locationXFourB, locationYFourB, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionFourC(locationXFourC, locationYFourC, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionThreeA(locationXThreeA, locationYThreeA, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionThreeB(locationXThreeB, locationYThreeB, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionThreeC(locationXThreeC, locationYThreeC, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionTwoA(locationXTwoA, locationYTwoA, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionTwoB(locationXTwoB, locationYTwoB, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionTwoC(locationXTwoC, locationYTwoC, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionOneA(locationXOneA, locationYOneA, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionOneB(locationXOneB, locationYOneB, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
      handleNewActionOneC(locationXOneC, locationYOneC, playerSelected, actionSelected, timeSelected, periodInMinutesSelected)
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
            <Content
              isActive={playerSelected.team !== 'Botafogo'}
            >
              <Focused
                isActive={playerSelected.team !== 'Botafogo'}
              >
                <SelectedPlayer>
                    <ImagePlayer source={{  uri: homePlayerSelected.bioInfo.picture }} resizeMode="contain"/>
                  <BioPlayer>
                    <Name>
                      <FirstName>{homePlayerSelected.bioInfo.firstName}</FirstName>
                      <LastName>{homePlayerSelected.bioInfo.lastName}</LastName>
                    </Name>
                    <BioInfo>
                      34 years old{'\n'}
                      {homePlayerSelected.bioInfo.height} cm{'\n'}
                      {homePlayerSelected.bioInfo.foot} Foot
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
                  <View style={styles.playerList}>
                    <ScrollView>
                      {
                        homePlayersFiltered.map((item) => (
                          <PlayerOnGame 
                            key={item.id}
                            position={item.positionInitials} 
                            name={item.bioInfo.name}
                            onPress={() => handlePlayerSelected(item)}
                            isActive={playerSelected.id == item.id}
                            />
                        ))
                      }
                    </ScrollView>
                  </View>
                  
                </TeamContent>
              </Focused>
            </Content>
            <Footer>
              <ButtonMenu 
                title='LOCKER ROOM'
                onPress={() => {}}
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
                      onPress={() => handleActionSelected(item, playerSelected)}
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
                  {
                    (playerSelected && actionSelected) && 
                  
                  <><FourthZone>
                      <FourA>
                        <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderFourA.panHandlers}>
{/*                           <ActionPoint
                            style={{ top: locationYFourA, left: locationXFourA }}
                            isPositive={actionSelected.type === 'positive' ? true : false} 
                          /> */}

                          {
                              actionByPlayer.map((item) => (item.zone === 'FourA') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            ))
                          }
                        </View>
                      </FourA>

                      <FourB>
                        <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderFourB.panHandlers}>
{/*                           <ActionPoint
                            style={{ top: locationYFourB, left: locationXFourB }}
                            isPositive={actionSelected.type === 'positive' ? true : false} 
                          /> */}
                          
                          {actionByPlayer.map((item) => (item.zone === 'FourB') && (
                            <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                            </View>
                          )
                          )}
                        </View>
                      </FourB>

                      <FourC>
                        <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderFourC.panHandlers}>
{/*                           <ActionPoint 
                            style={{ top: locationYFourC, left: locationXFourC }} 
                            isPositive={actionSelected.type === 'positive' ? true : false} 
                          /> */}

                          {actionByPlayer.map((item) => (item.zone === 'FourC') && (
                            <View key={item.id}>
                              <ActionPoint 
                                style={{ top: item.yPosition, left: item.xPosition }} 
                                isPositive={item.type === 'positive' ? true : false} 
                              />
                            </View>
                          )
                          )}
                        </View>
                      </FourC>
                    </FourthZone><ThirdZone>
                        <ThreeA>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderThreeA.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYThreeA, left: locationXThreeA }} 
                              isPositive={actionSelected.type === 'positive' ? true : false} 
                            />
 */}
                            {actionByPlayer.map((item) => (item.zone === 'ThreeA') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </ThreeA>
                        <ThreeB>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderThreeB.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYThreeB, left: locationXThreeB }} 
                              isPositive={actionSelected.type === 'positive' ? true : false}
                            /> */}

                            {actionByPlayer.map((item) => (item.zone === 'ThreeB') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </ThreeB>
                        <ThreeC>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderThreeC.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYThreeC, left: locationXThreeC }} 
                              isPositive={actionSelected.type === 'positive' ? true : false} 
                            /> */}
                            {actionByPlayer.map((item) => (item.zone === 'ThreeC') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </ThreeC>
                      </ThirdZone><SecondZone>
                        <TwoA>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderTwoA.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYTwoA, left: locationXTwoA }} 
                              isPositive={actionSelected.type === 'positive' ? true : false} 
                            /> */}
                            {actionByPlayer.map((item) => (item.zone === 'TwoA') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </TwoA>
                        <TwoB>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderTwoB.panHandlers}>
{/*                             <ActionPoint
                             style={{ top: locationYTwoB, left: locationXTwoB }} 
                             isPositive={actionSelected.type === 'positive' ? true : false} 
                            /> */}

                            {actionByPlayer.map((item) => (item.zone === 'TwoB') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </TwoB>
                        <TwoC>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderTwoC.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYTwoC, left: locationXTwoC }}
                              isPositive={actionSelected.type === 'positive' ? true : false}   
                            /> */}
                            {actionByPlayer.map((item) => (item.zone === 'TwoC') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </TwoC>
                      </SecondZone>
                      <FirstZone>
                        <OneA>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderOneA.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYOneA, left: locationXOneA }} 
                              isPositive={actionSelected.type === 'positive' ? true : false}   
                            /> */}
                            {actionByPlayer.map((item) => (item.zone === 'OneA') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </OneA>
                        <OneB>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderOneB.panHandlers}>
{/*                             <ActionPoint
                              style={{ top: locationYOneB, left: locationXOneB }}
                              isPositive={actionSelected.type === 'positive' ? true : false} 
                            /> */}
                            {actionByPlayer.map((item) => (item.zone === 'OneB') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </OneB>
                        <OneC>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} {...panResponderOneC.panHandlers}>
{/*                             <ActionPoint 
                              style={{ top: locationYOneC, left: locationXOneC }} 
                              isPositive={actionSelected.type === 'positive' ? true : false} 
                            /> */}
                            
                            {actionByPlayer.map((item) => (item.zone === 'OneC') && (
                              <View key={item.id}>
                                <ActionPoint
                                  style={{ top: item.yPosition, left: item.xPosition }}
                                  isPositive={item.type === 'positive' ? true : false} 
                                />
                              </View>
                            )
                            )}
                          </View>
                        </OneC>
                      </FirstZone></>

                  }
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
          <Content
            isActive={playerSelected.team === 'Botafogo'}
          >
              <Focused
                isActive={playerSelected.team === 'Botafogo'}
              >
                <SelectedPlayer>
                  <BioPlayerVisitant>
                    <Name>
                      <FirstName>{visitantPlayerSelected.bioInfo.firstName}</FirstName>
                      <LastName>{visitantPlayerSelected.bioInfo.lastName}</LastName>
                    </Name>
                    <BioInfoVisitant>
                      34 years old{'\n'}
                      {visitantPlayerSelected.bioInfo.height} cm{'\n'}
                      {visitantPlayerSelected.bioInfo.foot} Foot
                    </BioInfoVisitant>
                  </BioPlayerVisitant>
                  <ImagePlayer 
                    source={{ uri: visitantPlayerSelected.bioInfo.picture }} 
                    resizeMode="contain"
                  />

                </SelectedPlayer>
                <TeamContent>
                  <TeamInfo>
                    <WrapperNameScore>
                      <Score>1</Score>
                      <TeamName>Real Madrid</TeamName>
                    </WrapperNameScore>
                    <ShieldVisitant></ShieldVisitant>
                  </TeamInfo>
                  <View style={styles.playerList}>
                    <ScrollView>
                      {
                        visitantPlayersFiltered?.map((item) => (
                          <PlayerOnGame
                          key={item.id}
                          position={item.positionInitials} 
                          name={item.bioInfo.name}
                          onPress={() => handlePlayerSelected(item)}
                          isActive={playerSelected.id == item.id}
                        />
                        )
                        )
                      }
                    </ScrollView>
                </View>
                  
                </TeamContent>
              </Focused>
            </Content>
            <FooterVisitantSide>
              <TimeSection>
                <FlatList 
                  data={time} 
                  keyExtractor={item => item.key}
                  horizontal
                  renderItem={({ item }) => {
                    return (
                      <TimeButton 
                        title={item.name}
                        onPress={() => handleTimeSelected(item)}
                        isActive={timeSelected.key === item.key}
                      />
                    );
                  }
                  }
                />
              </TimeSection>
              <TimeInMinutesSection>
                <FlatList 
                    data={timeInMinutes} 
                    keyExtractor={item => item.key}
                    horizontal
                    renderItem={({ item }) => {
                      return (
                        <TimeButton 
                          title={item.name}
                          onPress={() => handlePeriodInMinutesSelected(item)}
                          isActive={periodInMinutesSelected.key === item.key}
                        />
                      );
                    }
                    }
                  />
              </TimeInMinutesSection>
            </FooterVisitantSide>
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
