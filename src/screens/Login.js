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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
import {useNavigation} from '@react-navigation/native';

import Spinner from 'react-native-loading-spinner-overlay/lib';
import ToastManager, {Toast} from 'toastify-react-native';

import axios from 'axios';

const Header = styled.View`
  flex: 2;
  background-color: blue;
`;

const Eclipse = styled.View`
  background-color: #d9d9d9;
  height: 600px;
  width: 600px;
  border-radius: 400px;
  top: -360px;
  right: 100px;
  position: relative;
`;

const Body2 = styled.View`
  width: 100%;
  padding: 0 0 0 3%;
  display: flex;
`;

const Footer = styled.View`
  flex: 1;
`;

const Container = styled.View`
  flex-direction: column;
`;

const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #707070;
  left: 30px;
  top: -330px;
`;

const Password = styled.View`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 305px;
  height: 49px;
  left: 30px;
  margin-top: 10px;
  margin-bottom: 27px;
  top: -330px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Input = styled.TextInput`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 305px;
  height: 49px;
  left: 30px;
  margin-top: 10px;
  margin-bottom: 27px;
  top: -330px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CheckBoxContainer = styled.View`
  top: -330px;
  left: 33px;
  flex-direction: row;
  align-items: center;
`;
const RememberMeText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height */

  color: #707070;
`;

const ButtonN = styled.TouchableOpacity`
  width: 304px;
  height: 49px;
  left: 30px;
  background: #3c5898;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  top: -310px;
`;
const ButtonText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;
  top: 13px;
  color: #ffffff;
`;

const ForgetPasswordText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #3c5898;
  top: -290px;
`;

const Separator = styled.View`
  width: 340px;
  border: 0.8px solid #d6d6d6;
  top: -250px;
  left: 20px;
`;
const FooterText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #707070;
  top: -230px;
`;

const FooterLink = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;
  text-decoration-line: underline;

  color: #3c5898;
  text-align: center;
  top: -230px;
`;

const ErrorCon = styled.View`
  top: -350px;
  left: 40px;
  width: 60%;
  height: 7%;
  background-color: red;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  padding: 0 0 0 10px;
`;

const ErrorText = styled.Text`
  color: white;
  font-size: 18px;
`;

export default function Login() {
  const [show, setShow] = useState(true);
  const Navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleSubmit = async e => {
    setSpin(true);
    // setError(false);
    console.log('mobileNumber', mobileNumber);
    e.preventDefault();
    try {
      const data2 = await axios.post(
        'http://192.168.1.77:3000/auth/login',
        {
          mobileNumber: mobileNumber,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      if (data2) console.log(data2.data);

      if (data2) {
        Navigation.navigate('TabRoute');
        setSpin(false);
        Toast.info('Login Succsesfull', 'top');
      }
    } catch (err) {
      setError(true);
      setSpin(false);
      Toast.error('Invalid Credentials', 'top');
    }
  };

  const handlesave = e => {
    console.log(e);
  };

  return (
    <SafeAreaView>
      <Spinner visible={spin} textContent={'Loading...'} />
      <ToastManager />
      <ScrollView>
        <View style={{width: '100%'}}>
          <Container>
            <Eclipse>
              <Image
                style={{width: 87, height: 92, top: 450, left: 250}}
                source={require('../asset/logo.png')}
              />
            </Eclipse>

            <Body2>
              <Label>Mobile Number</Label>
              <Input
                name="email"
                style={{color: 'black', paddingLeft: 15}}
                onChangeText={e => {
                  setMobileNumber(e);
                }}
              />

              <Label>Password</Label>

              <Password>
                <TextInput
                  name="password"
                  secureTextEntry={show}
                  style={{color: 'black', width: 260, height: 80}}
                  onChangeText={e => {
                    setPassword(e);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShow(!show);
                  }}>
                  {show ? (
                    <Icon name="eye-slash" color={'#707070'} size={20} />
                  ) : (
                    <Icon name="eye" color={'#707070'} size={20} />
                  )}
                </TouchableOpacity>
              </Password>

              {/* {error ?  : ''} */}

              <CheckBoxContainer>
                <CheckBox
                  style={{marginRight: 10}}
                  onClick={() => {
                    setIsChecked(!isChecked);
                  }}
                  // isChecked={isChecked}

                  //leftText={"CheckBox"}
                />
                <RememberMeText>Remember me</RememberMeText>
              </CheckBoxContainer>

              <ButtonN>
                <TouchableOpacity onPress={e => handleSubmit(e)}>
                  <ButtonText>Sign In</ButtonText>
                </TouchableOpacity>
              </ButtonN>

              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('ForogotPassword');
                }}>
                <ForgetPasswordText>Forget Password?</ForgetPasswordText>
              </TouchableOpacity>
              <Separator />
              <FooterText>Don’t have an account ?</FooterText>
              <FooterLink
                onPress={() => {
                  Navigation.navigate('Register');
                }}>
                Register
              </FooterLink>
            </Body2>
            {/* <Footer>

 </Footer> */}
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
