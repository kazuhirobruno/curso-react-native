import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'

export default function Contato() {
  const navigation = useNavigation()

  const handleHome = () => {
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <SafeAreaView>
      <Text>Contato</Text>
      <Button title="voltar home" onPress={handleHome} />
    </SafeAreaView>
  )
}