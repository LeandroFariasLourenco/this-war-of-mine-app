import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.55);
`;
