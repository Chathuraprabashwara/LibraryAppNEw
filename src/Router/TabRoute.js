import {View, Text} from 'react-native';

import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Shelf from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import BookRack from '../screens/BookRack';
import SingleProductScreen from '../screens/SingleProductScreen';
import Library from '../screens/Library';

const TabRoute = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          height: 68,
          paddingBottom: 10,
          paddingTop: 15,
        },
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;

          if (route.name === 'Community') {
            iconName = focused ? 'people-outline' : 'people-outline';
            color = focused ? '#29487D' : '#6D6D6D';
          } else if (route.name === 'Library') {
            iconName = focused ? 'book-outline' : 'book-outline';
            color = focused ? '#29487D' : '#6D6D6D';
          } else if (route.name === 'Rack') {
            iconName = focused ? 'bookshelf' : 'bookshelf';
            color = focused ? '#29487D' : '#6D6D6D';
          } else if (route.name === 'Home') {
            iconName = focused ? 'ios-home-outline' : 'ios-home-sharp';
            color = focused ? '#6D6D6D' : '#29487D';
          }

          return <Ionic name={iconName} size={28} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Library"
        component={Library}
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
