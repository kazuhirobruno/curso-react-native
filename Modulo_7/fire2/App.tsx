import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormUsers } from './src/FormUser';
import { auth } from './src/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleCreateUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          email: user.email,
          uid: user.uid
        })

        setLoading(false)
        return
      }

      setAuthUser(null)
      setLoading(false)
    })
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setAuthUser({
          email: user.user.email,
          uid: user.user.uid
        })
      })
      .catch(err => {
        if (err.code === 'auth/invalid-credential') {
          console.log('Credenciais inválidas')
          return
        } 
        console.log(err)
      })
  }

  const handleLogout = async () => {
    await signOut(auth)
    setAuthUser(null)
  }

  if (authUser) {
    return (
      <FormUsers />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <FormUsers /> */}
      {loading && (<Text style={{ fontSize: 20, marginLeft: 8, color: '#000', marginBottom: 8 }}>Carregando informações</Text>)}
      <Text style={{
        marginLeft: 8,
        fontSize: 18,
        color: "#000"
      }}>E-mail:</Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite seu e-mail'
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Text style={{
        marginLeft: 8,
        fontSize: 18,
        color: "#000"
      }}>Senha:</Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite sua senha'
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={[styles.button, { marginBottom: 8 }]} onPress={handleCreateUser}>
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginBottom: 8 }]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>

      {authUser && (
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair da conta</Text>
        </TouchableOpacity>
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
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#000',
    marginHorizontal: 8,
    padding: 8
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
});
