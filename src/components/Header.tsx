/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
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
        <Icon name="share-social-outline" size={32} color={'white'}></Icon>
      </IconCon>
    </HeadCon>
  );
}

export default Header;
