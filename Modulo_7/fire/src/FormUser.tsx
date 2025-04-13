import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native';
import db from './firebaseConnection';
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc, getDocs, updateDoc } from 'firebase/firestore'
import { UserList } from './users';

export function FormUsers() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cargo, setCargo] = useState('')
  const [showForm, setShowForm] = useState(true)
  const [users, setUsers] = useState<any>([])
  const [isEditing, setIsEditing] = useState('')

  useEffect(() => {
    const getData = async () => {
      // const docRef = doc(db, 'user', '1')
      // getDoc(docRef).then((snapshot) => {
      //   setNome(snapshot.data()?.nome)
      // })
      // .catch(err => {
      //   console.log('error: ', err)
      // })

      onSnapshot(doc(db, 'user', '1'), (doc) =>{
        setNome(doc.data()?.nome)
      })
    }

    const getDatas = () => {
      const usersRef = collection(db, 'user')
      
      onSnapshot(usersRef, (snapshot) => {
        let lista = []
        snapshot.forEach(doc => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo
          })
        })
        setUsers(lista)
      })
      // getDocs(usersRef)
      //   .then(snapshot => {
      //     let lista = []

      //     snapshot.forEach(doc => {
      //       lista.push({
      //         id: doc.id,
      //         nome: doc.data().nome,
      //         idade: doc.data().idade,
      //         cargo: doc.data().cargo
      //       })
      //     })

      //     setUsers(lista)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }

    getDatas()
    // getData()
  }, [])

  const editUser = (data) => {
    setNome(data.nome)
    setIdade(data.idade)
    setCargo(data.cargo)
    setIsEditing(data.id)
  }


  const handleRegister = async () => {

    // await setDoc(doc(db, 'user', '3'), {
    //   nome: 'cccc',
    //   idade: '75',
    //   cargo: 'backend'
    // })
    // .then(() => console.log('Cadastrado com sucesso'))
    // .catch(err => console.log(err))

    await addDoc(collection(db, 'user'), {
      nome,
      idade,
      cargo
    }).then(() => {
      console.log('Cadastrado com sucesso')
      setNome('')
      setIdade('')
      setCargo('')
      Keyboard.dismiss()
    }).catch(err => console.log(err))
  }

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  const handleEditUser = async () => {
    const docRef = doc(db, 'user', isEditing)

    await updateDoc(docRef, {
      nome,
      idade,
      cargo
    })

    setNome('')
    setIdade('')
    setCargo('')
    setIsEditing('')

  }

  return (
    <View style={styles.container}>
      {showForm && (
        <View>
          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input}
            placeholder='Digite o seu nome'
            value={nome}
            onChangeText={ text => setNome(text) }
          />

          <Text style={styles.label}>Idade:</Text>
          <TextInput 
            style={styles.input}
            placeholder='Digite a sua idade'
            value={idade}
            onChangeText={ text => setIdade(text) }
          />

          <Text style={styles.label}>Cargo:</Text>
          <TextInput 
            style={styles.input}
            placeholder='Digite o seu cargo'
            value={cargo}
            onChangeText={ text => setCargo(text) }
          />

          {isEditing !== '' ? (
            <TouchableOpacity style={styles.button} onPress={handleEditUser}>
              <Text style={styles.buttonText}>Editar Usuário</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          )}

        </View>
      )}

      <TouchableOpacity style={{ marginTop: 8 }} onPress={handleToggleForm}>
        <Text style={{ textAlign: 'center', color: '#000' }}>
          {showForm ? 'Esconder form' : 'Mostrar form'}
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 14, marginLeft: 8, fontSize: 20, color: '#000'}}>Usuários</Text>
      <FlatList 
        style={styles.list}
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <UserList data={item} handleEdit={item => editUser(item)}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    marginHorizontal: 8
  },
  buttonText: {
    padding: 8,
    color: '#fff',
    textAlign: 'center'
  },
  label: { 
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
    marginLeft: 8
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 8,
    marginBottom: 4,
    paddingVertical: 8
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8
  }
});
