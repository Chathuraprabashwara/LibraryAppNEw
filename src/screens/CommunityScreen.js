import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import { Image } from "native-base";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import DropShadow from "react-native-drop-shadow";

import Header from "../components/CommunityHeader";
import Post from "../components/Post";

const HeaderCon = styled.View`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 95px;
  background-color: #fff;
  align-items: center;
  position: relative;
  z-index: 999;
  elevation: 2;
`;
const LogoCon = styled.View`
  padding: 0 0 0 15px;
`;
const LText = styled.Text`
  color: #3d3d3d;
  font-size: 22px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 34px;
`;

const BText = styled.Text`
  color: #29487d;
`;
const IconCon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SingleIcon = styled.View`
  width: 35px;
  height: 35px;
  margin: 0 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  border-radius: 7px;
`;

const EnText = styled.Text`
  color: #3d3d3d;
  font-weight: bold;
`;

const ThoughtCon = styled.View`
  width: 100%;
  height: 86px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0;
  margin: 5px 0 0 0;
  position: relative;
`;
const AvatarCon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;

  border-radius: 41px;
  background-color: #ffd88d;
  overflow: hidden;
`;
const MessegeCon = styled.View``;

const StyledTextInput = styled.TextInput`
  height: 37px;
  width: 287px;
  border: 1px solid #a0a0a0;
  border-radius: 15px;
  padding: 0 15px 0 10px;
`;

// Objects

const Avatar = [require("../asset/A1.png")];

const Post = [
  {
    proPic: require("../asset/propic.png"),
    userName: "Anjula Weerasinghe",
    time: 3,
    postImage: require("../asset/postImage.png"),
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
];
const CommunityScreen = () => {
  const [textInputValue, setTextInputValue] = React.useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <Header />
      <ScrollView>
        <ThoughtCon>
          <AvatarCon>
            <NativeBaseProvider>
              {/* <Image source={Avatar} /> */}
            </NativeBaseProvider>
          </AvatarCon>
          <MessegeCon>
            <StyledTextInput
              onChangeText={(text) => setTextInputValue(text)}
              value={textInputValue}
              placeholder='Share Your Thoughts!'
            />
          </MessegeCon>
        </ThoughtCon>

        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityScreen;
