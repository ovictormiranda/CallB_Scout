import React from 'react';

import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic  
} from '@expo-google-fonts/roboto-condensed';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import {
  Roboto_400Regular
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
