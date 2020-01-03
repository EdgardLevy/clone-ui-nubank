import React from 'react';
import logo from '~/assets/Nubank_Logo.png';
import {Container, Top, Logo, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native';
export default function Header({opened = false, onArrowClick}) {
  return (
    <TouchableWithoutFeedback onPress={onArrowClick}>
      <Container>
        <Top>
          <Logo source={logo} />
          <Title>Edgard</Title>
        </Top>

        <Icon
          name={opened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={20}
          color="#FFF"
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
