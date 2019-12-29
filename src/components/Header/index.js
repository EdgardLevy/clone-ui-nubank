import React from 'react';
import logo from '~/assets/Nubank_Logo.png';
import {Container, Top, Logo, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native';
export default function Header({arrowDirection = 'down', onArrowClick}) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Edgard</Title>
      </Top>
      <TouchableWithoutFeedback onPress={onArrowClick}>
        <Icon
          name={
            arrowDirection === 'down'
              ? 'keyboard-arrow-down'
              : 'keyboard-arrow-up'
          }
          size={20}
          color="#FFF"
        />
      </TouchableWithoutFeedback>
    </Container>
  );
}
