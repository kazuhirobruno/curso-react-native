import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import Feather from '@expo/vector-icons/Ionicons'

import StackRoutes from './stackRoutes';
import Home from '../pages/Home';
import About from '../pages/About';
import Contato from '../pages/Contact';
import CustomDrawer from '../components/CustomDrawer';
import { SafeAreaView } from 'react-native';

const Drawer = createDrawerNavigator()

export default function Routes () {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#00dae4',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
      }}
    >
      <Drawer.Screen 
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Início'
        }}
      />
      <Drawer.Screen 
        name="About"
        component={About}
      />
      <Drawer.Screen
        name="Contact"
        component={Contato}
      />
    </Drawer.Navigator>
  )
}