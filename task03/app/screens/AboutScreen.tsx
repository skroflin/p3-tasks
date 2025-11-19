import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>O aplikaciji</Text>
            <Text style={styles.text}>
                Ova aplikacija je jednostavan primjer kako funkcionira navigacija
                između ekrana u React Nativeu. Na sljedećim vježbama ćemo dodati i
                prijenos podataka te rad sa stanjem (state).
            </Text>
            <Button title="Vrati se na početni ekran" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    text: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});