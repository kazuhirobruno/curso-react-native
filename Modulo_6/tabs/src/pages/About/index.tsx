import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About</Text>
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