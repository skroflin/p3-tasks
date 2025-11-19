import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormScreen({ setUserData }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        setUserData({ name, age });
        setName('');
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
                placeholder="Unesi godine"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <Button title="Spremi podatke" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
    },
});