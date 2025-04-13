import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()
  
  const navegaDetalhes = () => {
    navigation.navigate('Detalhes')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Button title={"Ir para detalhes"} onPress={navegaDetalhes}/>
      <Button title={'Abrir Drawer'} onPress={() => navigation.openDrawer() } />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00'
  }
})