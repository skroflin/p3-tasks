import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer> Greška
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Početna' }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'O aplikaciji' }} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}