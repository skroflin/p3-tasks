import { useState } from "react"
import * as ImagePicker from 'expo-image-picker'
import { ActivityIndicator, Alert, Button, Image, StyleSheet, View, Text } from "react-native"

export default function ImageUploadScreen() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(null)

    const pickImage = async () => {
        const { status, canAskAgain } = await ImagePicker.getMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
            const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (!permission.granted) {
                Alert.alert(
                    'Nema dozvole',
                    canAskAgain ? 'Aplikaciji je potrebna dozvola za pristup slikama!' : 'Dozvolu možeš omogućiti u postavkama uređaja.'
                )
                return
            }
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.7
        })
        if (!result.canceled) {
            setImage(result.assets[0])
        }
    }

    const uploadImage = async () => {
        if (!image) return

        setLoading(true)

        const formData = new FormData()
        formData.append('file', {
            uri: image.uri,
            name: image.name,
            type: image.type
        })

        const API_URL = 'https://image-upload.free.beeceptor.com/upload'

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error('Prijenos nije uspio!')
            }

            Alert.alert('Uspjeh', 'Slika je uspješno prenesena!')

            const data = await response.json()
            console.log('Podaci uspješno uneseni, URL slike je:', data.location)
        } catch (error) {
            Alert.alert('Greška', error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Prijenos slike</Text>
            <Button title="Odaberi sliku" onPress={pickImage} />
            {image && <Image source={{ uri: image.uri }} style={styles.image} />}
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                image && <Button title="Upload slike" onPress={uploadImage} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 22,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 22
    }
})