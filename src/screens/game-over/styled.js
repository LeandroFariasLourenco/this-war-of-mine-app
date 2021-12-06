import { ImageBackground } from 'react-native';
import styled from 'styled-components';

export const GameOverBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const GameOverWrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.55);
`;