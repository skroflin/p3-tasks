import { View, Text, Image, StyleSheet } from 'react-native';

export default function SummaryScreen({ userData }) {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../assets/snack-icon.png')} style={styles.image} /> */}
            {userData.name ? (
                <>
                    <Text style={styles.title}>Sažetak unosa</Text>
                    <Text style={styles.text}>Ime: {userData.name}</Text>
                    <Text style={styles.text}>Spol: {userData.gender}</Text>
                    <Text style={styles.text}>Godine: {userData.age}</Text>
                </>
            ) : (
                <Text style={styles.noData}>Nema podataka za prikaz.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    image: { width: 160, height: 160, marginBottom: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    text: { fontSize: 18, marginBottom: 5 },
    noData: { fontSize: 18, color: 'gray', textAlign: 'center' },
});