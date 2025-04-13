import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home';
import About from './src/pages/About';
import Contato from './src/pages/Contact';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: 'Início',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='About'
          component={About}
          options={{
            title: 'Sobre'
          }}
        />
        <Stack.Screen 
          name='Contact'
          component={Contato}
          options={{
            title: 'Contato'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}