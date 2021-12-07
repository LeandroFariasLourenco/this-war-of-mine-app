import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const Character = styled.View`
  flex: 0.8;
  width: 100%;
  align-items: center;
  padding-top: 50px;
`;

export const Overlay = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  right: 0;
`;

export const Background = styled(ImageBackground)`
  width: 100%;
  ${(props) => props.height && `height: ${props.height}`};
`;

export const GenericBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const CharacterFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;
