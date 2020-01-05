import React, {useEffect, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
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
  let offset = 0;
  let opened = false;
  const translateY = new Animated.Value(0);
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      opened = false;

      const {translationY} = event.nativeEvent;
      offset += translationY;

      if (translationY >= 80) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onArrowClick() {
    opened = false;
    if (offset >= 80) {
      opened = true;
      translateY.setOffset(0);
      translateY.setValue(380);
    } else {
      translateY.setOffset(0);
      translateY.setValue(0);
    }
    offset = 0;
    Animated.timing(translateY, {
      toValue: opened ? 0 : 380,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      offset = opened ? 0 : 380;
      translateY.setOffset(offset);
      translateY.setValue(0);
    });
  }

  return (
    <Container>
      <Header translateY={translateY} onArrowClick={onArrowClick} />
      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
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
                Transferência de R$ 3.775,00 recebida de Edgard Levy às 9:00
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
