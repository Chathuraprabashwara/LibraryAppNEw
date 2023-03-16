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
import CheckBox from 'react-native-check-box';
const Header = styled.View`
  flex: 2;
  //   background-color:red;
  height: 200px;
  color: black;
`;

const Body = styled.View`
  flex: 3;
  padding: 0 0 0 4%;
`;

const Body2 = styled.View`
  flex: 3;
  margin-bottom: 60px;
  margin-top: 0px;
  height: 300px;
`;

const Footer = styled.View`
  flex: ;
  //   background-color: red;
  height: 230px;
  margin-top: 280px;
`;

const Footer2 = styled.View`
  flex: ;
  //   background-color: red;
  height: 230px;
  margin-top: 200px;
`;

const HeaderTxt = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 31px;
  position: relative;
  left: 30px;
  color: black;
  bottom: -30px;
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
const CircleIcon = styled.View`
  top: 11px;
  left: 10px;
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

const CheckBoxContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const AgrementText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height */

  color: #707070;
`;

const AgrementText2 = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height */

  color: #3c5898;
`;

const TermCondition = styled.View`
  position: absolute;
  width: 354px;
  height: 649px;
  left: 15px;
  top: 59px;

  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
const TermConditionText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 34px;
  text-align: center;
  /* identical to box height */
  left: 65px;

  color: #000000;
`;

const CloseCircle = styled.TouchableOpacity`
  width: 35px;
  height: 41px;
  right: 3px;
  // top: 115px;

  background: rgba(217, 217, 217, 0.7);
  border-radius: 100px;
`;

const CloseSign = styled.Text`
  font-weight: 600;
  font-size: 27px;
  left: 8px;
  top: 4px;
`;

const TermConditionContainer = styled.View`
flex-direction:row
justify-content:space-between
`;

const TermAndConditionPara = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: justify;
  width: 305px;
  left: 17px;
  margin-top: 2px;
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
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  top: 75px;
  text-align: center;
  text-decoration-line: underline;

  color: #3c5898;
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
export default function Register3() {
  const Navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {!isChecked ? (
            <View>
              <Header>
                <HeaderTxt>Register</HeaderTxt>
                <CircleContainer>
                  <Circle>
                    <CircleIcon>
                      <Icon name="check" color={'blue'} size={12} />
                    </CircleIcon>
                  </Circle>
                  <Line></Line>
                  <Circle>
                    <CircleIcon>
                      <Icon name="check" color={'blue'} size={12} />
                    </CircleIcon>
                  </Circle>
                  <Line></Line>
                  <SelectedCircle>
                    <SelectedCircleTxt>3</SelectedCircleTxt>
                  </SelectedCircle>
                </CircleContainer>
              </Header>
              <Body>
                <Label>Password</Label>
                <TextInput />
                <Label>Re Type Password</Label>
                <TextInput />
                <CheckBoxContainer>
                  <CheckBox
                    style={{marginRight: 10, checkBoxColor: 'red'}}
                    onClick={() => {
                      setIsChecked(!isChecked);
                    }}
                    isChecked={isChecked}
                    checkBoxColor="#3C5898"
                    //leftText={"CheckBox"}
                  />
                  <AgrementText>
                    I agree with{' '}
                    <AgrementText2>Terms and Conditions</AgrementText2>{' '}
                  </AgrementText>
                </CheckBoxContainer>

                <ButtonN
                  onPress={() => {
                    // setNext(true)

                    Navigation.navigate('TabRoute');
                  }}>
                  <ButtonText>Next</ButtonText>
                </ButtonN>
              </Body>
            </View>
          ) : (
            <Body2>
              <TermCondition>
                <TermConditionContainer>
                  <TermConditionText>Terms and Conditions</TermConditionText>
                  <CloseCircle
                    onPress={() => {
                      setIsChecked(!isChecked);
                    }}>
                    <CloseSign>X</CloseSign>
                  </CloseCircle>
                </TermConditionContainer>
                <TermAndConditionPara>
                  1. This page (together with the documents referred to on it)
                  tells you the terms of use (the “Terms of Use”) on which you
                  may make use of our “my library” application for mobile
                  devices (the “App”). Please read these Terms of Use carefully
                  before you download, install or use the App. By downloading,
                  installing or using the App, you indicate that you accept
                  these Terms of Use and that you agree to abide by them. Your
                  download, installation or use of the App constitutes your
                  acceptance of these Terms of Use which takes effect on the
                  date on which you download, install or use the App. If you do
                  not agree with these Terms of Use, you should cease
                  downloading, installing or using the App immediately.
                </TermAndConditionPara>
                <TermAndConditionPara>
                  2. The App is operated by ‘my library’ (SHENGEN private Ltd),
                  SriLanka (and we refer to ourselves as “we”, “us” or “our”).
                  We own and operate the App on our own behalf.
                </TermAndConditionPara>
                <TermAndConditionPara>
                  3. We reserve the right to change these Terms of Use at any
                  time without notice to you by posting changes on the ‘my
                  library’’ website (the “Website”) or by updating the App to
                  incorporate the new terms of use. You are responsible for
                  regularly reviewing information posted online to obtain timely
                </TermAndConditionPara>
              </TermCondition>
            </Body2>
          )}

          {isChecked ? (
            <Footer>
              <FooterText>Already have an account ?</FooterText>
              <FooterLink>Login</FooterLink>
            </Footer>
          ) : (
            <Footer2>
              <Separator />
              <FooterText>Already have an account ?</FooterText>
              <FooterLink>Login</FooterLink>
            </Footer2>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
