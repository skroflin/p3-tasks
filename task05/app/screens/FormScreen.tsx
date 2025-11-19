import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function FormScreen({ setUserData }) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        setUserData({ name, gender, age });
        setName('');
        setGender('');
        setAge('');
        alert('Podaci su spremljeni! Prijeđite na Summary tab.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Unos korisničkih podataka</Text>
            <TextInput
                style={styles.input}
                placeholder="Unesi ime"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Unesi spol"
                value={gender}
                onChangeText={setGender}
            />
            <TextInput
                style={styles.input}
                placeholder="Unesi godine"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Spremi</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 100 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#D1D7FF',
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: '#7a96cc',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});