import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const [singlePost, setSinglePost] = useState(null)
  const [posts, setPosts] = useState([])
  const [loadingSinglePost, setLoadingSinglePost] = useState(true)
  const [loadingList, setLoadingList] = useState(true)

  const fetchSinglePost = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data = await res.json()
      setSinglePost(data)
    } catch (error) {
      console.log('Greška', error)
    } finally {
      setLoadingSinglePost(false)
    }
  }

  const fetchPostList = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.log('Greška', error)
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    fetchSinglePost()
    fetchPostList()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Pojedinačna objava</Text>
      {loadingSinglePost ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>{singlePost?.title}</Text>
          <Text style={styles.text}>{singlePost?.body}</Text>
        </View>
      )}
      <Text style={styles.sectionTitle}>Lista objava</Text>
      {loadingList ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 22
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 12
  },
  card: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  },
  text: {
    fontSize: 12,
    color: 'white'
  }
})