import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'

import { useRoute, useNavigation } from "@react-navigation/native";

export default function About() {
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome
    })
  }, [navigation])


  return (
    <SafeAreaView style={styles.container}>
      <Text>About</Text>
      <Text>{route.params?.email}</Text>
      <Text>{route.params?.nome}</Text>
      <Button title="Contatos" onPress={() => navigation.navigate('Contact')}></Button>
      <Button title="Voltar" onPress={() => navigation.goBack()}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})