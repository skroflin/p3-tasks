import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const slike = [
  {
    uri: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/307029989_192902416456758_2110848565068051665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r4dX37p4DB8Q7kNvwFQUaqh&_nc_oc=AdkaNbG1ZnBf9re_JZmDaPIaM8ykFzFFslu9EZqppIg3lGIM67HcDUbOSGtbTjjhOiUTgQBLBNdfsOmqOrBpV9Sh&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=9cm7dTvYekvltuumLifd1A&oh=00_Afdr1Z-Pd-b5ajiRJ8a9Vu30qJ01DUWWxvG-WbOqJSXhYg&oe=68FEAED6',
    description: 'Slika 1'
  },
  {
    uri: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/307029989_192902416456758_2110848565068051665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r4dX37p4DB8Q7kNvwFQUaqh&_nc_oc=AdkaNbG1ZnBf9re_JZmDaPIaM8ykFzFFslu9EZqppIg3lGIM67HcDUbOSGtbTjjhOiUTgQBLBNdfsOmqOrBpV9Sh&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=9cm7dTvYekvltuumLifd1A&oh=00_Afdr1Z-Pd-b5ajiRJ8a9Vu30qJ01DUWWxvG-WbOqJSXhYg&oe=68FEAED6',
    description: 'Slika 2'
  },
  {
    uri: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/307029989_192902416456758_2110848565068051665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r4dX37p4DB8Q7kNvwFQUaqh&_nc_oc=AdkaNbG1ZnBf9re_JZmDaPIaM8ykFzFFslu9EZqppIg3lGIM67HcDUbOSGtbTjjhOiUTgQBLBNdfsOmqOrBpV9Sh&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=9cm7dTvYekvltuumLifd1A&oh=00_Afdr1Z-Pd-b5ajiRJ8a9Vu30qJ01DUWWxvG-WbOqJSXhYg&oe=68FEAED6',
    description: 'Slika 3'
  },
  {
    uri: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/307029989_192902416456758_2110848565068051665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r4dX37p4DB8Q7kNvwFQUaqh&_nc_oc=AdkaNbG1ZnBf9re_JZmDaPIaM8ykFzFFslu9EZqppIg3lGIM67HcDUbOSGtbTjjhOiUTgQBLBNdfsOmqOrBpV9Sh&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=9cm7dTvYekvltuumLifd1A&oh=00_Afdr1Z-Pd-b5ajiRJ8a9Vu30qJ01DUWWxvG-WbOqJSXhYg&oe=68FEAED6',
    description: 'Slika 4'
  },
  {
    uri: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/307029989_192902416456758_2110848565068051665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r4dX37p4DB8Q7kNvwFQUaqh&_nc_oc=AdkaNbG1ZnBf9re_JZmDaPIaM8ykFzFFslu9EZqppIg3lGIM67HcDUbOSGtbTjjhOiUTgQBLBNdfsOmqOrBpV9Sh&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=9cm7dTvYekvltuumLifd1A&oh=00_Afdr1Z-Pd-b5ajiRJ8a9Vu30qJ01DUWWxvG-WbOqJSXhYg&oe=68FEAED6',
    description: 'Slika 5'
  },
]

const ImageCard = ({ uri, description }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.paragraph}>{description}</Text>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <ScrollView style={
      {
        backgroundColor: "f2f2f2"
      }
    }
    >
      {slike.map((item, index) => (
        <ImageCard
          key={index}
          uri={item.uri}
          description={item.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 16
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16
  }
});
