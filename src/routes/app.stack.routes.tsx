import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { NewGame } from '../screens/NewGame';
import { NewGame2 } from '../screens/NewGame2';
import { LockerRoom } from '../screens/LockerRoom';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({headerShown: false})}
      initialRouteName="Home"
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="NewGame"
        component={NewGame}
      />
      <Screen 
        name="NewGame2"
        component={NewGame2}
      />
      <Screen 
        name="LockerRoom"
        component={LockerRoom}
      />
    </Navigator>
  )
}