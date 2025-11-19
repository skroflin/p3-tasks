import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dobrodošli!</Text>
            {/* <Image source={require('../assets/snack-icon.png')} style={styles.image} /> */}
            <Text style={styles.text}>
                U ovoj aplikaciji možete unijeti svoje podatke i vidjeti ih na zasebnom ekranu.
                Koristite donju navigaciju za kretanje između tabova.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    image: { width: 180, height: 180, marginBottom: 20 },
    text: { fontSize: 16, textAlign: 'center' },
});