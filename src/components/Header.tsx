/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Share,
} from 'react-native';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

const HeadCon = styled.View`
  width: 100%;
  height: 90px;
  background-color: #3c5898;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleCon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  margin: 0 0 0 20px;
`;

const IconCon = styled.View`
  position: absolute;
  right: 30px;
  bottom: 20px;
`;

const ArowCon = styled.View``;

const title = ['The Book Thife'];
function Header(): JSX.Element {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          get(window.location.herf);
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <HeadCon>
      <TitleCon>
        <ArowCon>
          <TouchableOpacity>
            <Icon name="arrow-back-outline" size={32} color={'white'} />
          </TouchableOpacity>
        </ArowCon>
        <Title>{title}</Title>
      </TitleCon>

      <IconCon>
        <TouchableOpacity onPress={onShare}>
          <Icon name="share-social-outline" size={32} color={'white'}></Icon>
        </TouchableOpacity>
      </IconCon>
    </HeadCon>
  );
}

export default Header;
