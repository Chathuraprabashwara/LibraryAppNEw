import React, {useState} from 'react';
import styled from 'styled-components';
import {
  View,
  Text,
  Image,
  Picker,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  VirtualizedList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Header = styled.View`
  flex: 2;
  //   background-color:red;
  height: 200px;
`;

const Body = styled.View`
  flex: 3;
  padding: 0 0 0 3.7%;
`;

const Body2 = styled.View`
  flex: 3;
  margin-bottom: 60px;
  margin-top: 0px;
  padding: 0 0 0 4%;
`;

const Footer = styled.View`
  flex: 2;
  //   background-color: red;
  height: 230px;
  padding: 0 0 0 4%;
`;

const HeaderTxt = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 31px;
  position: relative;
  left: 30px;
  bottom: -30px;
  color: black;
`;

const Circle = styled.View`
  border: 2px solid #3c5898;
  width: 37px;
  border-radius: 25px;
  height: 37px;
  background-color: #fff;
`;

const SelectedCircle = styled.View`
  border: 2px solid #3c5898;
  width: 37px;
  border-radius: 25px;
  height: 37px;
  background-color: #3c5898;
`;

const Line = styled.View`
  border: 1px solid #3c5898;
  width: 45px;
  height:1px
  background-color: #fff;
  position:relative;
  top:17px;
`;

const CircleContainer = styled.View`
  flex-direction: row;
  position: relative;
  top: 80px;
  left: 85px;
  padding: 0 0 0 3%;
`;

const CircleTxt = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  position: relative;
  left: 11px;
  bottom: -8px;
`;
const SelectedCircleTxt = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  position: relative;
  left: 11px;
  bottom: -8px;
  color: white;
`;

const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #707070;
  left: 30px;
`;

const TextInput = styled.TextInput`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 305px;
  height: 49px;
  left: 30px;
  margin-top: 10px;
  margin-bottom: 27px;
`;

const ButtonN = styled.TouchableOpacity`
  width: 304px;
  height: 49px;
  left: 30px;
  background: #3c5898;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-top: 60px;
`;

const ButtonO = styled.TouchableOpacity`
  width: 304px;
  height: 49px;
  left: 30px;
  background: #3c5898;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */
  color: #ffff;
  top: 14px;
  position: relative;
  text-align: center;
`;

const Separator = styled.View`
  width: 340px;
  border: 0.8px solid #d6d6d6;
  top: 55px;
  left: 20px;
`;

const FooterText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  top: 75px;
  color: #707070;
  text-align: center;
`;

const FooterLink = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 27px;
  /* identical to box height */
  top: 75px;
  text-align: center;
  text-decoration-line: underline;

  color: #3c5898;
`;

const CircleIcon = styled.View`
  top: 11px;
  left: 10px;
`;

export default function Register1() {
  const Navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header>
            <HeaderTxt>Register</HeaderTxt>
            <CircleContainer>
              <SelectedCircle>
                <SelectedCircleTxt>1</SelectedCircleTxt>
              </SelectedCircle>
              <Line></Line>
              <Circle>
                <CircleTxt>2</CircleTxt>
              </Circle>
              <Line></Line>
              <Circle>
                <CircleTxt>3</CircleTxt>
              </Circle>
            </CircleContainer>
          </Header>
          <Body>
            <Label>First Name*</Label>
            <TextInput />

            <Label>Sure Name*</Label>
            <TextInput
              onChangeText={e => {
                alert(e);
              }}
            />
            <Label>Email*</Label>
            <TextInput />
          </Body>
          <Footer>
            <ButtonN
              onPress={() => {
                // setNext(true)

                Navigation.navigate('Register2');
              }}>
              <ButtonText>Next</ButtonText>
            </ButtonN>

            <Separator />
            <FooterText>Already have an account ?</FooterText>
            <FooterLink
              onPress={() => {
                Navigation.navigate('Login');
              }}>
              Login
            </FooterLink>
          </Footer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
