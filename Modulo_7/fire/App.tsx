import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import { FormUsers } from './src/FormUser';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FormUsers />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
