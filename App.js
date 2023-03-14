/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ForgetPassword2 from './src/screens/ForgetPassword2';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Router from './src/Router/Route';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Register from './src/screens/Register';
import Head from './src/components/Header';
import SingleProductScreen from './src/screens/singleProductScreen';
import Register1 from './src/screens/Register1';
import Register2 from './src/screens/Register2';
import Register3 from './src/screens/Register3';
import Login from './src/screens/Login';

const MyIcon1 = <Icon name="comments" size={30} color="#900" />;

function App() {
  return <Router />;
}

export default App;
