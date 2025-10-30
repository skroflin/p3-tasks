import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)
  const [lightMode, setLightMode] = useState(true)
  
  const backgroundColor = lightMode ? '#edf0ef' : '#222423'
  const textColor = lightMode ? '#222423' : '#edf0ef'

  const toggleTheme = () => {
    setLightMode(!lightMode)
  }
  return (
    <View
      style={[styles.container, {backgroundColor}]}
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
      <Text style={[styles.paragraph, {color: textColor}]}>
        {lightMode ? 'Svijetli način rada' : 'Tamni način rada'}
      </Text>
      <Button 
        title={lightMode ? 'Prebaci na tamni način rada' : 'Prebaci na svijetli način rada'}
        onPress={toggleTheme}
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