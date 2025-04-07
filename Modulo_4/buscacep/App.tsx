import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';

import api from './src/services/api';
import CepInterface from './interfaces/CepInterface';

export default function App() {
  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState<null | CepInterface>(null)
  const inputRef = useRef<TextInput>(null)

  const limpar = () => {
    setCep('')
    setCepUser(null)
    inputRef.current?.focus()
  }

  const buscar = async () => {
    if (cep === '') {
      alert('Digite um CEP válido')
      setCep('')
      return
    }

    try {
      const response = await api.get(`/${cep}/json`)
      setCepUser(response.data)
      Keyboard.dismiss()
    }
    catch(error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex: 12345678"
          value={cep}
          onChangeText={(e) => setCep(e)}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity 
          style={[styles.botao, { backgroundColor: '#1d75cd' }]}
          onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.botao, {backgroundColor: '#cd3e1d' }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,

  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5
  },
  botaoText: {
    fontSize: 20,
    color: '#fff'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 22,
  },
});
