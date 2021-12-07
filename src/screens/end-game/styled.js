import { ImageBackground } from 'react-native';
import styled from 'styled-components';

export const EndGameWrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const EndGameBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
