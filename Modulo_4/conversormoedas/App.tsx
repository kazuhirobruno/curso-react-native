import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';

import { PickerItem } from './src/Picker';
import { api } from './src/services/api';
import Moedas from './src/Interfaces/Moedas';

export default function App() {
  const [moedas, setMoedas] = useState<Moedas[]|[]>([])
  const [loading, setLoading] = useState(true)
  const [moedaSelecionada, setMoedaSelecionada] = useState<null | string>(null)
  const [moedaBValor, setMoedaBValor] = useState("")
  const [valorMoeda, setValorMoeda] = useState<null | string>(null)
  const [valorConvertido, setValorConvertido] = useState<null | string>(null)

  useEffect(() => {
    const loadMoedas = async () => {
      const response = await api.get('all')
      let arrayMoedas = Array<Moedas>()
      Object.keys(response.data).map( key => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })
      setMoedas(arrayMoedas)
      setMoedaSelecionada(arrayMoedas[0].value)
      setLoading(false)
    }

    loadMoedas()
  }, [])

  if (loading === true) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#fff" size='large' />
      </View>
    )
  }

  const converter = async () => {
    if (moedaBValor === '' || !moedaSelecionada) {
      return;
    }

    const response = await api.get(`/all/${moedaSelecionada}-BRL`)
    let resultado = response.data[moedaSelecionada].ask * parseFloat(moedaBValor)

    setValorConvertido(`${resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`)
    setValorMoeda(moedaBValor)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem 
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda: string) => setMoedaSelecionada(moeda)}
        />
      </View>
      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
        <TextInput 
          placeholder='Ex: 1.50'
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(valor: string) => setMoedaBValor(valor)}
          value={moedaBValor}
        />
      </View>

      <TouchableOpacity style={styles.botaoArea} onPress={converter}>
        <Text style={styles.botaoText}>Converter</Text>
      </TouchableOpacity>

      {valorConvertido !== '' && (
        <View style={styles.areaResultado}>
          <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
          <Text style={{ fontSize: 18, fontWeight: '500', margin: 8, color: '#000' }}>Corresponde a</Text>
          <Text style={styles.valorConvertido}>{valorConvertido}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#101215',
    flex: 1,
    paddingTop: 45,
  },
  areaMoeda: {
    backgroundColor: "#f9f9f9",
    width: "90%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 1,
  },
  titulo: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    fontSize: 18,
    padding: 8,
    color: '#000'
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  botaoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }, 
  valorConvertido: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  },
});
