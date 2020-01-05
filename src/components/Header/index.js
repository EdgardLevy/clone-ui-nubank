import React from 'react';
import logo from '~/assets/Nubank_Logo.png';
import {Container, Top, Logo, Title, Icon} from './styles';

import {TouchableWithoutFeedback} from 'react-native';
export default function Header({translateY, onArrowClick}) {
  return (
    <TouchableWithoutFeedback onPress={onArrowClick}>
      <Container>
        <Top>
          <Logo source={logo} />
          <Title>Edgard</Title>
        </Top>

        <Icon
          name="keyboard-arrow-down"
          size={20}
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
