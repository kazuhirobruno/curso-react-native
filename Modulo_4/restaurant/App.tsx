import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const min = 0,
    max = 10
  
  const [counter, setCounter] = useState<number>(0)
    
  const handleChangeCounter = (param: ('-' | '+')) => {
    if (param === '-') {
      setCounter(prevstate => prevstate - 1)
    } else {
      setCounter(prevstate => prevstate + 1)
    }
  }

  const checkDisableMin = () => counter === min
  const checkDisableMax = () => counter === max

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterTitle}>Pessoas no restaurante</Text>
      <View style={styles.counterArea}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      {counter === max && (
        <Text style={styles.alert}>Restaurante está no seu limite de pessoas</Text>
      )}

      <View style={styles.buttonArea}>
        <TouchableOpacity style={[styles.button, checkDisableMax() ? styles.disabled : null]} disabled={checkDisableMax()} onPress={() => handleChangeCounter('+')}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, , checkDisableMin() ? styles.disabled : null]} disabled={checkDisableMin()} onPress={() => handleChangeCounter('-')}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  counterTitle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  counterArea: {
    gap: 20,
  },
  counter: {
    backgroundColor: '#111',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 16,
    borderRadius: 8,
  },
  alert: {
    backgroundColor: '#F6B135',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#027AFF',
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
