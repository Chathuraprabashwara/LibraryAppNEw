import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import DropShadow from "react-native-drop-shadow";
import { SafeAreaView } from "react-native";

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

const CommunityHeader = () => {
  return (
    <SafeAreaView style={{ elevation: 2 }}>
      <DropShadow
        style={{
          shadowColor: "rgba(0,0,0,0.4)",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 2,
        }}
      >
        <HeaderCon>
          <LogoCon>
            <LText>
              MY<BText>LIBRARY</BText>
            </LText>
          </LogoCon>
          <IconCon>
            <DropShadow
              style={{
                shadowColor: "rgba(0,0,0,0.4)",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <TouchableOpacity>
                <SingleIcon>
                  <Icon name='search-outline' size={24} color={"#3D3D3D"} />
                </SingleIcon>
              </TouchableOpacity>
            </DropShadow>
            <DropShadow
              style={{
                shadowColor: "rgba(0,0,0,0.4)",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <TouchableOpacity>
                <SingleIcon>
                  <EnText>EN</EnText>
                </SingleIcon>
              </TouchableOpacity>
            </DropShadow>
            <DropShadow
              style={{
                shadowColor: "rgba(0,0,0,0.4)",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <TouchableOpacity>
                <SingleIcon>
                  <FaIcon
                    name='facebook-messenger'
                    size={24}
                    color={"#3D3D3D"}
                  />
                </SingleIcon>
              </TouchableOpacity>
            </DropShadow>
          </IconCon>
        </HeaderCon>
      </DropShadow>
    </SafeAreaView>
  );
};

export default CommunityHeader;
