import {View, Text} from 'react-native';

import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Shelf from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import BookRack from '../screens/BookRack';
import SingleProductScreen from '../screens/SingleProductScreen';

const TabRoute = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Rack') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'ios-home-outline' : 'ios-home-sharp';
          }

          return <Ionic name={iconName} size={size} color={'#000'} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={CommunityScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Rack"
        component={BookRack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Single"
        component={SingleProductScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;
