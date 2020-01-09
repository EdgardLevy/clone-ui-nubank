import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  /* background: red; */
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Animated.Image)`
  z-index: 5;
  background: #8b10ae;
  /* width: 52px;
  height: 42px; */
`;

export const TitleRoof = styled.View`
  background: #8b10ae;
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 4;
`;

export const Title = styled(Animated.Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  position: absolute;
  /* margin-left: 8px; */
`;
