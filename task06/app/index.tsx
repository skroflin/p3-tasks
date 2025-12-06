import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TodoListScreen from "./screens/ToDoList";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#e1e3e6'
        }}
      >
        <TodoListScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
