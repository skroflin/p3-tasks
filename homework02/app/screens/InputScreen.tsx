import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AlbumContext } from "../index";
import { commonStyle } from "../styles/CommonStyle";

export default function InputScreen({ navigation }: any) {
    const { album, setAlbum }: any = useContext(AlbumContext)

    const [performerName, setPerformerName] = useState('')
    const [albumName, setAlbumName] = useState('')
    const [publishingYear, setPublishingYear] = useState('')

    useEffect(() => {
        if (album) {
            setPerformerName(album.performerName)
            setAlbumName(album.albumName)
            setPublishingYear(album.publishingYear)
        }
    }, [album])

    const saveData = () => {
        setAlbum({ performerName, albumName, publishingYear })
        navigation.navigate("Read")
    }

    return (
        <View style={commonStyle.container}>

            <Text style={commonStyle.headerTitle}>Unos glazbenog albuma</Text>
            <Text style={commonStyle.headerSubtitle}>
                Ispunite formu za spremanje
            </Text>

            <View style={styles.card}>

                <Text style={styles.label}>Izvođač</Text>
                <TextInput
                    placeholder={album?.performerName ?? "Unesite ime"}
                    style={styles.input}
                    onChangeText={setPerformerName}
                />

                <Text style={styles.label}>Naziv albuma</Text>
                <TextInput
                    placeholder={album?.albumName ?? "Unesite prezime"}
                    style={styles.input}
                    onChangeText={setAlbumName}
                />

                <Text style={styles.label}>Godina izdanja</Text>
                <TextInput
                    placeholder={album?.publishingYear ?? "Unesite godine"}
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setPublishingYear}
                />

                <TouchableOpacity style={styles.btn} onPress={saveData}>
                    <Text style={styles.btnText}>Spremi podatke</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
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
    label: {
        fontSize: 14,
        color: "#444",
        marginBottom: 6,
        marginTop: 12,
        fontWeight: "500",
    },
    input: {
        borderWidth: 1,
        borderColor: "#d4d4d4",
        padding: 14,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: "#fafafa",
    },
    btn: {
        backgroundColor: "#4b7bec",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#4b7bec",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        marginTop: 30
    },
    btnText: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        textTransform: 'uppercase'
    },
});