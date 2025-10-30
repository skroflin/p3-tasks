import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.paragraph}>
        Pozdrav svijete!
      </Text>
      <Button
        title={visible ? 'Sakrij' : 'Prikaži'}
        onPress={() => setVisible(!visible)}
      />
      <Button 
        title={`Broj klikova: ${count}`}
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});