import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View, Button } from "react-native";

const API_URL = 'https://69418651686bc3ca81674c88.mockapi.io/api/v1/cars'

export default function Index() {
  const [cars, setCars] = useState([])
  const [name, setName] = useState('')

  const fetchCars = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setCars(data)
    } catch (err) {
      console.log('Greška:', err)
    }
  }

  const createCar = async () => {
    if (!name) {
      alert('Unesite naziv automobila')
      return
    }
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
      })

      setName('')
      fetchCars()
    } catch (err) {
      console.log('Greška:', err)
    }
  }

  const updateCar = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
      })

      setName('')
      fetchCars()
    } catch (err) {
      console.log('Greška:', err)
    }
  }

  const deleteCar = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      fetchCars()
    } catch (err) {
      console.log('Greška:', err)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crud</Text>
      <Text style={styles.subTitle}>Automobili</Text>
      <TextInput
        placeholder="Unesite naziv automobila"
        value={name}
        onChangeText={setName}
        style={styles.textInput}
      />
      <Button onPress={createCar} style={styles.button} title="Kreirajte automobil" />
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.carName}>
              Naziv: {item.name}
            </Text>
            <Text style={styles.date}>
              Kreirano: {new Date(item.createdAt).toLocaleDateString()}
            </Text>
            <View style={styles.button}>
              <Button onPress={() => updateCar(item.id)} title="Uredi" />
              <Button onPress={() => deleteCar(item.id)} title="Obriši" />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },
  card: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8
  },
  carName: {
    fontSize: 15,
    fontWeight: '600'
  },
  date: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})