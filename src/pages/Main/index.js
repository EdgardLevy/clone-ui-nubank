import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Tabs from '~/components/Tabs';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 250.284,98</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 375,00 recebida de Edgard Levy às 9:00
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
