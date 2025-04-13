import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feather from '@expo/vector-icons/Ionicons'

import Home from './src/pages/Home';
import About from './src/pages/About';
import Contato from './src/pages/Contact';


const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
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
          name="Home"
          component={Home}
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
    </NavigationContainer>
  )
}