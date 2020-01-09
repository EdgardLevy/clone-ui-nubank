import React, {useEffect} from 'react';
import {Animated, TouchableOpacity, Text} from 'react-native';
import logo from '~/assets/Nubank_Logo.png';

import {Container, Content, Logo, TitleRoof, Title} from './styles';

export default function Splash({navigation}) {
  const logoSize = new Animated.Value(3);
  const logoX = new Animated.Value(0);
  const titleX = new Animated.Value(-50);
  useEffect(() => {
    function animate() {
      Animated.sequence([
        Animated.timing(logoSize, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(logoX, {
          toValue: -30,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(titleX, {
          toValue: 50,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(() => {
          navigation.navigate('Main');
        }, 1500);
      });
    }

    setTimeout(animate, 1500);
  }, [logoSize, logoX, navigation, titleX]);

  return (
    <Container>
      <Content>
        <TitleRoof />
        <Logo
          source={logo}
          style={{
            transform: [
              {
                scale: logoSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
              {translateX: logoX},
            ],
          }}
        />
        <Title
          style={{
            transform: [{translateX: titleX}],
          }}>
          ¯\_(ツ)_/¯
        </Title>
      </Content>
    </Container>
  );
}
