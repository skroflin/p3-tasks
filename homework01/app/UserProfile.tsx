import { View, Text, StyleSheet } from "react-native";

export default function UserProfile({ name, surname, gender }) {
    return (
        <View style={styles.profileDisplay}>
            <Text style={styles.profileHeader}>
                Prikaz profila
            </Text>
            <Text style={styles.paragraph}>
                Ime: {name}
            </Text>
            <Text style={styles.paragraph}>
                Surname: {surname}
            </Text>
            <Text style={styles.paragraph}>
                Gender: {gender}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        margin: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
    profileDisplay: {
        marginTop: 20,
        padding: 15,
        borderRadius: 5
    },
    profileHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    }
});