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
import OTPTextInput from 'react-native-otp-textinput';
import {useNavigation} from '@react-navigation/native';
const Header = styled.View`
  flex: 2;
  //   background-color:red;
  height: 200px;
  padding: 0 0 0 4%;
`;

const Body = styled.View`
  flex: 3;
  padding: 30px;
`;

const Body2 = styled.View`
  flex: 3;
  padding: 0 0 0 4%;
  margin-bottom: 60px;
  margin-top: 0px;
`;

const Footer = styled.View`
  flex: 2;
  //   background-color: red;
  height: 230px;
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
  font-size: 18px;
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

const OTPText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #888888;
  width: 292px;
  left: 41px;
`;

export default function Register2() {
  const [otpOpen, setOtpOpen] = useState(true);
  const [phoneNum, SetPhoneNum] = useState('+9471453536');

  const Navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
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
              <SelectedCircle>
                <SelectedCircleTxt>2</SelectedCircleTxt>
              </SelectedCircle>
              <Line></Line>
              <Circle>
                <CircleTxt>3</CircleTxt>
              </Circle>
            </CircleContainer>
          </Header>
          <Body2>
            <Label>Country</Label>
            <TextInput />

            <Label>Mobile Number</Label>
            <TextInput placeholder="+94" />
            <OTPText>
              We will send one time password (OTP) to this mobile number.
            </OTPText>
            {otpOpen ? (
              <ButtonO
                onPress={() => {
                  //

                  Navigation.navigate('Register3');
                }}>
                <ButtonText>Get OTP</ButtonText>
              </ButtonO>
            ) : (
              ''
            )}
          </Body2>
          {otpOpen ? (
            <Footer>
              <Separator />
              <FooterText>Already have an account ?</FooterText>
              <FooterLink
                onPress={() => {
                  Navigation.navigate('Login');
                }}>
                Login
              </FooterLink>
            </Footer>
          ) : (
            <Footer>
              <View style={styles.footerbg}>
                <View>
                  <Pressable
                    onPress={() => {
                      setOtpOpen(true);
                    }}>
                    <Text style={styles.close}>X</Text>
                  </Pressable>
                </View>
                <View style={styles.otp}>
                  <Text style={styles.otpText}>
                    {' '}
                    {`Enter OTP sent to ${phoneNum}`}
                  </Text>
                  <OTPTextInput
                    ref={e => (this.otpInput = e)}
                    handleTextChange={e => {
                      otpChange(e);
                    }}
                    tintColor={'white'}
                    offTintColor={'white'}
                    textInputStyle={{
                      borderColor: 'black',
                      borderWidth: 4,
                      borderRadius: 5,
                      backgroundColor: 'white',
                    }}
                    containerStyle={{width: '100%'}}
                  />
                </View>
                <View>
                  <Text style={styles.footerText2}>
                    Didn’t get any ?{' '}
                    <Text style={styles.linkTest2}> RESEND OTP</Text>{' '}
                  </Text>
                </View>
              </View>
            </Footer>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  close: {
    position: 'relative',
    right: 20,
    textAlign: 'right',
    color: 'white',
    fontWeight: 500,
    top: 10,
  },
  footerbg: {
    backgroundColor: '#3C5898',
    height: 900,
    borderRadius: 25,
    marginVertical: -40,
  },
  otp: {
    zIndex: 3,
    width: 300,
    position: 'relative',
    top: 20,
    backgroundColor: '#3C5898',
    left: 38,
  },
  otpText: {
    color: 'white',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: 10,
  },
  footerText2: {
    alignContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginVertical: 30,
    fontWeight: 600,
  },
  linkTest2: {
    textDecorationLine: 'underline',
    fontWeight: 600,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
