import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()

  const navegaSobre = () => {
    navigation.navigate('About', { nome: 'Teste', email: 'teste@teste.com' })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Button title="Ir para sobre" onPress={navegaSobre}></Button>
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