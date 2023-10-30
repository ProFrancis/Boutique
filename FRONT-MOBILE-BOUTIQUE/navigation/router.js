import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// CONTEXT
import { AuthContext } from "../context/authContext";

// STACKS
import AuthStack from "./authStack";
import ProductStack from "./productStack";
import Home from "../screen/home";
import Profil from "../screen/AuthScreen/profil";

// INSTANCE DE TAB
const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        {user == null ? (
          <>
            <Tabs.Screen
              name="Auth"
              component={AuthStack}
              options={{ headerShown: false, tabBarStyle: { display: "none" } }}
            />
          </>
        ) : (
          <>
            <Tabs.Screen name="Home" component={ProductStack} options={{ headerShown: false  }} />
            <Tabs.Screen name="Profile" component={Profil} options={{ headerShown: false  }} />
          </>
        )}
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
