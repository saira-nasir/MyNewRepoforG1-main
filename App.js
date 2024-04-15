import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// import Login from "./Login";
// import Home from "./Home";
// import Dashboard from "./Dashboard";

import Register from "./Register";
import Home from "./Home";

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}