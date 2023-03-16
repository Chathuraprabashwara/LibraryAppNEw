import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const TextCon = styled.View`
  position: absolute;
  bottom: 70px;
`;
const SplashText = styled.Text`
  font-family: 'RussoOne-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 29px;
  text-align: center;

  color: #cecece;
`;

const Splash = () => {
  const [isGo, setGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        Navigation.navigate('Login');
        setGo(false);
      }, 3000);
    }
  });
  return (
    <Container>
      <Image source={require('../asset/LogoSplash.png')} />
      <TextCon>
        <SplashText>MY LIBRARY</SplashText>
      </TextCon>
    </Container>
  );
};

export default Splash;
