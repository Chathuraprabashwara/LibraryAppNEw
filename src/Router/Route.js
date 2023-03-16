/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Register from '../screens/Register1';
import Register2 from '../screens/Register2';
import Register3 from '../screens/Register3';
import ForgotPassword from '../screens/ForgetPassword2';
import TabRoute from './TabRoute';
const Route = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register2"
          component={Register2}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register3"
          component={Register3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForogotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabRoute"
          component={TabRoute}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
