import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREEN
import Login from "../screen/AuthScreen/login";
import Register from "../screen/AuthScreen/signup";

// INSTANCE DE STACK
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
