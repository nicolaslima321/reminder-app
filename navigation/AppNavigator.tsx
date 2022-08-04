import React, { useLayoutEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNavigationContainerRef, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import CustomDrawer from '../components/menu/CustomDrawer';

import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator(): React.ReactElement {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: "rgba(0, 0, 0, .2)",
        drawerInactiveBackgroundColor: "#0e1f55",
        drawerLabelStyle: {
          color: 'white',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} /> }
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Icon name="home" color={'white'} size={18}/>
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person-outline" color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export const navigationRef = createNavigationContainerRef();
