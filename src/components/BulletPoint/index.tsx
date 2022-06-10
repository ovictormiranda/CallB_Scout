import React from 'react';
import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
} from './styles';
import theme from '../../styles/theme';

interface Props extends RectButtonProps {
  id: number;
  xPosition?: number;
  yPosition?: number;
  type?: string;
}

export function BulletPoint({
  id,
  xPosition,
  yPosition,
  type,
  onPress,
}: Props){
  return (
    <Container
      id={id}
      xPosition={xPosition}
      yPosition={yPosition}
      onPress={onPress}
      type={type}
      style={[ styles.pointStyle, { top: xPosition, left: yPosition } ]}
    >
    </Container>
  );
}

const styles = StyleSheet.create({
  pointStyle: {
    height: 22,
    width: 22,
    marginTop: 5,
    position: 'absolute',
    borderRadius: 11,
    backgroundColor: '#00FF30'
  }
})