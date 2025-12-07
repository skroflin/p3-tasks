import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AlbumContext } from "../index";
import { commonStyle } from "../styles/CommonStyle";

export default function ReadScreen({ navigation }) {
    const { album } = useContext(AlbumContext)

    return (
        <View style={commonStyle.container}>

            <Text style={commonStyle.headerTitle}>Pregled albuma</Text>
            <Text style={commonStyle.headerSubtitle}>Prikaz spremljenih podataka</Text>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.label}>Izvođač:</Text>
                    <Text style={styles.value}>{album.performerName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Naziv albuma:</Text>
                    <Text style={styles.value}>{album.albumName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Godine:</Text>
                    <Text style={styles.value}>{album.publishingYear}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Input")}
            >
                <Text style={commonStyle.buttonText}>Ažuriraj podatke</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 22,
        borderRadius: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        marginBottom: 30,
    },
    row: {
        marginBottom: 18,
    },
    label: {
        fontSize: 15,
        color: "#666",
        marginBottom: 3,
    },
    value: {
        fontSize: 20,
        fontWeight: "600",
        color: "#222",
    },
    btn: {
        backgroundColor: "#20bf6b",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#20bf6b",
        shadowOpacity: 0.3,
        shadowRadius: 6,
    }
});