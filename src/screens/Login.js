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
  flex: 2;
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
    top:-310px;
`;
const ButtonText = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
/* identical to box height */

text-align: center;
top:13px;
color: #FFFFFF;
`;

const ForgetPasswordText = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #3C5898;
top:-290px;
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
text-align:center;
color: #707070;
top:-230px;
`;

const FooterLink = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
/* identical to box height */

text-align: center;
text-decoration-line: underline;

color: #3C5898;
text-align:center;
top:-230px;
`;
export default function Login() {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Container>
        <Eclipse>
          <Image
            style={{width: 87, height: 92, top: 450, left: 250}}
            source={require('../asset/logo.png')}
          />
        </Eclipse>

        <Body2>
          <Label>Mobile Number</Label>
          <Input />

          <Label>Password</Label>

          <Password>
            <TextInput
              secureTextEntry={show}
              style={{color: 'black', width: 260, height: 30}}
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
          <CheckBoxContainer>
            <CheckBox
              style={{marginRight: 10, checkBoxColor: 'red'}}
              // onClick={() => {
              //   setIsChecked(!isChecked);
              // }}
              // isChecked={isChecked}
              checkBoxColor="#3C5898"
              //leftText={"CheckBox"}
            />
            <RememberMeText>Remember me</RememberMeText>
          </CheckBoxContainer>
               <ButtonN><ButtonText>Sign In</ButtonText></ButtonN>
               <ForgetPasswordText>Forget Password?</ForgetPasswordText>
                <Separator/>
                <FooterText>Don’t have an account ?</FooterText>
                <FooterLink>Register</FooterLink>
               
        </Body2>
        {/* <Footer>

 </Footer> */}
      </Container>
    </View>
  );
}
