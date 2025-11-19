import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();


const icons = {
    Pocetna: 'home-outline',
    Forma: 'create-outline',
    Sazetak: 'information-circle-outline',
};

export default function TabNavigator({ userData, setUserData }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name={icons[route.name]} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4B7BE5',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: '#F0F4FF', paddingVertical: 6 }
            })}
        >
            <Tab.Screen name="Pocetna" component={HomeScreen} />
            <Tab.Screen name="Forma">
                {() => <FormScreen setUserData={setUserData} />}
            </Tab.Screen>
            <Tab.Screen name="Sazetak">
                {() => <SummaryScreen userData={userData} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}