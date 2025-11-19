import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigacija -> Zadatak 1 </Text>
            <Text style={styles.description}>
                Ova aplikacija prikazuje osnovnu, stack, navigaciju između dva ekrana.
            </Text>
            <Button
                title="Idi na About ekran"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
    description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});