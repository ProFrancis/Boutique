import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREEN
import Home from "../screen/home";
import DetailProduct from "../screen/Products/detail.product";

// INSTANCE DE STACK
const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="List" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Detail_Product" component={DetailProduct} />
    </Stack.Navigator>
  );
}
