import React, {useEffect} from 'react';
import logo from '~/assets/Nubank_Logo.png';
import {Animated} from 'react-native';
import {Container, Top, Logo, Title, Icon} from './styles';

import {TouchableWithoutFeedback} from 'react-native';
export default function Header({translateY, onArrowClick}) {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <TouchableWithoutFeedback onPress={onArrowClick}>
      <Container
        style={{
          opacity: opacity,
        }}>
        <Top>
          <Logo source={logo} />
          <Title>Edgard</Title>
        </Top>

        <Icon
          name="keyboard-arrow-down"
          size={24}
          color="#FFF"
          style={{
            transform: [
              {
                rotate: translateY.interpolate({
                  inputRange: [0, 380],
                  outputRange: ['0deg', '-180deg'],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
