import { StyleSheet } from "react-native";

export const commonStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F4F4F4",
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 5,
        textAlign: 'center'
    },

    headerSubtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
});