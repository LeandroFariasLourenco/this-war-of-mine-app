import { ImageBackground } from 'react-native';
import styled from 'styled-components';

export const CharacterFooterWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px 5px;
`;

export const GenericBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StatsWrapper = styled(ImageBackground)`
  padding: 10px;
  margin-top: 20px;
  width: 45%;
`;

export const FooterColumn = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatCircleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatCircle = styled(ImageBackground)`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;

export const StatLabel = styled.Text`
  color: white;
  font-size: 32px;
  letter-spacing: 2px;
  margin-left: 5px;
  text-align: center;
  text-transform: uppercase;
`;
