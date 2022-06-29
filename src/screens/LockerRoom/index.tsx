import React, { useState } from 'react';
import { ImageBackground, PanResponder, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import bg from '../../assets/backgroundVestiario.png';
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

  NewRightSideOldMiddle,
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

  NewMiddleOldRightSide,
  TimeSection,
  TimeInMinutesSection,
  HeaderMiddle,
  MainMiddle,
  FooterMiddle,
  TitleMiddle,
  SubtitleMiddle,

} from './styles';

import { PlayerOnGame } from '../../components/PlayerOnGame';
import { ActionButton } from '../../components/ActionButton';

import { positiveActions, negativeActions, time, timeInMinutes } from '../../Utils/actions';
import { basicPlayers } from '../../Utils/basicPlayers';
import theme from '../../styles/theme';
import { TimeButton } from '../../components/TimeButton';

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


export function LockerRoom({ action }: PosOrNeg) {
  
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
  
  
  //CAPUTAR JOGADOR SELECIONADO E A ACÇÃO SELECIONADA E FILTRAR
  //CLICAR NOS JOGADOR E NA AÇÃO E SÓ APARECER AS BOLINHAS DESSA DETERMINADA AÇÃO DESTE JOGADOR
  
  function handleTimeSelected(time: TimeProps) {
    const currentTime = time;
    setTimeSelected(currentTime);
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
                />
              <ButtonMenu 
                title='END GAME'
                color='#FF5464'
                />
            </Footer>
          </LeftSide>
          <NewMiddleOldRightSide>
            <HeaderMiddle>
              <TitleMiddle>STATISTICS</TitleMiddle>
              <SubtitleMiddle>LOCKER ROOM</SubtitleMiddle>
            </HeaderMiddle>
            <MainMiddle>

            </MainMiddle>
            
            <FooterMiddle>
              <ButtonMenu 
                title='Change Team'
              />
              <ButtonMenu 
                title='Home'
                color='#FF5464'
              />
              <ButtonMenu 
                title='Back to game'
                color='#FF5464'
              />
            </FooterMiddle>
          </NewMiddleOldRightSide>

          <NewRightSideOldMiddle>
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
                  
                  <>
                  <FourthZone>
                      <FourA>
                        <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>

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
                        <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>         
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
                        <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                    </FourthZone>
                    <ThirdZone>
                        <ThreeA>
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} >

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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} >
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                          <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
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
                      </FirstZone>
                    </>
                  }
                </Field>
              </ImageBackground> 
            </FieldWrapper>
            <NegativeActions>
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
            </NegativeActions>
          </NewRightSideOldMiddle>
          
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
