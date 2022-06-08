import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

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
    </Navigator>
  )
}