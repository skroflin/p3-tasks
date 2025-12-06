import { useState } from 'react';
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TodoListScreen() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Kupovina',
            description: 'Otići u dućan, kupiti namirnice',
            done: false,
        },
        { id: 2, title: 'Veš', description: 'Oprati bijelo rublje', done: false },
        {
            id: 3,
            title: 'Ručak',
            description: 'Napraviti ručak - piletina i riža',
            done: false,
        },
    ]);

    const handleAdd = () => {
        if (title.trim() === "" || description.trim() === "") return;

        const newItem = {
            id: items.length + 1,
            title,
            description,
            done: false,
        };

        setItems([...items, newItem]);
        setTitle("");
        setDescription("");
    };

    const toggleDone = (id: any) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a To-Do item</Text>
            <TextInput
                placeholder="Title..."
                onChangeText={setTitle}
                value={title}
                style={styles.input}
            />
            <TextInput
                placeholder="Description..."
                onChangeText={setDescription}
                value={description}
                style={styles.input}
            />
            <Button title="Add To-Do" onPress={handleAdd} />
            <FlatList
                style={{ marginTop: 20 }}
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => toggleDone(item.id)}
                        style={[
                            styles.item,
                            item.done ? styles.itemDone : null
                        ]}
                    >
                        <Text style={styles.itemTitle}>
                            {item.title}
                            {item.done ? '+' : '-'}
                        </Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'ccc',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    item: {
        padding: 14,
        backgroundColor: '#ced3db',
        borderRadius: 10,
        marginTop: 10
    },
    itemDone: {
        backgroundColor: '#a4ebc6',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 15,
        color: '555',
    }
});
