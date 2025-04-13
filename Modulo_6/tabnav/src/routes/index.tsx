import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feather from '@expo/vector-icons/Ionicons'

import StackRoutes from './stackRoutes';
import Home from '../pages/Home';
import About from '../pages/About';
import Contato from '../pages/Contact';


const Tab = createBottomTabNavigator()

export default function Routes () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#202225',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
        name="HomeStack"
        component={StackRoutes}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Sobre"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name={"document"} color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Contato"
        component={Contato}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name={"call"} color={color} size={size} />
        }}
      />
    </Tab.Navigator>      
  )
}