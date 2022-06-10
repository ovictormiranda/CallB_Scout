import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface Props {
  xPosition?: string;
  yPosition?: string;
  type?: string;
}

export const Container = styled(RectButton)<Props>``;

