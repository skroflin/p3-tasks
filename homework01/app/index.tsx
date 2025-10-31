import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import UserProfile from "./UserProfile";

export default function Index() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [gender, setGender] = useState("")
  return (
    <View
      style={styles.container}
    >
      <View>
        <Text style={styles.paragraph}>
          1. domaća zadaća
        </Text>
        <TextInput
          placeholder="Ime"
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Prezime"
          onChangeText={setSurname}
          style={styles.input}
        />
        <TextInput
          placeholder="Spol"
          onChangeText={setGender}
          style={styles.input}
        />
      </View>
      <UserProfile
        name={name}
        surname={surname}
        gender={gender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 12
  }
});